const track = document.querySelector(".project-container");

//when i had these below as const nothing happened when i clicked so changed to var

var moveleft = document.querySelector(".left");

var moveright = document.querySelector(".right");


moveleft.addEventListener("click", function () {
  track.classList.add("animated");
});

moveright.addEventListener("click", function () {
} )


