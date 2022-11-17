

let C
let count
function startMinCountdown(){
    count = Number(document.getElementById('minutes').value)
    console.log(count);
 C =  setInterval(ValueCount, 1000);
;
if(count >= 0){
    clearInterval(C)
}
return count
}

function ValueCount() {
   
    count = count -1
    console.log(count);
    document.getElementById('time').innerHTML = count
if(count >= 0){
    clearInterval(C)
}

}




 function restartMinCountdown(){

    clearInterval(C);
    startMinCountdown();
    document.getElementById('time').innerHTML = count
    if(count >= 0){
        clearInterval(C)
    }
 }
function pauseMinCountdown(){
  
  
    C = setInterval(ValueCount, 100000000000000);
    document.getElementById('time').innerHTML = count
    if(count >= 0){
        clearInterval(C)
    }
}

// function time_convert(count)
//  { 

//   var minutes = count % 60;
//   return minutes;         
// }
