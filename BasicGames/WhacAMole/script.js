const squares = document.querySelectorAll('.sqr')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')
const start = document.getElementById('start')

let result = 0
let hitPosition
let currentTime = 10
let timerId = null;

function randomSquare() {
    squares.forEach(sqr => { sqr.classList.remove('mole') })
    let randomSqr = squares[Math.floor(Math.random() * 9)]
    randomSqr.classList.add('mole')
    hitPosition = randomSqr.id
}

squares.forEach(sqr => {
    sqr.addEventListener('mousedown', () => {
        if (sqr.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

let countDownTimerId, running = false

function moveMole() {
    start.disabled = true

    if (running == true) {
        countDownTimerId = setInterval(countDown, 1000)

        timerId = setInterval(randomSquare, 500)
        //console.log("hello")
    }


}


function countDown() {
    currentTime--;
    timeleft.textContent = currentTime
    if (currentTime == 0) {
        alert('GAME OVER!!! Your Score is : ' + result)
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        start.disabled = false
        currentTime = 10
        timeleft.innerHTML = 60
        running = false
        Start()
    }
}

function setRunning() {
    running = true
    moveMole()
}
function Start() {
    start.addEventListener('click', setRunning)

}

Start()