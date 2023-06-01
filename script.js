const videos = document.querySelectorAll(".video-container video");
const popupVideo = document.querySelector(".popup-video");
const allVideos = document.querySelector(".popup-video video");
const closeBtn = document.querySelector("#close");

videos.forEach((video) => {
  video.onclick = () => {
    popupVideo.style.display = "block";
    allVideos.src = video.getAttribute("src");
  };
});

closeBtn.onclick = () => {
  popupVideo.style.display = "none";
  allVideos.pause();
};
