let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number (n)  <=100){
        return true

    }else{
        return false
    }
}

function inLista(n,l){
    if(l.indexOf(Number(n)) != -1) {
        return true
    }else{
        return false
    }
    

}

function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} Adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
        

    }else{
        window.alert('numero invalido ou repetido')
    }
    num.value = ''
    num.focus()
}
    
function finalizar(){
    if(valores.length == 0){
        window.alert('Insra um numero')

    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = valores[0]
        let media = valores[0]

        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores[pos] < menor)
                menor = valores[pos]
            

         
        }
        res.innerHTML = ''
        res.innerHTML += ` <p>Ao todo temos ${tot} numeros cadastrados`
        res.innerHTML +=`<p> O maior é ${maior}`
        res.innerHTML +=`<p> O menor é ${menor}`
        res.innerHTML +=`A soma é ${soma}`
        res.innerHTML += `a media é ${media}`
    }
}