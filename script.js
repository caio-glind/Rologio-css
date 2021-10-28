function relogio(){
    let data = new Date();
    
    let horas=data.getHours();//horas
    let minutos =data.getMinutes();//minutos
    let segundos =data.getSeconds();//segundos

    if(horas<10){
        horas="0"+horas;
    }
    if(minutos<10){
        minutos="0"+minutos;

    }
    if(segundos<10){
        segundos="0"+ segundos;
    }

    let horaforma = horas+":"+minutos+":"+segundos;
     
    ta.innerHTML=`<p>${horaforma}<p/>`

    }
     let tempo= setInterval(relogio,1000);