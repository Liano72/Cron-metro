//Principais Váriaveis

let hh = 0;
let mm = 0;
let ss = 0; 

var tempo = 1000;
var crono = 0;

//Inicia o cronometro

function iniciar(){
    crono = setInterval(() => {timer(); }, tempo);
}

//Para o cronometro mas não limpa as variáveis
function pause(){
    clearInterval(crono);
}

//Para o cronometro e limpa as variáveis
function parar(){
    clearInterval(crono);
    hh = 0;
    mm = 0;
    ss = 0; 

    document.getElementById('counter').innerHTML = '00:00:00'; 
}

//Faz a contagem do tempo e exibição
function timer(){
    ss++;

    if(ss == 59){
        ss = 0;
        mm++;
        if(mm == 59){
            mm = 0;
            hh++;
        }
    }
    
    var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);

    document.getElementById('counter').innerHTML = format;

    return format;
}