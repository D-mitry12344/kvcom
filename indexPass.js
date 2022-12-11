let nuber = document.querySelector(".nuber");
let pass = document.querySelector(".pass");
let button = document.querySelector(".buttt");
let key ="phone";
let keyT = "pass"
nuber.textContent = '+7-'+ localStorage.getItem('hone').slice(1,4) + '-' +localStorage.getItem('hone').slice(4,7) + '-' + '****';
get = () =>{
	document.cookie=  encodeURIComponent(key) + '=' + encodeURIComponent(localStorage.getItem('hone'));
	document.cookie=  encodeURIComponent(keyT) + '=' + encodeURIComponent(pass.value);
	console.log(document.cookie);
}
button.onclick = () =>{
	get();
	//window.location.href = 'indexPass.html';
};
	
