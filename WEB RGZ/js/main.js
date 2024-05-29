document.querySelector('.burger').addEventListener('click', function(){
    this.classList.toggle('active');
    document.querySelector('.nav').classList.toggle('open')
})

function readMore() {
    let dots = document.getElementById("dots")
    let more = document.getElementById("more")
    let btnMore = document.getElementById("btn-more")

    if(dots.style.display === "none") {
        dots.style.display="inline"
        btnMore.innerHTML = "Подробнее"
        more.style.display="none"
    } else {
        dots.style.display="none"
        btnMore.innerHTML = "Скрыть"
        more.style.display="inline"
    }
}

fetch('https://www.cbr-xml-daily.ru/daily_json.js').then(function (result) {
    return result.json()
}).then(function (data) {

}) 


// Конвертор валют

const rates = {}
const elementTMT = document.querySelector('[data-value="TMT"]')
const elementRUB = document.querySelector('[data-value="RUB"]')

const input = document.querySelector('#input')
const result = document.querySelector('#result')
const select = document.querySelector('#select')

const input1 = document.querySelector('#result')
const result1 = document.querySelector('#input')

getCurrencies ()

async function getCurrencies () {
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    const data = await response.json();
    const result = await data;
    rates.TMT = result.Valute.TMT;
    elementTMT.textContent = rates.TMT.Value.toFixed(2)
    if (rates.TMT.Value > rates.TMT.Previous) {
        elementTMT.classList.add('bottom')
        elementTMT.classList.remove('top')
    } else {
        elementTMT.classList.add('top')
        elementTMT.classList.remove('bottom')
    }
    console.log(result)
}

input.oninput = function () {
    result.value = (parseFloat(input.value) / rates[select.value].Value).toFixed(2)
}

input1.oninput = function () {
    result1.value = (parseFloat(input1.value) * rates[select.value].Value).toFixed(2)
}


