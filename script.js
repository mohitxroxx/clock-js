let hrs=document.getElementById("hrs");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

setInterval(() => {
    let currentTime= new Date();
    let x=currentTime.getHours();
    const a=document.getElementById('ampm');
    if(x>12){
        x-=12;
        a.textContent="PM";
    }
    else
    a.textContent="AM";
    hrs.innerHTML=(x<10?"0":"")+x;
    min.innerHTML=(currentTime.getMinutes()<10?"0":"")+currentTime.getMinutes();
    sec.innerHTML=(currentTime.getSeconds()<10?"0":"")+currentTime.getSeconds();
}, 1000);
