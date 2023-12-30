function firstWord(s) {
if(s.indexOf(" ")>0){
	return s.slice(0,s.indexOf(" "));
}
else return s;
}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s));
