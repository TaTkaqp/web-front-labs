function showDaysCount(){
    let today = new Date();
    let inputDate = document.querySelector('input[type=date]');
    let birthday = new Date(inputDate.value);
    let output = document.getElementById('output')
    let daysCount = today - birthday;
    daysCount = daysCount/1000/60/60/24
    daysCount = Math.floor(daysCount)
    output.innerHTML = "Количество дней с дня рождения :"+ daysCount
}

function Clear(){
    let output = document.getElementById('output')
    output.innerHTML = "Количество дней с дня рождения :"
    document.querySelector('input[type="date"]').value = "";

}