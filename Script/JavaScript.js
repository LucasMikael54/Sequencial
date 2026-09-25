//Variavel 
let numero1; numero2, resultado1; 
 
function somar() { 
    //Entrada 
    numero1 = parseInt(document.getElementById("numero1").value); 
    numero2 = parseInt(document.getElementById("numero2").value); 

    //Processamento 
    resultado1 = numero1 + numero2; 

    //Saída 
    document.getElementById("resultado1").innerHTML = "Resultado:" + resultado1; 
} 


//Variaveis 
let Celsius, F; 
 
function converter() { 
    //entrada 
    Celsius = parseFloat(document.getElementById("Celsius").value); 
 
    //Processamento 
    F = (Celsius * 9 / 5) + 32 

    //Saída 
    document.getElementById("resultado2").innerHTML = "F =" + F; 
} 


//Variaveis
let raio, altura, volume;

//Função para calcular o volume
function calcularVolume() {

    //Entrada
    raio = parseFloat(document.getElementById("raio").value);
    altura = parseFloat(document.getElementById("altura").value);

    //Processamento
    volume = 3.14159 * raio * raio * altura;

    //Saída
    document.getElementById("resultado3").innerHTML = "Volume =" + volume;
}
