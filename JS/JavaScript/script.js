document.getElementById("shrinkBtn").addEventListener("click", function(){

  document.getElementById("box").style.height = "25px";
  document.getElementById("box").style.backgroundColor = "blue";
  document.getElementById("box").style.width = "60px";

});

document.getElementById("growBtn").addEventListener("click", function(){

  document.getElementById("box").style.height = "250px";
  document.getElementById("box").style.backgroundColor = "red";

});

document.getElementById("resetBtn").addEventListener("click", function(){

  document.getElementById("box").style.height = "150px";
  document.getElementById("box").style.marginTop = "120px" ;


});

function mOver(obj) {
  obj.innerHTML = "Thank You"
}

function mOut(obj) {
  obj.innerHTML = "Mouse Over Me"
}

onclick.getElementById("what-time").innerHTML=Date()