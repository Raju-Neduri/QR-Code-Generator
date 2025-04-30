function generateQR() {
  const qrText = document.getElementById("qrText").value;
  const qrImage = document.getElementById("qrImage");
  const generateBtn = document.getElementById("generateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  // Input validation
  if (!qrText) {
    document.getElementById("qrText").classList.add("error");
    setTimeout(() => {
      document.getElementById("qrText").classList.remove("error");
    }, 300);
    return;
  }

  // Disable the generate button and generate QR code
  generateBtn.style.display = "none";
  resetBtn.style.display = "inline-block";

  const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(
    qrText
  )}&size=200x200`;

  qrImage.src = apiUrl;
  document.getElementById("imgBox").classList.add("show-img");

  // Enable download button
  downloadBtn.style.display = "inline-block";
}

function resetQR() {
  document.getElementById("qrText").value = "";
  document.getElementById("qrImage").src = "";
  document.getElementById("imgBox").classList.remove("show-img");

  const generateBtn = document.getElementById("generateBtn");
  const resetBtn = document.getElementById("resetBtn");
  const downloadBtn = document.getElementById("downloadBtn");

  generateBtn.style.display = "inline-block";
  resetBtn.style.display = "none";
  downloadBtn.style.display = "none";
}

function downloadQR() {
  const qrImage = document.getElementById("qrImage");
  const link = document.createElement("a");
  link.href = qrImage.src;
  link.download = "qr-code.png";
  link.click();
}
