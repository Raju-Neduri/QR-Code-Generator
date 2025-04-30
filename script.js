const inputBox = document.getElementById("qrText");
const imgBox = document.getElementById("imgBox");
const qrImage = document.getElementById("qrImage");
const generateBtn = document.getElementById("generateBtn");
const resetBtn = document.getElementById("resetBtn");

function generateQR() {
  const inputValue = inputBox.value.trim();

  if (inputValue === "") {
    inputBox.classList.add("error");
    setTimeout(() => inputBox.classList.remove("error"), 500);
    return;
  }

  qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    inputValue
  )}`;

  generateBtn.style.display = "none";
  resetBtn.style.display = "block";
  imgBox.classList.add("show-img");
}

function resetQR() {
  inputBox.value = "";
  imgBox.classList.remove("show-img");
  qrImage.src = "";
  generateBtn.style.display = "block";
  resetBtn.style.display = "none";
}
