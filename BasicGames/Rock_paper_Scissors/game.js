const comp = document.getElementById('comp')
const you = document.getElementById('you')
const result = document.getElementById('result')
const choices = document.querySelectorAll('button')
const u_score = document.getElementById('u_score')
const c_score = document.getElementById('c_score')

var userScore = 0, compScore = 0

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
        else {
            result.innerHTML = "OOPS!! Better Luck Next Time"
            compScore++;
        }
    }
    else if (c === "Paper") {
        if (y === "Scissors") {
            result.innerHTML = "HURRAY!! You've Got This Round"
            userScore += 1;
        }
        else {
            result.innerHTML = "OOPS!! Better Luck Next Time"
            compScore++;
        }
    }
    else {
        if (y === "Rock") {
            result.innerHTML = "HURRAY!! You've Got This Round"
            userScore += 1;
        }
        else {
            result.innerHTML = "OOPS!! Better Luck Next Time"
            compScore++;
        }
    }

    u_score.innerHTML = userScore
    c_score.innerHTML = compScore

}