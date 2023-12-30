function firstWord(s) {
	let first=s.split(" ");
   // console.log(first);
for(let i=0;i<s.length;i++){
	if(first[i]!=""){
	return first[i];
	}
}
//else if(s.length>0)  return s;
 return '';

}

// Do not change the code below
const s = prompt("Enter String:");
alert(firstWord(s)); 

