// var corgi = document.getElementById("corgi");
// var golden = document.getElementById("golden");
// var bunny = document.getElementById("bunny");
//
// corgi.addEventListener("click",showPic);
// golden.addEventListener("click",showPic);
// bunny.addEventListener("click",showPic);
//
// function showPic(){
// var allImg = document.querySelectorAll("img");
// for(var i = 0; i < allImg.length;i++){
//   allImg[i].className = "hide";
// }
//
//   //get the id name
//   var picId = this.attributes["data-img"].value;
//   var pic = document.getElementById(picId);
//   if(pic.className === "hide"){
//     pic.className = "";
//   }
//   else{
//     pic.className = "hide";
//   }
// }

var checkList = document.getElementById("checklist");
var items = checklist.querySelectorAll("li");
var inputs = checklist.querySelectorAll("input");

for(var i = 0; i < items.length; i++){
  items[i].addEventListener("click", edit);
  inputs[i].addEventListener("blur", update);
  inputs[i].addEventListener("keypress", pressEnter);
}

function edit(){
  this.className = "edit";
  var input = this.querySelector("input");
  input.focus();
  input.setSelectionRange(0,input.value.length);
}

function update(){
  this.previousElementSibling.innerHTML = this.value;
  this.parentNode.className = "";
}

function pressEnter(event){
  if(Number(event["which"]) === 13){
    update.call(this);
  }
}
