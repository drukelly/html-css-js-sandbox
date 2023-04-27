// 
const isElementInViewport = (element) => {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight || document.documentElement.clientHeight;
  const windowWidth = window.innerWidth || document.documentElement.clientWidth;
  // console.log(rect, windowHeight, windowWidth);
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= windowHeight &&
    rect.right <= windowWidth
  );
};

const detectElements = () => {
  const videosOnPage = document.querySelectorAll('video');
  const videosObjects = Array.from(videosOnPage);
  videosObjects.forEach((video) => {
    if (isElementInViewport(video)) {
      video.play();
    } else {
      video.pause();
    }
  });
};

window.onload = () => {
  detectElements();
};

window.addEventListener('scroll', detectElements, false);