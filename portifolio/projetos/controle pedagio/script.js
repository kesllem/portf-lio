var media1 = 0; //media das velocidades
var contador = 0;
var vM = 0;  //velocidade maior
var vm = 999;      //velocidade menor
var Soma = 0;   //para somar as velocidades
var s = 0;  //para somar os valores 

var menorhI = 9999; //menor hora inicial
var maiorhF = 0; //maior hora final

var menormI = 9999; //menor minuto inicial
var maiormF = 0; //maior minuto final

function calcula(){
    
    contador++

    const placa = document.getElementById(`placa`).value;
    const hpart = parseFloat(document.getElementById(`hpartida`).value);
    const minpart = parseFloat(document.getElementById(`minpartida`).value);
    const hcheg = parseFloat(document.getElementById(`hchegada`).value);
    const mincheg = parseFloat(document.getElementById(`minchegada`).value);

    const minipH = (minpart / 60) + hpart; //para tranformar os minutos da partida em horas
    const minfpH = (mincheg / 60) + hcheg; //para tranformar os minutos da chegadaem horas
    const tempg = minfpH - minipH; //tempo gasto no percurso
    const vp = 20; //valor do pedagio
    const media = 70 / tempg; //media de velocidade
    

    //mensagem
    const mensagemfinal = document.getElementById("mensagem");
    
    
    if(hpart ==="" || minpart ==="" || hcheg === "" || mincheg ==="" || placa ===""){
        alert("Por favor, prencha todos os campos.");
    }

    else if(media <= 60){
        const caL = vp - (15 / 100 * vp);
       mensagemfinal.innerHTML = `A placa do carro é: ${placa}\n Hora de entrada no trecho ${hpart}:${minpart}\n Hora de saída no trecho: ${hcheg}:${mincheg}\n Tempo gasto no percuso: ${tempg} horas\n Velocidade média: ${media}Km/h\n O total que você terá que pagar pelo pedágio é: R$${caL}`;
       s += caL;
    }

    else if(media >= 60 && media <= 100){
        const caL = vp - (10 / 100 * vp);
       mensagemfinal.innerHTML = `A placa do carro é: ${placa}\n Hora de entrada no trecho ${hpart}:${minpart}\n Hora de saída no trecho: ${hcheg}:${mincheg}\n Tempo gasto no percuso: ${tempg} horas\n Velocidade média: ${media}Km/h\n O total que você terá que pagar pelo pedágio é: R$${caL}`;
       s += caL;
    }

    else if(media > 100){
        const caL = vp - (0 / 100 * vp);
       mensagemfinal.innerHTML = `A placa do carro é: ${placa}\n Hora de entrada no trecho ${hpart}:${minpart}\n Hora de saída no trecho: ${hcheg}:${mincheg}\n Tempo gasto no percuso: ${tempg} horas\n Velocidade média: ${media}Km/h\n O total que você terá que pagar pelo pedágio é: R$${caL}`;
       s += caL;
    }


    if (media >= vM)
        {
            vM = media;
        }
        if (media <= vm)
        {
            vm = media;
        }
        
        Soma += media;
        media1 = Soma / contador;
       
       
        if (contador === 1)
        {
        }
       
        if (hpart <= menorhI)
        {
            menorhI = hpart;
        }
        if (minpart <= menormI)
        {
            menormI = minpart;
        }

        if (hcheg >= maiorhF)
        {
            maiorhF = hcheg;
        }

        if (mincheg >= maiormF)
        {
            maiormF = mincheg;
        }

}

function fim(){
   
    const mensagemre = document.getElementById("mensagem2");

    mensagemre.innerHTML = `Menor velocidade registrada ${vm}
    Maior velocidade registrada ${vM}
    \n Média das velocidades registradas ${media1}
    \n Total dos valores cobrados ${s}
    \n Hora de inicio do processamento ${menorhI}:${menormI}
    \n Hora do final do processamento ${maiorhF}:${maiormF}`;
}