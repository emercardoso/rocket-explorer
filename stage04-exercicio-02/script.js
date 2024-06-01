
const students = [
{
    name: 'João',
    firstTest: 4,
    secondTest: 8
},
{
    name: 'Leticia',
    firstTest: 10,
    secondTest: 9
},
{
    name: 'Diego',
    firstTest: 9,
    secondTest: 9
},
{
    name: 'Julia',
    firstTest: 7,
    secondTest: 4
}]

const calcAverage = function(first, second) {
    return (first + second) / 2
}

const message = function(name, average) {
    if (average >= 7) {
        return `A média do(a) aluno(a) ${name} é: ${average}\nParabéns, ${name}! Você foi aprovado(a) no concurso!`
    } else {
        return `A média do(a) aluno(a) ${name} é: ${average}\nNão foi dessa vez, ${name}! Tente novamente!`
    }
}

for (stundent of students){
    const name = stundent.name
    const average = calcAverage(stundent.firstTest, stundent.secondTest)

    alert(`Essa página diz\n\n${message(name, average)}`)
    
}
