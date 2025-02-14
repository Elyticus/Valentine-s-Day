const cookieModal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modal-close-btn");
const acceptBtn = document.getElementById("accept-btn");
const innerText = document.getElementById("modal-inner");
const declineBtn = document.getElementById("decline-btn");
const choiceBtn = document.getElementById("modal-choice-btns");

cookieModal.style.display = "inline";

// Function to toggle the "reverse" class
function toggleReverse(e) {
  e.preventDefault(); // Prevent unintended behavior on mobile
  choiceBtn.classList.toggle("reverse");
}

// Handle hover effect for desktop
declineBtn.addEventListener("mouseover", toggleReverse);

// Handle tap/click for mobile
declineBtn.addEventListener("touchstart", toggleReverse);
declineBtn.addEventListener("click", toggleReverse);

acceptBtn.addEventListener("click", () => {
  innerText.innerHTML = `
    <div class="inner-flex">
        <p class="end-message">
            That's the only correct answer!
        </p>
        <img class="qr-gift" src="./assets/Sea_you_-512.svg" />
   </div>
   `;
});