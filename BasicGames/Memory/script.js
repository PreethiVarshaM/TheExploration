const array = [
    {
        name: 'bluee',
        img: 'images/bluee.png',
    },
    {
        name: 'red',
        img: 'images/red.png',
    },
    {
        name: 'pink',
        img: 'images/pink.png',
    },
    {
        name: 'green',
        img: 'images/green.png',
    },
    {
        name: 'orange',
        img: 'images/orange.png',
    },
    {
        name: 'yellow',
        img: 'images/yellow.png',
    },
    {
        name: 'bluee',
        img: 'images/bluee.png',
    },
    {
        name: 'red',
        img: 'images/red.png',
    },
    {
        name: 'pink',
        img: 'images/pink.png',
    },
    {
        name: 'green',
        img: 'images/green.png',
    },
    {
        name: 'orange',
        img: 'images/orange.png',
    },
    {
        name: 'yellow',
        img: 'images/yellow.png',
    },

]

array.sort(() => 0.5 - Math.random())

const grid = document.querySelector('#grid')
const resultdis = document.getElementById('result')
let cardchosen = []
let cardchosenid = []
const cardswon = []

function createBoard() {
    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}
createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('img')
    const op1id = cardchosenid[0]
    const op2id = cardchosenid[1]
    console.log(cardchosen)

    if (op1id === op2id) {
        alert('you have clicked the same image')
    }
    if (cardchosen[0] == cardchosen[1]) {
        alert('you found a match')
        cards[op1id].setAttribute('src', 'images/grey.png')
        cards[op2id].setAttribute('src', 'images/grey.png')
        cards[op1id].removeEventListener('click', flipCard)
        cards[op2id].removeEventListener('click', flipCard)
        cardswon.push(cardchosen)
        console.log(cardswon)
    } else {
        cards[op1id].setAttribute('src', 'images/blank.png')
        cards[op2id].setAttribute('src', 'images/blank.png')
        //alert('OOPS! TRY AGAIN')
    }
    resultdis.textContent = cardswon.length
    cardchosen = []
    cardchosenid = []

    if (cardswon.length == array.length / 2) {
        resultdis.innerHTML = "HURRAY! YOU WON"
    }
}

function flipCard() {
    const cardid = this.getAttribute('data-id')
    cardchosen.push(array[cardid].name)
    cardchosenid.push(cardid)
    this.setAttribute('src', array[cardid].img)
    if (cardchosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}