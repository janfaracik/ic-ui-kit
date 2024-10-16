import {
  Component,
  Element,
  Host,
  h,
  Prop,
  Listen,
  Watch,
  State,
  Method,
  Event,
  EventEmitter,
} from "@stencil/core";
import { getSlotElements, isPropDefined } from "../../utils/helpers";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

@Component({
  tag: "ic-popover-menu",
  styleUrl: "ic-popover-menu.css",
  shadow: {
    delegatesFocus: true,
  },
})
export class PopoverMenu {
  private anchorEl: HTMLElement;
  private ARIA_LABEL: string = "aria-label";
  private backButton: HTMLIcMenuItemElement;
  private currentFocus: number;
  private popoverMenuEls: HTMLIcMenuItemElement[] = [];
  private popperInstance: PopperInstance;

  @Element() el: HTMLIcPopoverMenuElement;

  @State() openingFromChild: boolean = false;
  @State() openingFromParent: boolean = false;

  /**
   * The ID of the element the popover menu will anchor itself to. This is required unless the popover is a submenu.
   */
  @Prop() anchor: string;

  /**
   * @internal The parent popover menu of a child popover menu.
   */
  @Prop() parentLabel?: string;

  /**
   * @internal The parent popover menu of a child popover menu.
   */
  @Prop() parentPopover?: HTMLIcPopoverMenuElement;

  /**
   * The unique identifier for a popover submenu.
   */
  @Prop() submenuId?: string;

  /**
   * @internal The level of menu being displayed.
   */
  @Prop() submenuLevel: number = 1;

  /**
   * If `true`, the popover menu will be displayed.
   */
  @Prop({ reflect: true, mutable: true }) open: boolean = undefined;

  @Watch("open")
  watchOpenHandler(): void {
    if (this.open) {
      if (
        this.parentPopover !== undefined &&
        !this.popoverMenuEls.some((menuItem) => menuItem.id)
      ) {
        this.popoverMenuEls.unshift(this.backButton);
      }

      this.currentFocus = isPropDefined(this.submenuId) ? 1 : 0;
      // Needed so that anchorEl isn't always focused
      setTimeout(this.setButtonFocus, 50);
    } else if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  /**
   * Emitted when the popover menu is closed.
   */
  @Event() icPopoverClosed: EventEmitter<void>;

  disconnectedCallback(): void {
    if (this.popperInstance) {
      this.popperInstance.destroy();
      this.popperInstance = null;
    }
  }

  componentDidLoad(): void {
    const slotWrapper = this.el.shadowRoot.querySelector("ul.button");
    const popoverMenuElements = getSlotElements(slotWrapper);

    if (popoverMenuElements !== null) {
      this.addMenuItems(popoverMenuElements);
    }

    if (
      this.submenuId === undefined &&
      this.el.getAttribute(this.ARIA_LABEL) === null
    ) {
      console.error(
        `No aria-label specified for popover menu component - aria-label required`
      );
    }
  }

  componentWillRender(): void {
    this.anchorEl = this.findAnchorEl(this.anchor);
  }

  componentDidRender(): void {
    if (this.open && !this.popperInstance) {
      this.initPopperJS();
    }
  }

  @Listen("handleMenuItemClick")
  handleMenuItemClick(
    ev: CustomEvent<{
      label: string;
      hasSubMenu: boolean;
    }>
  ): void {
    if (!ev.detail.hasSubMenu && ev.detail.label !== "Back") {
      this.closeMenu();
    }
  }

  // This is listening for the event emitted when a menu item is acting as a trigger button
  @Listen("triggerPopoverMenuInstance", { capture: true })
  handleSubmenuChange(ev: Event): void {
    // Finds the trigger menu item that has emitted the event
    const target = ev.target as HTMLIcMenuItemElement;
    this.open = false;

    // Find the popover menu that the menu item triggers (i.e. submenu-trigger-for === submenu-id).
    const childEl = document.querySelector(
      `ic-popover-menu[submenu-id=${target.submenuTriggerFor}]`
    ) as HTMLIcPopoverMenuElement;
    // Set the parent popover menu of the submenu and open the submenu
    childEl.parentPopover = this.el;
    childEl.anchor = this.anchor;
    childEl.ariaLabel = this.el.getAttribute(this.ARIA_LABEL);
    childEl.openFromParent();
    childEl.submenuLevel = this.submenuLevel + 1;
    // Set the label in the submenu using the label of the menu item that has emitted the event
    childEl.parentLabel = target.label;
  }

  @Listen("click", { target: "document" })
  handleClick(ev: Event): void {
    if (this.open && this.isNotPopoverMenuEl(ev)) {
      // If menu is open and the next click on the document is not a popover El, close the popover
      this.closeMenu();
    }
  }

  // Manages the keyboard navigation in the popover menu
  @Listen("keydown", {})
  handleKeyDown(ev: KeyboardEvent): void {
    switch (ev.key) {
      case "ArrowDown":
      case "ArrowUp":
        ev.preventDefault();
        this.currentFocus = this.getNextItemToSelect(
          this.currentFocus,
          ev.key === "ArrowDown"
        );
        this.setButtonFocus();
        break;
      case "Home":
        //Sets home focus as first element, or back button
        this.currentFocus = 0;
        this.setButtonFocus();
        break;
      case "End":
        //Sets end focus as last element
        this.currentFocus = this.popoverMenuEls.length - 1;
        this.setButtonFocus();
        break;
      case "Escape":
      case "Tab":
        ev.preventDefault();
        if (this.open) {
          this.closeMenu(true);
          this.el.blur();
        }
        break;
    }
  }

  /**
   * @internal Opens the menu from the child menu.
   */
  @Method()
  async openFromChild(): Promise<void> {
    this.open = true;
    this.openingFromChild = true;

    setTimeout(() => (this.openingFromChild = false), 1000);
  }

  /**
   * @internal Opens the menu from the parent menu.
   */
  @Method()
  async openFromParent(): Promise<void> {
    this.open = true;
    this.openingFromParent = true;

    setTimeout(() => (this.openingFromParent = false), 1000);
  }

  private setButtonFocus = () => {
    this.popoverMenuEls[this.currentFocus]?.focus();
  };

  // Checks that the popover menu has an anchor
  private findAnchorEl = (anchor: string): HTMLElement => {
    let anchorElement: HTMLElement = null;
    if (!anchor) {
      this.submenuId === undefined &&
        console.error("No anchor specified for popover component");
    } else {
      anchorElement = document.querySelector(
        anchor.indexOf("#") === 0 ? anchor : "#" + anchor
      );
      if (anchorElement === null) {
        console.error(`Popover anchor element '${anchor}' not found`);
      }
    }
    return anchorElement;
  };

  private isNotPopoverMenuEl = (ev: Event) => {
    const { id, tagName } = ev.target as HTMLElement;
    return (
      id !== this.anchor &&
      tagName !== "IC-MENU-ITEM" &&
      tagName !== "IC-MENU-GROUP" &&
      tagName !== "IC-POPOVER-MENU"
    );
  };

  /**
   * @internal Close the menu, emit icPopoverClosed of the root popover
   * @param setFocusToAnchor when true return focus to anchor element when menu is closed
   */
  @Method()
  async closeMenu(setFocusToAnchor = false): Promise<void> {
    this.open = false;
    if (this.parentPopover) {
      this.parentPopover.closeMenu(setFocusToAnchor);
    } else {
      if (setFocusToAnchor) {
        this.anchorEl?.focus();
      }
      this.icPopoverClosed.emit();
    }
  }

  private getNextItemToSelect = (
    currentItem: number,
    movingDown: boolean
  ): number => {
    const numButtons = this.popoverMenuEls.length - 1;

    if (currentItem < 1) {
      currentItem = 0;
    }

    let nextItem = movingDown ? currentItem + 1 : currentItem - 1;

    // Check if wrap around necessary
    if (nextItem < 0) {
      nextItem = numButtons;
    } else if (nextItem > numButtons) {
      nextItem = 0;
    }

    return nextItem;
  };

  private addMenuItems = (elements: Element[] | NodeListOf<ChildNode>) => {
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLIcMenuItemElement;
      if (el.tagName === "IC-MENU-ITEM") {
        this.popoverMenuEls.push(el);
      } else if (el.tagName === "IC-MENU-GROUP") {
        const groupSlotWrapper = el.shadowRoot.querySelector("ul");
        const menuGroupElements = getSlotElements(groupSlotWrapper);

        this.addMenuItems(menuGroupElements);
      }
    }
  };

  private getMenuAriaLabel = (): string => {
    const ariaLabel = this.el.getAttribute(this.ARIA_LABEL);

    if (isPropDefined(this.submenuId)) {
      return `${ariaLabel}, within nested level ${this.submenuLevel} ${this.parentLabel} submenu,`;
    } else {
      return ariaLabel;
    }
  };

  private handleBackButtonClick = (): void => {
    this.parentPopover.openFromChild();
    this.open = false;
  };

  private initPopperJS = () => {
    this.popperInstance = createPopper(this.anchorEl, this.el, {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
        {
          name: "flip",
          options: {
            fallbackPlacements: ["top-start", "top-end", "bottom-end"],
            rootBoundary: "viewport",
          },
        },
      ],
    });
  };

  render() {
    return (
      <Host class={{ open: this.open }}>
        <div
          id={
            this.parentPopover === undefined
              ? `ic-popover-submenu-${this.submenuId}`
              : ""
          }
          class={{
            menu: true,
          }}
          tabindex={open ? "0" : "-1"}
        >
          <div
            class={{
              "opening-from-parent": this.openingFromParent,
              "opening-from-child": this.openingFromChild,
            }}
          >
            {isPropDefined(this.submenuId) && (
              <div>
                <ic-menu-item
                  class="ic-popover-submenu-back-button"
                  ref={(el) => (this.backButton = el)}
                  label="Back"
                  onClick={this.handleBackButtonClick}
                  id={`ic-popover-submenu-back-button-${this.submenuLevel}`}
                >
                  <svg
                    slot="icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="submenu-back-icon"
                  >
                    <path
                      d="M20 11H7.83L13.42 5.41L12 4L4 12L12 20L13.41 18.59L7.83 13H20V11Z"
                      fill="currentColor"
                    />
                  </svg>
                </ic-menu-item>
                <ic-typography variant="subtitle-small" class="parent-label">
                  {this.parentLabel}
                </ic-typography>
              </div>
            )}
            <ul
              class="button"
              aria-label={this.getMenuAriaLabel()}
              role="menu"
              aria-owns={
                isPropDefined(this.submenuId)
                  ? `ic-popover-submenu-back-button-${this.submenuLevel}`
                  : false
              }
              aria-controls={
                isPropDefined(this.submenuId)
                  ? `ic-popover-submenu-back-button-${this.submenuLevel}`
                  : false
              }
            >
              <slot></slot>
            </ul>
          </div>
        </div>
      </Host>
    );
  }
}
