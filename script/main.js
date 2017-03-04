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
