let elem = [];

for( let i=1;i<18;i++){
	elem[i]= document.getElementById(i);
	elem[i].children[4].children[0].onclick = function(){
	add1(elem[i]);
	}
	
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-") 
    elem.children[2].innerHTML = "1";
  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
  }
}
