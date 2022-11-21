let nuber = document.querySelector(".nuber");
nuber.textContent = '+7-'+ localStorage.getItem('hone').slice(1,4) + '-' +localStorage.getItem('hone').slice(4,7) + '-' + '****';
let pass = document.querySelector(".pass");
let button = document.querySelector(".buttt");
let passwords = [];
button.onclick = function() {
passwords.push(pass.value);
localStorage.setItem('pass', passwords);
console.log(localStorage.getItem('pass'));
return passwords;
}