//function cadastro () {
const form = document.querySelector('.form');

//form.onsubmit = function (evento) {
//  event.preventDefault();
//alert (1);
//console.log('foi enviado')

// };
//}
//cadastro();

function cadastro() {

    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];

    function recebeEventoform(evento) {
       evento.preventDefault();

       const nome = form.querySelector('.nome');
       const sobrenome = form.querySelector('.sobrenome');
       const peso = form.querySelector('.peso');
       const altura = form.querySelector('.altura');
    

    
       pessoas.push({
         nome: nome.value,
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
       });
    


        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value}, ${sobrenome.value}, ${peso.value}, ${altura.value}</p>`
    }
            
        
    
    form.addEventListener('submit', recebeEventoform);


}

cadastro()