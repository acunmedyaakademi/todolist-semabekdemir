

let btn = document.querySelector("#eklemeBtn");
let liste = document.querySelector("#liste");
let todoTxt = document.querySelector("#todoTxt");

function listeyeEkle() {
  // let eklenecek = prompt("Ne ekliyim_??");
  liste.innerHTML += "<li>" + todoTxt.value + "</li>";

}
btn.addEventListener("click", listeyeEkle);