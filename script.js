const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const modalInner = document.getElementById("modal-inner");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();
  modalText.innerHTML = `
  <div class="modal-inner-loading">
    <img src="images/loading.svg" class="loading">
    <p id="upload-text">
        Uploading your data to the dark web...
    </p>
  </div>`;

  setTimeout(() => {
    document.getElementById("upload-text").textContent = "Making the sale...";
  }, 1500);

  setTimeout(() => {
    modalInner.innerHTML = `
    <h2>Thanks you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;
  }, 3000);
});
