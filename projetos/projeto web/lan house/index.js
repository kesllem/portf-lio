function calcularValor() {
    const valorPor15Min = parseFloat(document.getElementById('valorPor15Min').value);
    const tempoDeUso = parseInt(document.getElementById('tempoDeUso').value, 10);

    if (isNaN(valorPor15Min) || isNaN(tempoDeUso) || tempoDeUso < 0) {
        document.getElementById('resultado').innerText = 'Por favor, insira valores válidos.';
        return;
    }

    // Calcular quantos blocos de 15 minutos foram utilizados
    const blocos15Min = Math.ceil(tempoDeUso / 15); // Arredondar para cima
    const valorTotal = blocos15Min * valorPor15Min;

    // Exibir o resultado
    document.getElementById('resultado').innerText = `Valor a ser pago: R$ ${valorTotal.toFixed(2)}`;
}