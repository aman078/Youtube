const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length) {
      const adContainers = document.querySelectorAll('.video-ads, .ytp-ad-module');
      adContainers.forEach(ad => ad.remove());
    }
  });
});

observer.observe(document.body, { childList: true, subtree: true });

// Remove any existing ads
const adContainers = document.querySelectorAll('.video-ads, .ytp-ad-module');
adContainers.forEach(ad => ad.remove());
