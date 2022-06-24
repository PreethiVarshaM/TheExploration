const squares = document.querySelectorAll('.sqr')
const mole = document.querySelector('.mole')
const timeleft = document.querySelector('#time-left')
const score = document.querySelector('#score')

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
function moveMole() {
    let countDownTimerId = setInterval(countDown, 1000)
    timerId = setInterval(randomSquare, 500)
}


function countDown() {
    currentTime--;
    timeleft.textContent = currentTime
    if (currentTime == 0) {
        alert('GAME OVER!!! Your Score is : ' + result)
        clearInterval(countDownTimerId)
    }
}


function Start() {
    document.getElementById('start').addEventListener('click', moveMole)

}

Start()