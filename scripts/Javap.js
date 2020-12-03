// < menor que
// > mayor que
// >= mayor o igual
// <= menor o igual
// == igual que
// != distinto de 
// if (condicion && otra condicion) o (condicion || si no se puede ejecutar la otra se ejecuta mediante esta condicion)
let edad = prompt("Escribe tu edad");

if (edad >= 18){
    document.write("¡Bienvenido de nuevo!")
} else if(edad < 18) {
    document.write("No eres bienvenido, vuelve cuando tengas edad")
}
