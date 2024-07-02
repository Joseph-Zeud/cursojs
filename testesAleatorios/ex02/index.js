let ent1 = 0
function media (){
let num1txt = document.getElementById("inp1").value;
let num2txt = document.getElementById('inp2').value;
let num1 = parseFloat(num1txt)
let num2 = parseFloat(num2txt)
let soma =(( num1+num2)/2).toFixed(2)
document.getElementById('resultado').innerHTML =  `Sua media foi ${soma}` 
document.getElementById('inp1').value=('')
document.getElementById('inp2').value=('')




}