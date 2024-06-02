function showTime(){
    let today = new Date();
    let currenttime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currenttime;


    let currenttime2 = today.getSeconds('ru-RU');
    document.getElementById('time2').innerHTML = currenttime2
    
    let time3 = document.getElementById('time3')
    time3.style.transform = `rotate(${new Date().getSeconds()*6}deg) translate(0,-50px)`

}
setInterval(showTime, 1000)