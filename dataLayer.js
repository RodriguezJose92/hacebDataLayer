const script = document.createElement('SCRIPT')
script.id='MudiDataLayer'
script.innerHTML=`
if( document.querySelenctor('.escritorio')){
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

if( document.getElementById('MudiDataLayer')){
    document.appendChild(script)
}else{
    console.log('Algo raro paso perros')
}
