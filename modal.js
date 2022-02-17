// Get the modal
var modal = document.getElementById("meals");
var header = document.getElementById("header")
var modalImage = document.getElementById("modal-image-box");
var addition=0
// Get the button that opens the modal
var btn = document.getElementById("check-meals");
var btnFood = document.getElementById("view-food");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

const hideFolderContentAnimation = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
hideFolderContentAnimation
.add({
  targets: '.zoom-btn',
  scale: 1,
  duration:300
})



const showFoodAnimation = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});
showFoodAnimation
.add({
  targets: '#blown-food',
  translateY:btnFood.getBoundingClientRect().y-70,
  translateX:btnFood.getBoundingClientRect().x-130,
},"-=1000")
.add({
  targets: '#blown-food',
  scale: 6.8,
  translateX:1,
  duration:1000
})

const showFolderContentAnimation = anime.timeline({
  easing: "easeOutCubic",
  autoplay: false
});

showFolderContentAnimation
.add({
  targets: '.zoom-btn',
  scale: 1.1,
  // height:100,
  stretch:1000,
  // opacity: [1, 0],
  duration:400
})
.add({
  targets: ".modal-meal",
  translateY:-btn.getBoundingClientRect().y+40,
  opacity: [0, 1],
  duration:1000
},
"-=200")
.add({
  targets: ".modal-body",
  height: [0, 50],
  duration: 700
},
"-=1000")
// When the user clicks the button, open the modal 
btn.onclick = function() {
  // modal.style.display = "block";
  addition = 1000
  modal.style.display="block"
  let values = btn.getBoundingClientRect();
  header.style.marginTop=values.y+'px'
  showFolderContentAnimation.play();
}
btnFood.onclick = function() {
  modalImage.style.display = "block";
  modal.style.zIndex = "auto";
  showFoodAnimation.play()
}
modalImage.onclick = function() {
  // showFolderContentAnimation.reverse();
  modalImage.style.display = "none";
  hideFolderContentAnimation.play();
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  
  hideFolderContentAnimation.play();
  modal.style.display = "none";
  modalImage.style.display = "none";

}

// // When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
   modalImage.style.display = "none";
   hideFolderContentAnimation.play();
  }
}
