
let b = 0, clear;
document.querySelector('.start').addEventListener('click', () => {
    setInterval(ValueCount, 1000);
});






function ValueCount() {
    b++;
    console.log(b);
if(b == 3){
    console.log('Hallo');
}
}