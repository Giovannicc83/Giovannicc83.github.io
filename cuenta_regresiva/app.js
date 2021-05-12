const contador = () =>{
    const fechaDeseada = new Date('December 25, 2021 00:00:00').getTime();
    const fechaHoy = new Date().getTime();
    
    const diferenciaFechas = fechaDeseada - fechaHoy;
    
    // Calculos
    const segundos = 1000;
    const minutos = segundos * 60;
    const horas = minutos * 60;
    const dias = horas * 24;

    //Resultados
    document.querySelector('#dias').innerText = Math.floor(diferenciaFechas / dias)    
    document.querySelector('#horas').innerText = Math.floor((diferenciaFechas%dias) / horas);
    document.querySelector('#minutos').innerText = Math.floor((diferenciaFechas%horas) / minutos);
    document.querySelector('#segundos').innerText = Math.floor((diferenciaFechas%minutos) / segundos);
}

setInterval(contador, 1000);