const comp = document.getElementById('comp')
const you = document.getElementById('you')
const result = document.getElementById('result')
const choices = document.querySelectorAll('button')
const u_score = document.getElementById('u_score')

var userScore, compScore

choices.forEach(choices => choices.addEventListener('click', (e) => {
    you.innerHTML = e.target.id
    generateComp()
    getResult()
}))

function generateComp() {
    const rand = Math.floor(Math.random() * 3);

    if (rand === 0) comp.innerHTML = 'Rock'
    else if (rand === 1) comp.innerHTML = 'Paper'
    else comp.innerHTML = 'Scissors'
}

function getResult() {
    let c = comp.innerHTML
    let y = you.innerHTML
    if (c === y) result.innerHTML = "--- Draw! ---"
    else if (c === "Rock") {
        if (y === "Paper") {
            result.innerHTML = "HURRAY!! You've Got This Round"
            userScore += 1;
        }
        else result.innerHTML = "OOPS!! Better Luck Next Time"
    }
    else if (c === "Paper") {
        if (y === "Scissors") {
            result.innerHTML = "HURRAY!! You've Got This Round"
            userScore += 1;
        }
        else result.innerHTML = "OOPS!! Better Luck Next Time"
    }
    else {
        if (y === "Rock") {
            result.innerHTML = "HURRAY!! You've Got This Round"
            userScore += 1;
        }
        else result.innerHTML = "OOPS!! Better Luck Next Time"
    }

    u_score.innerHTML = userScore.toString()
}