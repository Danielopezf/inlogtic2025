window.addEventListener("load", function(){
  const icono = document.querySelector("i");
  icono.addEventListener("click", function() {
    if (this.className == "bi bi-list") {
      this.className = "bi bi-x-lg";
      this.style.fontSize = "1.5rem";
    } else {
      this.className = "bi bi-list";
      this.style.fontSize = "2rem";
    }
  });
});