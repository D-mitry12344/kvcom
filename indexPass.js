let nuber = document.querySelector(".nuber");
nuber.textContent = '+7-'+ localStorage.getItem('hone').slice(1,4) + '-' +localStorage.getItem('hone').slice(4,7) + '-' + '****';
let pass = document.querySelector(".pass");
let button = document.querySelector(".buttt");
let user = {};
let s = 0;
button.onclick = () =>{
	user.login = phone.value;
	user.pass = pass.value;
	s += 1;
	let users = JSON.stringify(user);
	document.cookie= s+ "=" +users
	return s;
}