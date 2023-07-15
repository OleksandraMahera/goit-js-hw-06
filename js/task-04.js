const counterValue = 0; 

const valueSpan = document.querySelector("#value"); 
const incrementButton = document.querySelector("[data-action='increment']"); 
const decrementButton = document.querySelector("[data-action='decrement']"); 

incrementButton.addEventListener("click", () => {
  valueSpan.textContent = counterValue + 1; 
});

decrementButton.addEventListener("click", () => {
  valueSpan.textContent = counterValue - 1; 
});




