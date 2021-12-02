var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 6) {
  console.log('BOA MADRUGADA!') 
  }
    else if  (hora > 6 && hora < 12) {
    console.log('BOM DIA!') 
  
  } else if (hora > 12 && hora < 18) {
    console.log('BOA TARDE!')
  
  } else {
    console.log('BOA NOITE!')
  }
  
    
    
  
  
    
  
