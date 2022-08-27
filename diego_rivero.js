


let registro_pedido = [];

class Usuario{
    constructor(nombre,apellido,doc_id,direccion){

        this.nombre = nombre;
        this.apellido = apellido;
        this.doc_id = doc_id;
        this.direccion = direccion;
    }
}

class Pedido{
    constructor (articulo, talle, precio, cantidad, total_pedido){

      
        this.articulo = articulo;
        this.talle = talle;
        this.precio = precio;
        this.cantidad = cantidad;
        this.total_pedido = total_pedido;
    }

}


function nuevo_pedido(){
     
        for (let i= 1 ; i<=10; i++){ //Arranco el cliclo en 1 para poder enumerar las compras
            let articulo = prompt("Ingrese el articulo a comprar en tu pedido numero " + i);
            let talle = prompt("Ingrese el talle de " + articulo);
            let precio = parseInt( prompt("Ingrese el precio de " + articulo));
            let cantidad = parseInt( prompt("Ingrese cantidad del articulo"));
            let total_pedido = (precio * cantidad)
             
            let nuevo_pedido = new Pedido(articulo, talle, precio, cantidad, total_pedido);
        
            registro_pedido.push( nuevo_pedido );
            console.log(registro_pedido);
    
            let siguiente= prompt ("Desea seguir comprando? Si o NO?")
                if (siguiente == "SI" || siguiente == "si" || siguiente == "Si"){
                    continue
                }
                else if(siguiente == "NO" || siguiente == "no" || siguiente == "No") {
                    break
                } else (siguiente = prompt("No has ingresado una opcion valida. Ingresa Si o NO "))
        }

    
}

let registro = prompt("Bienvendido a la tienda oficial de C.A. Aguada. Desea registrarse? Si o No?")

    if (registro == "SI" || registro == "si" || registro == "Si"){


        let registro_usuario = [];{

            let nombre = prompt("Ingrese su nombre");
            let apellido = prompt("ingrese su apellido");
            let doc_id = prompt("Ingrese su documento de identidad");
            let direccion = prompt("Ingrerse su direccion");


            let nuevo_usuario = new Usuario(nombre , apellido , doc_id, direccion);
    
            registro_usuario.push( nuevo_usuario );
            console.log(registro_usuario);
        }
        nuevo_pedido()
        
        funtion







    }else if(registro == "NO" || registro == "no" || registro == "No") {
        nuevo_pedido()
        
        
    }else (registro = prompt("No has ingresado una opcion valida. Ingresa Si o NO "))
    


const total_precio_compra = registro_pedido.reduce((acumulador, objeto) => {
    return acumulador + objeto.total_pedido; }, 0) ;



console.log("Monto total del pedido es: " + total_precio_compra)
alert("Gracias por comprar en la tienda del club mas popular. Que disfutes tus productos. Total compra : " + total_precio_compra )