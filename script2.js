let input_num = document.getElementById('num')
let list = document.getElementById('list')
let button_add = document.getElementById('add')
let button_final = document.getElementById('final')
let output = document.getElementById('output')
button_add.addEventListener('click', adicionar)
button_final.addEventListener('click',finalizar)
let all_number = []
input_num.focus()

function emLista(a,b) {
    if(b.indexOf(Number(a.value)) == -1){
        return true
    } else {
        return false
    }
}

function éNúmero() {
    if(input_num.value == 0 || input_num.value > 100){
        return true
    } else {
        return false
    }
}

function adicionar() {
    input_num.focus()
    output.innerHTML = ''
    //Validação do input utilizando funções
    if( éNúmero() || !emLista(input_num,all_number)){
        alert('fatal error')
    } else {
        all_number.push(Number(input_num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${input_num.value} adicionado`
        list.appendChild(opt)
    }
}

function finalizar() {
    output.innerHTML = ''
    let all_value = all_number.length
    let maior = all_number[0]
    let menor = all_number[0]
    let soma = 0

    /*Pegando o maior e o menor valor de um array usando método Math
    let maior = Math.max(...all_number)
    let menor = Math.min(...all_number)*/

    // pegando o maior e o menor valor de um array utilizando for in
    for(let i in all_number) {
        if(all_number[i] > maior)
            maior = all_number[i]
        if(all_number[i] < menor)
            menor = all_number[i]
        soma += all_number[i]
    }

    let media = soma / Number(all_number.length)
    output.innerHTML += `<p>Ao todo temos, ${all_number.length} números cadastrados.</p>`
    output.innerHTML += `<p>O maior valor informando foi ${maior}.</p>`
    output.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    output.innerHTML += `<p>Somando todos os valores temos ${soma}.</p>`
    output.innerHTML += `<p>A média dos valores digitados é ${media}.</p>`
}