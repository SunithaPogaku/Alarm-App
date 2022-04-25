let para = document.getElementById('para');
let text = document.getElementById('txt');
let text2 = document.getElementById('txt2');
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');
btn2.classList.add('display');
window.addEventListener('load', ()=>{
    text.placeholder = new Date().getHours();
    text2.placeholder = new Date().getMinutes();
})
btn.addEventListener('click',alarm);
let x;
function alarm(){
    if(text.value && text2.value){
        x=setInterval(()=>{
            setAlarm();
        },1000);
    } else if(text.value==0 || text2.value==0){
        alert('ENTER THE TIME (HRS AND MINS)!');
    }
};

function setAlarm(){
    let d = new Date().toLocaleDateString();
    let then = new Date(`${d} ${text.value}:${text2.value}`).getTime();
    let now = new Date().getTime();
    let distance = then - now;
    var hours = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    var minutes = Math.floor((distance%(1000*60*60))/(1000*60));
    var seconds = Math.floor((distance%(1000*60))/1000);
    para.innerHTML = `ALARM IN - ${hours}:${minutes}:${seconds}`;

    if(distance<0){
        clearInterval(x);
        para.innerHTML = `IT'S ALARM TIME!`;
        let audio = new Audio('sound.mp3');
        audio.play();
        btn2.classList.toggle('display');
        btn2.addEventListener('click', () =>{
            para.innerHTML = ``;
            audio.pause();
            btn2.classList.toggle('display');
            text.value = '';
            text2.value = '';
        })
    }
}