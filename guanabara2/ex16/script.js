function contar (){
    let ini = window.document.getElementById('txti')
    let fim = window.document.getElementById('txtf')
    let passo = window.document.getElementById('txtp')
    let res = window.document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('Faltam dados')
    } else {
       res.innerHTML = 'Contando: <br>'
       let i = Number(ini.value)
       let f = Number(fim.value)
       let p = Number(passo.value)
       if (p<=0){
        window.alert('Passo invalido, considerando passo 1')
        p=1
       }
       if(i < f){ // crescente
        for(let c = i; c <= f; c+= p){
        res.innerHTML += (c)
        } // decrescente
       }else{
        for(let c = i; c>= f; c-= p){
            res.innerHTML += (c)
        }
       }
    }

}

