function makeid(l) {
	let result=""
	let charlist="QWERTYUIOPLKJHGFDSAZXCVBNMqwertyuioplkjhgfdsazxcvbnm0123456789";
	for(let i=0;i<l;i++)
	{
		result+=charlist.charAt(Math.floor(Math.random()*charlist.length))
	}
	return result
  // write your code here
}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
