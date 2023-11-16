const track = document.querySelector(".project-container");

//when i had these below as const nothing happened when i clicked so changed to var

var moveleft = document.querySelector(".left");

var moveright = document.querySelector(".right");

//attempt to add the animated class to make it move? also tried other javascript functions to move the container to the left that didn't work either
moveleft.addEventListener("click", function () {
  track.classList.add("animated");
});

//none of my console.logs are working ??
console.log(moveleft);
