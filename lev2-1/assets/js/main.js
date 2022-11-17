

let C
let count = 10, clear;
function startTime(){
 C =  setInterval(ValueCount, 1000);
;
}

function ValueCount() {
    count = count -1
    console.log(count);
    document.getElementById('count').innerHTML = count
if(count == 0){
    clearInterval(C);
document.querySelector('.message').style.opacity = '0'
}
}