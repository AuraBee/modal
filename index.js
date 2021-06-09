/** 
  interactive buttons: Open Modal 
  **/

document.getElementById("open-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "block";
})


/** 
  Interactive buttons: Close Modal
**/

document.getElementById("close-modal").addEventListener("click", function() {
    document.getElementById("overlay").style.display = "none";
})