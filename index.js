const desc = document.getElementById('desc')
const val = document.getElementById('val')
const venc = document.getElementById('venc')
const tip = document.getElementById('tip')
const tbody = document.getElementById('tbody')
const res = document.getElementById('res')
let saldo = 0
Number(saldo.value)
res.innerHTML = `Saldo: ${saldo}`

const saveData = () => {
    let linha = document.createElement('tr')
    let col1 = document.createElement('td')
    col1.text = desc.value
    let col2 = document.createElement('td')
    col2.text = val.value
    let col3 = document.createElement('td')
    col3.text = venc.value
    let col4 = document.createElement('td')
    col4.text = tip.value

    linha.appendChild(col1)
    linha.appendChild(col2)
    linha.appendChild(col3)
    linha.appendChild(col4)

    tbody.appendChild(linha)

    col1.innerHTML = desc.value
    col2.innerHTML = val.value
    col3.innerHTML = venc.value
    col4.innerHTML = tip.value

    col1.style.border = "1px solid black"
    col2.style.border = "1px solid black"
    col3.style.border = "1px solid black"
    col4.style.border = "1px solid black"

    Number(val.value)
    if (tip.value == 'Receita') {
        saldo += val.value
    }else if (tip.value == 'Despesa') {
        saldo -= val.value
    }
    res.innerHTML = `Saldo: ${saldo}`
}




