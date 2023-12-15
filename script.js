const track = document.querySelector(".project-container");

var moveleft = document.querySelector(".left");

var moveright = document.querySelector(".right");

moveleft.addEventListener("click", function () {
  track.classList.remove("animated-right");
  track.classList.add("animated-left");
});

moveright.addEventListener("click", function () {
  track.classList.remove("animated-left");
  track.classList.add("animated-right");
});

//const trackLocation = track.getBoundingClientRect();

//console.log(trackLocation);   THIS WORKED - but can't get the animation still
