const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close-btn");
const consentForm = document.getElementById("consent-form");
const modalText = document.getElementById("modal-text");
const declineBtn = document.getElementById("decline-btn");

setTimeout(() => {
  modal.style.display = "inline";
}, 1500);

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});

declineBtn.addEventListener("mouseenter", (e) => {
  document
    .getElementById("modal-choice-btns")
    .classList.toggle("modal-choice-btns-reverse");
});

consentForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(consentForm);
  const name = formData.get("fullName");

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
    document.getElementById("modal-inner").innerHTML = `
    <h2>Thanks <span class="modal-display-name">${name}</span>, you sucker! </h2>
    <p>We just sold the rights to your eternal soul.</p>
    <div class="idiot-gif">
        <img src="images/pirate.gif">
    </div>
    `;

    modalClose.disabled = false;
  }, 3000);
});
