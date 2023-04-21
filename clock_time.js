let section = document.querySelector("section"),
 icon = document.querySelector(".icons");
//
// icon.onclick = ()=>{
//     section.classList.toggle("dark");
// }

function display(){
    section.classList.toggle("dark");
}
// ************************************************

setInterval(()=>{
    let date = new Date()
    hour = date.getHours() + 1
    min = date.getMinutes()
    sec = date.getSeconds()

    let d;
    d = hour < 12 ? "AM" : "PM"
    hour = hour >12 ? hour-12 :hour;
    hour = hour == 0 ? hour=12 :hour;



    document.querySelector(".hour-num").innerHTML = hour;
    document.querySelector(".min-num").innerHTML = min;
    document.querySelector(".sec-num").innerHTML = sec;
    document.querySelector(".am-pm").innerHTML = d;




},1000);
