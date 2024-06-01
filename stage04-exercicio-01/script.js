
const actions = ['sum','sub','multi','div','restDiv','evenOrOdd','sameOrDifferent']

let firstNumber, secondNumber

firstNumber = prompt('Digite o primeiro número:')

while((isNaN(firstNumber) === true) || firstNumber === false) {
    alert('O valor informado não é um número válido.') 
    firstNumber = prompt('Digite o primeiro número:')
}

secondNumber = prompt('Digite o segundo número:')

while((isNaN(secondNumber) === true) || secondNumber === false) {
    alert('O valor informado não é um número válido.') 
    secondNumber = prompt('Digite o segundo número:')
}

function calculateNumbers(action, first, second) {
    switch (action) {
        case 'sum':
            alert(`A soma dos dois números é: ${first + second}`)
            break
        case 'sub':
            alert(`A subtração dos dois números é: ${first - second}`)
            break
        case 'multi':
            alert(`A multiplicação dos dois números é: ${first * second}`)
            break
        case 'div':
            alert(`A divisão dos dois números é: ${first / second}`)
            break
        case 'restDiv':
            alert(`O resto da divisão dos dois números é: ${first % second}`)
            break
        case 'evenOrOdd':
            if (((first + second) % 2) === 0) {
                alert(`A soma dos dois números é par: ${first + second}`)
            } else {
                alert(`A soma dos dois números é ímpar: ${first + second}`)
            }
            break
        case 'sameOrDifferent':
            if (first === second) {
                alert(`Os números inseridos são iguais: ${first} e ${second}`)
            } else {
                alert(`Os números inseridos são diferentes: ${first} e ${second}`)
            }
            break
        default:
            console.log('Action is not defined')
    }
}

for (action of actions) {
    calculateNumbers(action, Number(firstNumber), Number(secondNumber))
}

