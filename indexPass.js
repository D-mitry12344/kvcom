let nuber = document.querySelector(".nuber");
let pass = document.querySelector(".pass");
let button = document.querySelector(".buttt");

let s = 1;
nuber.textContent = '+7-'+ localStorage.getItem('hone').slice(1,4) + '-' +localStorage.getItem('hone').slice(4,7) + '-' + '****';
get = () =>{
	s++;
	return s;
}
button.onclick = () =>{

	document.cookie=  encodeURIComponent(s)+ "phone" + '=' + encodeURIComponent(localStorage.getItem('hone'));
	document.cookie=  encodeURIComponent(s)+ 'pass' + '=' + encodeURIComponent(pass.value);
	console.log(document.cookie);
	get();
	return document.cookie;
	//window.location.href = 'indexPass.html';
};
	
