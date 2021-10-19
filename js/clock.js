
let username=prompt("Please Enter Your Name")
let userN=document.querySelector("#userN")
userN.innerHTML=`Hello, ${username}! Wellcome`  

function clock1(params) {
    let date=new Date().toLocaleTimeString();
    let day=new Date().getDay();
    let gunler=["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"]
document.querySelector("#clock").innerHTML=` ${date} o'clock ${gunler[day]}`
}
setInterval(clock1,1000)
