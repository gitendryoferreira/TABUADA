let calcular = document .getElementById('calcular');

calcular.addEventListener('click', function (e){
    e.preventDefault(); // Previnir o envio do formulario

    //pegar os valores dos inputs
    let numero1 = parseFloat(document.getElementById('numero1').value);
    let numero2 = parseFloat(document.getElementById('numero2').value);


    // verique se os valores são validos
     if (isNaN(numero1) || isNaN(numero2)) {
        document.getElementById ('resposta').textContent ="Por favor inserir numeros validos";

}else{
   let soma = numero1 + numero2;
   document.getElementById('resposta').textContent = "O resultado da soma é: " + soma;
} 

});