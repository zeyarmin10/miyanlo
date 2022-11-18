"use strict";

function buttonClick() {
  document.querySelector(".overlay").style.display = "block";
  setTimeout(function () {
    const loader = document.querySelector(".overlay");
    loader.style.display = "none";
    document.querySelector("#myModal").style.display = "block";
  }, 2500);
  const modal = document.querySelector(".modal");
  const modalDialog = document.querySelector(".modal-dialog");
  modalDialog.style.display = "block";
}
function closeButton() {
  document.querySelector(".modal").style.display = "none";
}
