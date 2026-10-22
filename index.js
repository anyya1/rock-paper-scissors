const choises = ['камень','ножницы','бумага','ящерица','спок']

let counter = 0
let computerWinsCounter = 0
let userWinCounter = 0
const history = []
let result = ''

function getRandomComputerCoise(){
    return choises[Math.floor(Math.random()* choises.length)]
}

while (computerWinsCounter != 3 && userWinCounter  != 3){
    const promtpUserData  = prompt()
    if (!promtpUserData || !choises.includes(promtpUserData)){
        console.log('нет такого варианта')
        continue
    }
const computerChoise = getRandomComputerCoise()

if(promtpUserData === computerChoise){
    result = 'Ничья'
    console.log(result)
} else if (
    (promtpUserData === 'камень' && (computerChoise === 'ножницы' || computerChoise === 'ящерица')) ||
    (promtpUserData === 'ножницы' && (computerChoise === 'бумага' || computerChoise === 'ящерица')) ||
    (promtpUserData === 'бумага' && (computerChoise === 'камень' || computerChoise === 'спок')) ||
    (promtpUserData === 'ящерица' && (computerChoise === 'спок' || computerChoise === 'бумага')) ||
    (promtpUserData === 'спок' && (computerChoise === 'ножницы' || computerChoise === 'камень'))
)
{
    result = 'Вы выиграли!'
    console.log(result)
    userWinCounter ++
} else {
    result = 'Вы проиграли'
    console.log(result)
    computerWinsCounter ++
}
history.push(`раунд ${counter + 1}: Игрок - ${promtpUserData}, Компьютер - ${computerChoise} (${result})`)
counter++
}

console.log("Игра окончена!")
if (userWinCounter === 3) {
    console.log("Вы выиграли!");
} else {
    console.log("Вы проиграли!");
}
history.forEach(el => {
console.log(el)
});