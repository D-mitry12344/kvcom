let nuber = document.querySelector(".nuber");
let pass = document.querySelector(".pass");
let button = document.querySelector(".buttt");
nuber.textContent = '+7-'+ localStorage.getItem('hone').slice(1,4) + '-' +localStorage.getItem('hone').slice(4,7) + '-' + '****';
get = () =>{
	document.cookie=  encodeURIComponent(hone) + '=' + encodeURIComponent(pass.value);
	console.log(document.cookie);
	return document.cookie;
}
button.onclick = () =>{
	get();
	window.location.href = 'indexPass.html';
};
	
