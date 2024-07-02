var ent = 0

function epar(){
   num = window.document.getElementById('txt1').value;
   num2 = parseInt(num)
   if(num2 %2 ==0){
    document.getElementById('resultado').innerHTML = "Par"
    document.getElementById('div1').style.backgroundColor = "red"
   }
   else{
    document.getElementById("resultado").innerHTML = 'Impar'
    document.getElementById('div2').style.backgroundColor = 'black'
   }
   document.getElementById ('txt1').value = ('')
   //document.getElementById('div2').style.backgroundColor = blueviolet
}
