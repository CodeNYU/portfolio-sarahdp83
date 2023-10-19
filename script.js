const button = document.querySelector('button'); 


button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#552f79';
    button.style.color = "#fff";

});


button.addEventListener('mouseout', () => {
    button.style.backgroundColor = '#fff';
    button.style.color="black";
  });
