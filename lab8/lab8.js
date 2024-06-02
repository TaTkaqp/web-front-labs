function showDate(){
    let out = document.getElementById('current-date');
    let out2 = document.getElementById('current-date2')
    let out3 = document.getElementById('current-date3')
    let out4 = document.getElementById('current-date4')
    let out5 = document.getElementById('current-date5')
    let out6 = document.getElementById('current-date6')
    let today = new Date();
    out.innerHTML =  "Russia: "+today.toLocaleString("ru-RU");
    out2.innerHTML =  "Arabic: "+today.toLocaleString("ar");
    out3.innerHTML =  "English: "+today.toLocaleString("en");
    out4.innerHTML =  "Spanish: "+today.toLocaleString("es");
    out5.innerHTML =  "French: "+today.toLocaleString("fr");
    out6.innerHTML =  "Indonesian: "+today.toLocaleString("id");

    let year = document.getElementById('outputYear');
    let month = document.getElementById('outputMonth');
    let Day = document.getElementById('outputDay');
    let weak = document.getElementById('outputWeak');
    dt = new Date()
    const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const weakkk = ['Воскресенье', "Понедельник", "Вторник","Среда","Четверг","Пятница","Суббота"]
    year.innerHTML = "Текущий год: " + dt.getFullYear()
    month.innerHTML = "Текущий месяц: " + months[dt.getMonth()];
    Day.innerHTML = "Текущий день: " + dt.getDate();
    weak.innerHTML = "Текущий день недели: " + weakkk[dt.getDay()];
}

function showWeak(){
  

    let day = document.getElementById('day1').value
    let month = document.getElementById('month1').value - 1
    let year = document.getElementById('year1').value
    let output = document.getElementById('outputweak2')
    let dt = new Date(year,month,day);
    let days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота','Воскресенье']
    output.innerHTML = days[dt.getDay()]
}