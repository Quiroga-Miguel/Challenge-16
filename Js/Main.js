// Ejercicio descuento según marca y modelo del auto:
// Le pedimos al usuario que ingrese marca y modelo del auto,
// en caso que el auto sea Ford fiesta el descuento que se aplica será del 5 %,
// si es un Ford Focus el descuento será del 10 %.
// Mostramos por consola el descuento que obtendrá.


let VehiculoMarca = prompt(`Ingrese marca de vehiculo`);
let vehiculoModelo = prompt(`Ingrese modelo del vehiculo`);
alert (`La marca Ford tiene descuento los modelos Fiesta y el Focus`);

let MarcaMayuscula = VehiculoMarca.charAt(0).toUpperCase();
let MarcaResto = VehiculoMarca.substring(1, VehiculoMarca.length).toLowerCase();
let MarcaCompleta = MarcaMayuscula.concat(MarcaResto).trim();

let ModeloMayuscula = vehiculoModelo.charAt(0).toUpperCase();
let ModeloResto = vehiculoModelo.substring(1, vehiculoModelo.length);
let ModeloCompleta = ModeloMayuscula.concat(ModeloResto).trim();


if (MarcaCompleta == `Ford`) {
    if (ModeloCompleta ==`Fiesta`){
        console.log(`su modelo de auto posee 5% de descuento`);
    }
    else if (ModeloCompleta == `Focus`){
        console.log(`su modelo de auto posee 10% de descuento`);
    }
    else{
        console.log(`No posee descuento este modelo de auto`);
    }
    document.write(`${MarcaCompleta}  ${ModeloCompleta}`);
}
else if (MarcaCompleta == `Volkswagen` || MarcaCompleta==`Toyota`|| MarcaCompleta==`Renault` || MarcaCompleta ==`Nissan` || MarcaCompleta == `Chevrolet` || MarcaCompleta == `Fiat`) { 
    document.write(`${MarcaCompleta}  ${ModeloCompleta}`);
    console.log(`No posee descuento esta marca de vehiculo`);
}//Me falta mas marcas Vehiculos XD
else{
    alert(`Ingrese una ¡Marca de vehiculo!`);
}