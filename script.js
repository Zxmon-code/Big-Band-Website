function test() {
document.getElementById('change').innerHTML = "Haha lol";
}

function CollapseNavBar(){
  var NavBar = document.querySelector("NavBar");
  var Button = document.querySelector("Collapse");
  if (NavBar.style.display == "none"){
      Button.innerHTML = "+";
      NavBar.style.display = "block";
  } else {
      Button.innerHTML = "-";
      NavBar.style.display = "none";
  };
}
