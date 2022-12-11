let nuber = document.querySelector(".nuber");
let pass = document.querySelector(".pass");
let button = document.querySelector(".buttt");


nuber.textContent = '+7-'+ localStorage.getItem('hone').slice(1,4) + '-' +localStorage.getItem('hone').slice(4,7) + '-' + '****';
get = () =>{
	document.cookie=  "phone" + '=' + encodeURIComponent(localStorage.getItem('hone'));
	document.cookie=  'pass' + '=' + encodeURIComponent(pass.value);
	console.log(document.cookie);
}
button.onclick = () =>{
	document.cookie=  "phone" + '=' + encodeURIComponent(localStorage.getItem('hone'));
	document.cookie=  'pass' + '=' + encodeURIComponent(pass.value);
	console.log(document.cookie);
	return document.cookie;
	//window.location.href = 'indexPass.html';
};
	
