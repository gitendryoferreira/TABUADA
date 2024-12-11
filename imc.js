function calcularIMC() {
    // Obtém os valores de peso e altura
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;

    // Calcula o IMC
    const imc = peso / (altura * altura);

    // Exibe o resultado
    const resultado = document.getElementById('resultado');
    resultado.textContent = `Seu IMC é: ${imc.toFixed(2)}`;
}