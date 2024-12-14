const wheel = document.querySelector(".wheel");
const spinBtn = document.querySelector(".spinBtn");
const overlay = document.querySelector(".overlay");
const overlayText = document.querySelector(".overlay h1");
let value = Math.ceil(Math.random() * 3600);

const segments = [
  "75%", "Unlucky", "10%", "Unlucky", "5%", "Unlucky", "10%", "Unlucky",
  "5%", "Unlucky", "10%", "Unlucky", "25%", "Unlucky", "5%", "Unlucky",
  "50%", "Unlucky", "25%", "Unlucky"
];

const segmentAngle = 360 / segments.length;

spinBtn.addEventListener("click", () => {
  spinBtn.style.pointerEvents = "none";
  wheel.style.transform = `rotate(${value}deg)`;
  const finalAngle = value % 360;
  const segmentIndex = Math.floor((360 - finalAngle) / segmentAngle) % segments.length;
  const resultIndex = (segmentIndex + 2) % segments.length;
  const spinValue = segments[resultIndex];
  let message = "";
  if (spinValue === "Unlucky") {
    message = "Sorry, you were unlucky!";
  }
  else {
    message = `You won! You got a ${spinValue} discount!`;
  }

  setTimeout(() => {
    overlay.classList.toggle("hidden");
    overlayText.textContent = message;
  }, 5500);
});
