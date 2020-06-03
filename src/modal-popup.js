export default class ModalPopup {
  constructor(btn, document) {
    this.modal = document.getElementsByClassName('modal-popup')[0];
    this.btn = btn;
    this.span = document.getElementsByClassName('modal-popup__button-close')[0];
    this.player = undefined;
    this.init = this.init.bind(this);
    this.destroy = this.destroy.bind(this);
    this.sideWindowListener = this.sideWindowListener.bind(this);
    this.escapeListener = this.escapeListener.bind(this);
  }

  sideWindowListener(event) {
    if (event.target === this.modal) {
      this.destroy();
    }
  }

  escapeListener(event) {
    if (event.code === 'Escape') {
      this.destroy();
    }
  }

  init() {
    this.modal.style.display = 'block';
    if (!this.player) {
      // eslint-disable-next-line no-undef
      this.player = new YT.Player('player', {
        events: {
          onReady: (event) => {
            event.target.playVideo();
          }
        }
      });
    } else {
      this.player.playVideo();
    }
    window.addEventListener('click', this.sideWindowListener);
    this.span.addEventListener('click', this.destroy);
    document.addEventListener('keyup', this.escapeListener);
    this.btn.setAttribute('tabindex', '-1');
  }

  destroy() {
    this.player.stopVideo();
    this.modal.style.display = 'none';
    this.btn.removeAttribute('tabindex');
    window.removeEventListener('click', this.sideWindowListener);
    this.span.removeEventListener('click', this.destroy);
    document.removeEventListener('keyup', this.escapeListener);
  }
}
