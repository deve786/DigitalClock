var hours=document.getElementById('hour')
var minute=document.getElementById('minute')
var second=document.getElementById('second')

function showTime(){
    var time=new Date()
    hours.innerHTML=time.getHours()
    minute.innerHTML=time.getMinutes()
    second.innerHTML=time.getSeconds()
    
}


showTime()
setInterval(showTime,1000)
var mode='light'
function toogle(){
    
    if(mode=='dark'){
        document.body.style.backgroundColor = "black";
        head.style.color='white'
        
        mode='light'
    }
    else{
        document.body.style.backgroundColor = "white";
        head.style.color='black'
        mode='dark'
    }
}