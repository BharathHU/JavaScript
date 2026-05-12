let minuteSpan=document.getElementById('minute')
let secondSpan=document.getElementById('second')
let millisecSpan=document.getElementById('millisec')

let startBtn=document.getElementById('startBtn')
let stopBtn=document.getElementById('stopBtn')
let resetBtn=document.getElementById('resetBtn')

let minute=0
let second=0
let millisec=0

let timer

function ChangeTime(){

	millisec++

	if(millisec>99){
		millisec=0
		second++
	}

	if(second>59){
		second=0
		minute++
	}

	minuteSpan.innerHTML=String(minute).padStart(2,'0')
	secondSpan.innerHTML=String(second).padStart(2,'0')
	millisecSpan.innerHTML=String(millisec).padStart(2,'0')
}

startBtn.addEventListener('click',function(){

	timer=setInterval(ChangeTime,10)

})

stopBtn.addEventListener('click',function(){

	clearInterval(timer)

})

resetBtn.addEventListener('click',function(){

	clearInterval(timer)

	minute=0
	second=0
	millisec=0

	minuteSpan.innerHTML='00'
	secondSpan.innerHTML='00'
	millisecSpan.innerHTML='00'

})
