
function onShow(){
  if (window.innerWidth <= "900"){
    document.getElementById("menu").style.left = "50%";
   document.getElementById("menu").style.visibility = "visible";
   document.getElementById("list-items").style.visibility = "visible"
   document.getElementById("oculus").style.visibility = "hidden";
  } else if (window.innerWidth>="900"){
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("list-items").style.visibility = "visible"
  }
}
function noShow(){
    if (window.innerWidth <= "900"){
        document.getElementById("menu").style.left = "150%";
       document.getElementById("menu").style.visibility = "hidden";
       document.getElementById("list-items").style.visibility = "hidden"
       document.getElementById("oculus").style.visibility = "visible";
      }
      else if (window.innerWidth >= "900") {
        document.getElementById("menu").style.visibility = "visible"
        document.getElementById("menu").style.left = "150%";
        document.getElementById("list-items").style.visibility = "visible"
      }
      var modal = document.getElementById("list-items");
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    document.getElementById("menu").style.visibility = "hidden"
    document.getElementById("menu").style.left = "150%";
  }}
}
document.getElementById("cancel-menu").addEventListener("click", noShow);
function toggle(element){
  element.style.transform = "scale(0.85)"
}
function untoggle(element){
element.style.transform = "scale(1)"
}

ScrollReveal().reveal('.words');
