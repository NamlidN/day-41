let para = document.querySelector('.zeit')
let b = 100,clear;





let C

document.querySelector('#btn').addEventListener('click', () => {
   C =  setInterval(ValueCount, 100);

});






function ValueCount() {
    b = b -1;
    
    para.innerHTML = b+'%'
    if (b == 0) {
 clearInterval(C)
}
}