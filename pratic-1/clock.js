let name = prompt ("What is your name?");
let nameDom = document.querySelector("#myName");
nameDom.innerHTML = name;

function time(){
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day = date.getDay();
    let gun = ['Pazar','Pazartesi','Salı','Perşembe','Cuma','Cumartesi'];
    let clockDom = document.getElementById("myClock");
    clockDom.innerText = hours + ":" + minutes + ":" + seconds + " " + gun[day];
}
setInterval(time, 1000);