// Get the modal
var modal = document.getElementById("meals");
var modalImage = document.getElementById("modal-image-box");

// Get the button that opens the modal
var btn = document.getElementById("check-meals");
var btnFood = document.getElementById("view-food");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btnFood.onclick = function() {
  modalImage.style.display = "block";
  modal.style.zIndex = "auto";
}
modalImage.onclick = function() {
  modalImage.style.display = "none";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modalImage.style.display = "none";

}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   modalImage.style.display = "none";

  }
}