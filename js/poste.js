function openLetterImg(src) {
  const modal = document.getElementById("letterModal");
  const img = document.getElementById("letterImage");
  img.src = src;
  modal.classList.add("active");
}

function closeLetter() {
  document.getElementById("letterModal").classList.remove("active");
  document.getElementById("letterImage").src = "";
}
