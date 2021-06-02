let valorContador = document.querySelector('#valorMostrado');
let sumaContador = document.querySelector('#botonSuma');
let restaContador = document.querySelector('#botonResta');

var contador = 0;
console.log(contador);

sumaContador.addEventListener("click", ()=>{
    contador++;
    valorContador.textContent = contador;
    console.log(contador);

})

restaContador.addEventListener("click", ()=>{
    contador--;
    valorContador.textContent = contador;
    console.log(contador);

})
