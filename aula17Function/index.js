/*function saudacao(nome) {
    return(`bom dia ${nome}`);
}

const variavel = saudacao('vou conseguir')
console.log(variavel); */

function fazendoSoma(x, y){   //e posivel colocar um valor padrao aqui para
    const resultado = x + y; //que se não encontrado aqui ele assumi para nao dar erro
    return resultado

}
console.log(fazendoSoma(3, 4));





// posso criar uma variavel que sera preenchida pela function

const raiz = function (n){
    return n ** 0.5;
}
console.log(raiz(9))