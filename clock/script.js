setInterval(setClock, 1000)
const hourHand = document.querySelector('[data-hour]')
const minHand = document.querySelector('[data-min]')
const secHand = document.querySelector('[data-sec]')
function setClock() {
    const date = new Date()
    const sec_count = date.getSeconds() / 60;
    const mins_count = (sec_count + date.getMinutes()) / 60
    const hour_count = (mins_count + date.getHours()) / 12
    setRotation(secHand, sec_count)
    setRotation(minHand, mins_count)
    setRotation(hourHand, hour_count)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}