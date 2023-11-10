//const changeProject = document.querySelector(".project");

const changeProject = document.querySelectorAll(".project");

changeProject.addEventListener("click", function (event) {
  this.classList.add("clicked");
});

//changing only the first project - need to fix


