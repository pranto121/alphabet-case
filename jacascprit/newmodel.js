function hiddenElement(elementid) {
  const element = document.getElementById(elementid);
  element.classList.add("hidden");
}
function showElemt(elementid) {
  const element = document.getElementById(elementid);
  element.classList.remove("hidden");
}


function setBrakgrundcolorById(elementid) {
  const element = document.getElementById(elementid);
  element.classList.add("bg-orange-400");
}
function removeBackgrundclorId(elementid) {
  const element = document.getElementById(elementid);
  element.classList.remove("bg-orange-400");
}


function getTextValueById(elementid){
  const element =document .getElementById(elementid);
  const textValue =element.innerText;
  const value = parseInt(textValue);
  return value;
}

function setTextElamentByid(elementid,value){
  const element =document.getElementById(elementid);
  element.innerText=value;
}



function getElementAlfabetByid(elementid){
  const element = document.getElementById(elementid)
  const text =element.innerText;
  return text;
}
 



function getRandomaplai() {
  const alfabetString = "abcdefghijklmnopqrstuvwxyz";
  const alfabets = alfabetString.split("");

  const randomNumbar = Math.random() * 25;
  const index = Math.round(randomNumbar);
  const alfabet =alfabets[index];
  return alfabet;

}
