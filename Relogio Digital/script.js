const horas_p = document.getElementById("horas");
const minutos_p = document.getElementById("minutos");
const segundos_p = document.getElementById("segundos");



let relogio = () => {

    let relogio_time = new Date();
    
    let horas = relogio_time.getHours() < 10? "0" + relogio_time.getHours(): relogio_time.getHours();
    let minutos = relogio_time.getMinutes() < 10? "0" + relogio_time.getMinutes(): relogio_time.getMinutes();
    let segundos = relogio_time.getSeconds() < 10? "0" + relogio_time.getSeconds(): relogio_time.getSeconds();

    horas_p.innerHTML = horas;
    minutos_p.innerHTML = minutos;
    segundos_p.innerHTML = segundos;

}

relogio();

const intervalo = setInterval(relogio, 1000);

