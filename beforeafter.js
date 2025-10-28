document.addEventListener("DOMContentLoaded", () => {
  const sliders = document.querySelectorAll(".before-after-container");

  sliders.forEach((container) => {
    const after = container.querySelector(".after");
    const handle = container.querySelector(".slider-handle");

    if (!after || !handle) {
      console.warn("Missing .after or .slider-handle in", container);
      return;
    }

    let isDragging = false;

    const updateSlider = (clientX) => {
      console.log("Slider updating");

      const rect = container.getBoundingClientRect();
      let x = clientX - rect.left;
      if (x < 0) x = 0;
      if (x > rect.width) x = rect.width;

      const percent = (x / rect.width) * 100;
      after.style.clipPath = `inset(0 ${100 - percent}% 0 0)`;
      handle.style.left = `${percent}%`;
    };

    container.addEventListener("mousedown", () => (isDragging = true));
    window.addEventListener("mouseup", () => (isDragging = false));
    container.addEventListener("mousemove", (e) => {
      if (isDragging) updateSlider(e.clientX);
    });

    container.addEventListener("touchstart", () => (isDragging = true));
    window.addEventListener("touchend", () => (isDragging = false));
    container.addEventListener("touchmove", (e) => {
      if (isDragging) updateSlider(e.touches[0].clientX);
    });
  });
});
