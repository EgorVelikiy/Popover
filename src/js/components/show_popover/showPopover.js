import createPopover from '../popover/create_popover';

export default class ShowPopover {
  constructor() {
    this._btn = document.getElementById('toggler');
    this.popover;
  }

  init() {
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
    const con = document.querySelector('.container');

    this.popover.style.top =
      target.getBoundingClientRect().top - target.offsetHeight / 2 - con.offsetHeight + 'px';
    this.popover.style.left =
      target.getBoundingClientRect().left - target.offsetWidth / 2 + 20 + 'px';

    document.body.appendChild(this.popover);
  }
}
