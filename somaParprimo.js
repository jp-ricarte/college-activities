//Faça um programa que receba dez números, calcule e mostre a soma dos números pares e a soma dos números impares

somaPar = 0;

somaImpar = 0;

i = 1;

while(i <= 10){
	var numero = parseInt(prompt("valor do numero"));
	i++

		if(numero % 2 == 0 ){
		somaPar += numero
		}
			else{
				somaImpar += numero
			}
		
}
document.write("soma dos números pares: " + somaPar);
document.write("<br>soma dos números impares: " + somaImpar);
