const quoteEl = document.getElementById("quote");
const btnEl = document.querySelector(".btn");

const quotes = [
  "The best way to predict the future is to create it.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Dream big and dare to fail.",
  "It always seems impossible until it’s done.",
  "Believe you can and you're halfway there.",
  "Do one thing every day that scares you.",
  "Opportunities don't happen, you create them."
];

btnEl.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteEl.textContent = quotes[randomIndex];
});
