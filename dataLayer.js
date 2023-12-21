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
}
