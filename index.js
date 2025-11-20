document.querySelectorAll(".project-card").forEach(card => {
  const video = card.querySelector("video");

  card.addEventListener("mouseenter", () => {
    video.currentTime = 0; 
    video.play();
  });

  card.addEventListener("mouseleave", () => {
    video.pause();
  });
});
