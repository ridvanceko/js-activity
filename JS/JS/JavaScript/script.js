
var shrinkBtn = document.getElementById('shrinkBtn');
//shrinkBtn.addEventListener("click", shrinkBTN);
shrinkBtn.click(shrinkBTN);

function shrinkBTN(){
  document.getElementById("box").style.height = "25px";
  document.getElementById("box").style.backgroundColor = "blue";
  document.getElementById("box").style.width = "60px";
}
 
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

function datenow(obj) {
  var today = new Date();
var dd = today.getDate();
var mm = today.getMonth() + 1; //January is 0!

var yyyy = today.getFullYear();
if (dd < 10) {
  dd = '0' + dd;
} 
if (mm < 10) {
  mm = '0' + mm;
} 
var today = dd + '/' + mm + '/' + yyyy;

  document.getElementById("date").innerHTML = Date();
  document.getElementById("date2").innerHTML = today;
}
