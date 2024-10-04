import createPopover from '../popover/create_popover';

export default class ShowPopover {
  constructor() {
    this._btn = document.querySelector('.btn');
  }

  init() {
    console.log(this.knopka);
    this._btn.addEventListener('click', (e) => {
      this.togglePopover(e.target);
    });
  }

  togglePopover(target) {
    if (this.popover) {
      this.popover.remove();
      this.popover = '';
      return;
    }
    const popover = {
      header: `This is popover header`,
      content: `This is some popover content.
        You just clicked on btn: "${target.id}"`,
    };
    this.popover = createPopover(popover);
    target.offsetParent.appendChild(this.popover);

    this.popover.style.top = target.offsetTop - this.popover.offsetHeight - 15 + 'px';
    this.popover.style.left =
      target.offsetLeft + target.offsetWidth / 2 - this.popover.offsetWidth / 2 + 'px';
  }
}
