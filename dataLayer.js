const script = document.createElement('SCRIPT')
script.id='MudiDataLayer'
script.innerHTML=`
if( document.querySelector('.escritorio')){
    dataLayer.push({
        eventoMudi:'Visualización de Botones',
        mudiBtns: 1
    })
}else{
    dataLayer.push({
        eventoMudi:'Visualización de Botones',
        mudiBtns: 0
    })
}`;

if( document.querySelector('.escritorio')){
    document.head.appendChild(script)
}else if(document.getElementById('MudiDataLayer')){
    console.log('ya existe el script amigo')
}else{
    console.log('el codigo se ejecuta pero no está ni el elemento HTML ni el CDN .. que en todo caso sería muy raro --- ')
}




    






    



