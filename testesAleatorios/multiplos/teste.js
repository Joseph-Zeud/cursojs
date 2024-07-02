function teste(){
 inpt = window.document.getElementById('inp1').value;
 num1 = parseInt(inpt)
 if(num1 %3 == 0){
    document.getElementById('div2').innerHTML= `O numero ${num1} é multiplo de 3!`
 }if (num1%5 == 0) {
    document.getElementById('div2').innerHTML = `O numero ${num1} é multiplo de 5`
 } 
   
   
  }

    
