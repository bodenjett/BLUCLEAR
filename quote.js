document.addEventListener("DOMContentLoaded", () => {
  const first = document.getElementById("first-story");
  const second = document.getElementById("second-story");
  const third = document.getElementById("third-story");
  const button = document.getElementById("calculate-btn");
  const result = document.getElementById("total-price");

  button.addEventListener("click", () => {
    const firstCount = parseInt(first.value) || 0;
    const secondCount = parseInt(second.value) || 0;
    const thirdCount = parseInt(third.value) || 0;

    const total =
      firstCount * 5 +
      secondCount * 8 +
      thirdCount * 11;

    result.textContent = `$${total.toFixed(2)}`;
  });
});
