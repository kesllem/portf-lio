function calcular(){
    const nome1 = document.getElementById(`nome`).value;
    const sexo1 = document.getElementById(`sexo`).value;
    const peso1 = parseFloat(document.getElementById(`peso`).value);
    const altura1 = parseFloat(document.getElementById(`altura`).value);

    //calculo IMC
    const cal = parseFloat(peso1)/(parseFloat(altura1)*parseFloat(altura1));

    
    const Fperda = peso1 - (19.1 * altura1 * altura1);
    const Mperda = peso1 - (20.7 * altura1 * altura1);
    const Fganhar = (19.1 * altura1 * altura1) - peso1;
    const Mganhar = (20.7 * altura1 * altura1) - peso1;

    //para a mensagem
    const mensagemfinal = document.getElementById("mensagem");

    //estrutura condicional para verificação de campo
    if(nome1 ==="" || sexo1 ==="" || peso1 === "" || altura1 ===""){
        alert(`Por favor, prencha ${sexo1}/n todos os campos.`);
    }

    //para feminino
    else if(sexo1 === "feminino"){
        if(cal < 19.1){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está abaixo do peso com ${cal.toFixed(2)}Kg.
            Você precisa ganhar ${Fganhar}`; 
        }

        else if(cal >=  19.1 && cal <= 25.8){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está no peso normal com ${cal.toFixed(2)}Kg.`; 
        }

        else if(cal >=  25.8 && cal <= 27.3){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está marginalmente acima do peso com ${cal.toFixed(2)}Kg.
            Você precisa perder ${Fperda}`; 
        }

        else if( cal >=  27.3 && cal <= 32.3){
        mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está  acima do peso ideal com ${cal.toFixed(2)}Kg.
        Você precisa perder ${Fperda}`; 
        }

        else if(cal > 32.3){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está acima do peso ideal com ${cal.toFixed(2)}Kg.
            Você precisa perder ${Fperda}`; 
        }
    }   

    //para masculino
    else if(sexo1 === "masculino"){
        if(cal < 20.7){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está abaixo do peso com ${cal.toFixed(2)}Kg.
            Você precisa ganhar ${Mganhar}`; 
        }

        else if(cal >=  20.7 && cal <= 26.4){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está no peso normal com ${cal.toFixed(2)}Kg`; 
        }

        else if(cal >=  26.4 && cal <= 27.8){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está marginalmente acima do peso com ${cal.toFixed(2)}Kg.
            Você precisa perder ${Mperda}`; 
        }

        else if( cal >=  27.8 && cal <= 31.1){
        mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está  acima do peso ideal com ${cal.toFixed(2)}Kg.
            Você precisa perder ${Mperda}`; 
        }

        else if(cal > 31.1){
            mensagemfinal.innerHTML = `Olá, ${nome1}, no momento você está acima do peso ideal com ${cal.toFixed(2)}Kg.
            Você precisa perder ${Mperda}`; 
        }
    } 
}