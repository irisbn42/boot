function toggleMenu() {
    var menuElement = document.getElementById("myMenu");
  
    if (menuElement.className == "responsive") {
      menuElement.className = "";
    } else {
      menuElement.className = "responsive";
    }
  }