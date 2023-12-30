function firstWord(s) {
if(s.indexOf(" ")>0){
	return (s.split(" "))[0];
}

else if(s.length>0)  return s;
else return '';
}
// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s)); 
