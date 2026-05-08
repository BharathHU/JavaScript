let hourSpan=document.getElementById('hour')
let minuteSpan=document.getElementById('minute')
let secondSpan=document.getElementById('second')
let amorpmSpan=document.getElementById('amorpm')
var colors=['white','red','blue','green','yellow','pink','cyan','brown','skyblue'];

function ChangeTime(){
    let date=new Date()
    let hour=date.getHours()
    hourSpan.innerHTML=hour
    let minute=date.getMinutes()
    minuteSpan.innerHTML=minute
    let second=date.getSeconds()
    secondSpan.innerHTML=second

    if(hour>=0 && hour<=11){
        amorpmSpan.innerHTML='AM'
    }
    else{        amorpmSpan.innerHTML='PM'
    }
    let arr=second%colors.length
    let id=document.getElementById('one')
    id.style.backgroundColor=colors[arr]

}

setInterval(ChangeTime,1000)