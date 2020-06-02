import './style.css';

document.addEventListener('DOMContentLoaded', () => {
  const lazyBackgrounds = [].slice.call(
    document.querySelectorAll('._lazy-background')
  );
  if ('IntersectionObserver' in window) {
    const lazyBackgroundObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('_visible');
          lazyBackgroundObserver.unobserve(entry.target);
        }
      });
    });
    lazyBackgrounds.forEach((lazyBackground) => {
      lazyBackgroundObserver.observe(lazyBackground);
    });
  }
});
