const numero = Number(prompt('Digite um numero')); //transforma prompt em numero a função Number
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');


numeroTitulo.innerHTML = numero;
texto.innerHTML += ` <p>Seu numero + 2 é  ${numero + 2} </p> `;
texto.innerHTML += ` <p>Raiz quadrada; ${numero ** 0.5}. <p> `;
texto.innerHTML += `<p> ${Number.isInteger(numero)} é inteiro <p>`;
texto.innerHTML += `<p> Arredonddando pra baixo${Math.floor(numero)}</p>`;
texto.innerHTML += `<p> Arredondando pra cima ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p> Duas casas decimais ${numero.toFixed(2)}`;



(Number.isInteger(num1))