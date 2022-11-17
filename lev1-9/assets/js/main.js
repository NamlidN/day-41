
function startTime(){
let A = setInterval(startTime, 1000);
let Heute = new Date().getDate()
let std = new Date().getHours()
let min = new Date().getMinutes()
let sec = new Date().getSeconds()

document.getElementById('txt').innerHTML = Heute.toString()+'-'+std.toString()+'-'+min.toString()+'-'+sec.toString();
//  document.getElementById('txt').innerHTML = std.toString();
// document.getElementById('txt').innerHTML = min.toString();
// document.getElementById('txt').innerHTML = sec.toString();
}