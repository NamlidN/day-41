

let C;
let count;
let sec;
function startMinCountdown() {
    count = Number(document.getElementById('minutes').value);
    sec = 0;
    C = setInterval(ValueCount, 1000);
    document.getElementById('sec').innerHTML = sec;
    document.getElementById('time').innerHTML = count;
   
 
    if (count == 0 && sec === 0) {
        clearInterval(C);
    }

}
// function startMinCountdown(duration, display) {

//     var timer = duration, minutes, seconds;
//     setInterval(function () {
//         minutes = parseInt(timer / 60, 10);
//         seconds = parseInt(timer % 60, 10);

//         minutes = minutes < 10 ? "0" + minutes : minutes;
//         seconds = seconds < 10 ? "0" + seconds : seconds;

//         display.textContent = minutes + ":" + seconds;

//         if (--timer < 0) {
//             timer = duration;
//         }
//     }, 1000);
// }










function ValueCount() {

     


    document.getElementById('time').innerHTML = count;
   

    document.getElementById('sec').innerHTML = sec;
    if (sec <= 0) {
        count = count - 1;
        sec = 60
    }
 sec = sec - 1;
    if (count == 0 && sec === 0) {
        clearInterval(C);
    }

}




function restartMinCountdown() {

    clearInterval(C);
    startMinCountdown();
    document.getElementById('time').innerHTML = count;
  
}
function pauseMinCountdown() {
  
        clearInterval(C);
}

