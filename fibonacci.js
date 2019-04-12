var n = prompt("quantos termos na sequencia de fibonacci?");

var a = 0 
var b = 1
var resultado = 0

document.write(a + " ")
document.write(b + " ")
for(i = 3; i <= n; i++) {

    resultado = a + b
    a = b
    b = resultado
    document.write(resultado + " ")
}

