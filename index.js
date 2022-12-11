let phone = document.querySelector(".phone");
let but = document.querySelector(".butt");
document.cookie = "user=John";
console.log(document.cookie);
go = () =>{
  let hone = phone.value;
  localStorage.setItem('hone' , hone);
}

but.onclick = function(){
go();
window.location.href = 'indexPass.html';
};
