//Ejercicio 1
let personas = [("Sofía"), ("David"), ("Juan")]
personas.push("Sara", "Augustin")
personas.shift();
personas.splice(1, 0, "Renata");
personas.push("Elena");

console.log(personas);


//Ejercicio 2
let asterisco = "*";
let contador = 0;

while(contador < 5){
    console.log(asterisco);
    asterisco = asterisco + "*";
    contador++;
};


