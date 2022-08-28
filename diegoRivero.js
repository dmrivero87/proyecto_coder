let usuarios_registrados = [
    {nombre: "Juana" , apellido: "Perez" , doc_id: 13382450 , direccion: "Fernandez Crespo 2154"},
    {nombre: "Diego" , apellido: "Rivero" , doc_id: 45579872 , direccion: "Yatay 1428"},
    {nombre: "Ignacio" , apellido: "Caballero" , doc_id: 43214560 , direccion: "Enrique Brito 987"},
    {nombre: "Federico" , apellido: "Baricevich" , doc_id: 39857415 , direccion: "Tacuarembo 7413"},
    {nombre: "Alejandra" , apellido: "Valentin" , doc_id: 38974168 , direccion: "Av. Italia 4563"},
    {nombre: "Fernando" , apellido: "Rodriguez" , doc_id: 19874451 , direccion: "Ayacucho 6402"},
    {nombre: "Felipe" , apellido: "Peluffo" , doc_id: 54789638 , direccion: "Cañas 12"},
    
]

function buscar_doc_id (usuario){
    return (prompt ("Ingrese su documento de identidad"))
}

function nuevo_registro_usuario(){
    let registro_usuario = [];{
        let doc_id = prompt("Ingrese su documento de identidad");
        let nombre = prompt("Ingrese su nombre");
        let apellido = prompt("ingrese su apellido");
        let direccion = prompt("Ingrerse su direccion");

        
        let nuevo_usuario = new Usuario(nombre , apellido , doc_id, direccion);

        registro_usuario.push( nuevo_usuario );
        console.log(registro_usuario);
    }
    
}




let registro_usuario = [];
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

let registro = prompt("Bienvendido a la tienda oficial de C.A. Aguada. Usted esta registrado Si o No?")

    if (registro == "SI" || registro == "si" || registro == "Si"){

        let resultado_some = usuarios_registrados.some(buscar_doc_id);
        
        
        if (resultado_some == true){
        
        console.log("El usuario esta registrado")
        
        }
        
        else if (resultado_some == false){
        
        console.log("no esta registrado")
        
        }    
        nuevo_pedido()

    }else if(registro == "NO" || registro == "no" || registro == "No") {
        
        nuevo_registro_usuario()
        
        nuevo_pedido()
        
        
    }else (registro = prompt("No has ingresado una opcion valida. Ingresa Si o NO "))
    


const total_precio_compra = registro_pedido.reduce((acumulador, objeto) => {
    return acumulador + objeto.total_pedido; }, 0) ;



console.log("Monto total del pedido es: " + total_precio_compra)
alert("Gracias por comprar en la tienda del club mas popular. Que disfutes tus productos. Total compra : " + total_precio_compra )