import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const lazyBackgrounds = [].slice.call(
    document.querySelectorAll('._lazy-background')
  );
  if ('IntersectionObserver' in window) {
    const lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('lazy-background_visible');
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });
    lazyBackgrounds.forEach((lazyBackground) => {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});

const YoutubePopup = class {
  constructor(btn) {
    this.modal = document.getElementById('modalContainer');
    this.btn = btn;
    this.span = document.getElementsByClassName('modal__button-close')[0];
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
    this.btn.setAttribute('tabindex', '1');
    window.removeEventListener('click', this.sideWindowListener);
    this.span.removeEventListener('click', this.destroy);
    document.removeEventListener('keyup', this.escapeListener);
  }
};

const btn = document.getElementById('ytPlayBtn');
const popUpVideo = new YoutubePopup(btn);
btn.onclick = popUpVideo.init;
