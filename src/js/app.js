const cellList = document.querySelectorAll(".play-cage");
const arr = [];
let maxTurns = 5;
let hitCaunter = 0;
let turnsCounter = 0;



//      отображение счета и пропущенных ходов


let score = document.querySelector('.score');
let missedTurns = document.querySelector('.missed-turns');

score.textContent = `Score: ${hitCaunter}`
missedTurns.textContent = `Missed Turns: ${turnsCounter}`


//      рандомный ход гоблина

function randomaiser(){
    function getRandom(max) {
        let randomCell = Math.floor(Math.random() * max);
    
        while (randomCell === arr[0]) {
            randomCell = Math.floor(Math.random() * max);
        };
    
        arr[0] = randomCell;
        return randomCell;
    };

    const random = getRandom(cellList.length)

    cellList.forEach((element) => {
        element.classList.remove('play-cage-full');
    });
    cellList[random].classList.add('play-cage-full');
};


//      задержка ходов гоблина


setInterval(function () {
    turnsCounter++;
    missedTurns.textContent = `Missed Turns: ${turnsCounter}`
    
    if(turnsCounter === maxTurns) {
        turnsCounter = 0;
        alert ('Вы проиграли! Начать заново?');
    };

    randomaiser();
}, 1000);


//      подсчет счета игрока и переключение при не правильном нажатии


cellList.forEach((element) => {
    element.addEventListener('click', () => {
        if(element.classList.contains('play-cage-full')) {
            hitCaunter++;
            score.textContent = `Score: ${hitCaunter}`
            turnsCounter = 0;
        };

        randomaiser();
    });
});


//      смена анимации при положении мышки


let cursor = document.querySelector('.field')

cursor.addEventListener('mouseup', () => {
    cursor.classList.remove('mousedown')
    cursor.classList.add('mouseup')
});

cursor.addEventListener('mousedown', () => {
    cursor.classList.remove('mouseup')
    cursor.classList.add('mousedown')
});

