let valores = [2,4,5,7,6,8,9]

/*for (let pos=0; pos < valores.length; pos++ )
    {
        console.log(`A posição ${pos} tem  o valor ${valores[pos]}`)
    }
        */
                // ou pode ser feito assim

for (let pos in valores){
    console.log (`A posição ${pos} tem o valor de ${pos}`)
}