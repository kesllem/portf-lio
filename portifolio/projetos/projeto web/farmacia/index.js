function desc(){
    const nomemed = document.getElementById('medic').value;
    const preco = document.getElementById('preco').value;

    const valort = preco * 2;

    const centavos = (valort % 1).toFixed(2).split('.')[1];

    const valorp = Math.floor(valort);


    document.getElementById('resultado').innerHTML = `Promoção de ${nomemed}
    Leve 2 por apenas R$${valorp}.00`;
}