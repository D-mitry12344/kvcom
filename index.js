let phone = document.querySelector(".phone");
let but = document.querySelector(".butt");
let check =document.querySelector(".check")
let go = function(){
let hone = phone.value;
localStorage.setItem('hone', hone);
console.log(localStorage.getItem('hone'));

};

but.onclick = function(){
go();
window.location.href = 'indexPass.html';
};
