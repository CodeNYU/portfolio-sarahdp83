const track = document.querySelector(".project-container");


var moveleft = document.querySelector(".left");

var moveright = document.querySelector(".right");


moveleft.addEventListener("click", function () {
  track.classList.add("animated-left");
});

moveright.addEventListener("click", function () {
  track.classList.add("animated-right")
} );


