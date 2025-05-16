const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});
