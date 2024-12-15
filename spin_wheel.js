const wheel = document.querySelector(".wheel");
const spinBtn = document.querySelector(".spinBtn");
const overlay = document.querySelector(".overlay");
const overlayText = document.querySelector(".overlay h1");


const segments = [
  "75%", "Unlucky", "10%", "Unlucky", "5%", "Unlucky", "10%", "Unlucky",
  "5%", "Unlucky", "10%", "Unlucky", "25%", "Unlucky", "5%", "Unlucky",
  "50%", "Unlucky", "25%", "Unlucky"
];
const segmentAngle = 360 / segments.length;


function getRandomSpinValue() {
  return Math.ceil(Math.random() * 3600);
}


function getSegmentIndex(finalAngle) {
  const segmentIndex = Math.floor((360 - finalAngle) / segmentAngle) % segments.length;
  return (segmentIndex + 2) % segments.length; 
}


function getResultMessage(spinValue) {
  if (spinValue === "Unlucky") {
    return "Sorry, you were unlucky!";
  }
  return `You won! You got a ${spinValue} discount!`;
}


function displayResult(message) {
  setTimeout(() => {
    overlay.classList.toggle("hidden");
    overlayText.textContent = message;
  }, 5500);
}

function handleSpinClick() {
  spinBtn.style.pointerEvents = "none"; 
  const value = getRandomSpinValue();
  wheel.style.transform = `rotate(${value}deg)`; 

  const finalAngle = value % 360; 
  const segmentIndex = getSegmentIndex(finalAngle); 
  const spinValue = segments[segmentIndex]; 
  const message = getResultMessage(spinValue); 

  displayResult(message); 
}

spinBtn.addEventListener("click", handleSpinClick);
