import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const { nombre, precio, id } = producto;

    //agregar producto al carrito
    const seleccionarProducto = id =>{
        const producto = productos.filter(producto => producto.id === id)[0];
        agregarProducto([
            //hacemos una copia del carrito, pues agregarProducto es una funcion que modifica el state
            //por lo que en vez de modificarlo creamos un array nuevo, para hacer la funcion
            //de carrito de compra, o sea, que todas las compras se guarden
            //y no se borren al efectuar una compra
            ...carrito,
            //pasamos el producto que agregamos
            producto
        ]);
    }

    //ekiminar producto del carrito
    const eliminarProducto = id => {
        const productos = carrito.filter(producto => producto.id != id);

        //colocar los productos en el state
        agregarProducto(productos);
    }


    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
            { productos
                ?
                (
                    <button 
                        type="button"
                        onClick={ () => seleccionarProducto(id) }    
                    >Comprar</button>
                )
                :
                (
                    <button 
                        type="button"
                        onClick={ () => eliminarProducto(id) }    
                    >Eliminar</button>
                )
            }
        </div>
     );
}
 
export default Producto;