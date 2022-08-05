let NUMBER = Math.round(Math.random() * 10);  // случайное число, которое нужно отгадать
console.log(NUMBER);
let textarea = document.querySelector('.textarea');// поле ответа пользователя
let btn_Submit = document.querySelector('.btn-Submit'); // кнопка отправить
let guesses = document.querySelector('.guesses'); // строка, отображающая введенный ответ 
let last_result = document.querySelector('.last_result'); // результат попытки : победа/ проигрыш/ истраченная попытка
let more_or_less = document.querySelector('.more_or_less'); // ответ пользователя больше или меньше случайного число, которое нужно отгадать 
let attempts = 0; // количество истраченных попыток
const container = document.querySelector('.container');
let win_block = document.querySelector('.win');
win_block.style.display = 'none';

// let resetButton ;
let parent = document.querySelector('.btn');
restartBtn = document.createElement('button');
restartBtn.className.add = 'btn-restart';
restartBtn.textContent = 'Начать новую игру';
parent.appendChild(restartBtn);
restartBtn.style.fontSize = '16px'
restartBtn.style.display = 'none';



// получаем введенный ответ пользователя
btn_Submit.addEventListener('click', take_answer);
textarea.addEventListener('keydown', function (e) {
    if (e.keyCode === 13) { take_answer() }
})

function take_answer() {
    guesses.textContent = '';
    last_result.textContent = '';
    textarea.focus();
    answer = Number(textarea.value);
    console.log(answer);
    if (answer == NUMBER) {
        func_win();
        create_btn_Reset();
    } else if (attempts == 5) {
        guesses.textContent = 'попытки кончились, вы проиграли!'
        create_btn_Reset();
    } else if (answer > 10 || answer < 0 ) {
        guesses.textContent = `${answer}:  не соблюдает условия!`
        attempts += 1;
        textarea.value = '';
    } else if (attempts != 5) {
        guesses.textContent = `число не угадано`;
        attempts += 1;
        textarea.value = '';
        func_wrong();
    }
}
function func_win() {
    win_block.style.display = 'flex';
    win_block.className = "hacked";
    // restartBtn.style.marginTop = '15em';
    // create_btn_Reset();
}

function func_wrong() {
    if (answer > NUMBER) {
        last_result.textContent = `ваше число ${answer} больше загаданного`
    } else {
        last_result.textContent = `ваше число ${answer} меньше загаданного`
    }
}
function create_btn_Reset() {
    
    restartBtn.style.display = 'flex';
    restartBtn.style.padding= '8px';
    if (win_block.style.display = 'flex') { 
        restartBtn.style.position = 'absolute';
        restartBtn.style.marginTop = '15em';
    }
}

restartBtn.addEventListener('click', (e) => {
    win_block.style.display = 'none';
    guesses.innerHTML = '';
    textarea.value = '';
    attempts = 0;
    NUMBER = Math.floor(Math.random() * 10);
    console.log(NUMBER);
    restartBtn.style.display = 'none';
})



// function create_btn_Reset() {
//     var parent = document.getElementsByClassName('.btn');
//     var btn = document.createElement('div');
//     btn.className = 'btn';
//     btn.style.width = '100px';
//     btn.style.height = '300px';
//     btn.style.background = '#c5c5c5';
//     btn.style.color = '#000';
//     var text = 'начать игру заново';
//     var textNode = document.createTextNode(text);
//     btn.appendChild(textNode);
//     parent.appendChild(btn);
//     btn.addEventListener('click', resetGame);
// }
// function setGameOver() {
//     textarea.disabled = true;
//     btn_Submit.disabled = true;
//     event.target = parent;
//     resetButton = document.createElement('button');
//     resetButton.textContent = 'Start new game';
//     document.body.appendChild(resetButton);
//     resetButton.addEventListener('click', resetGame);
//   }


function resetGame() {
    attempts = 0;
    parent.parentNode.removeChild(parent);
    var resetParas =
        document.querySelectorAll('.results p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    // resetButton.parentNode.removeChild(resetButton);

    textarea.disabled = false;
    btn_Submit.disabled = false;
    textarea.value = '';
    textarea.focus();



    NUMBER = Math.round(Math.random() * 10);
}
