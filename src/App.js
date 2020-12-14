import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  //listado de productos
  //se hace un destructuring, se abstraen los valores
  //el primer valor digamos que seria lo que es el objeto y el segundo es
  //una funcion que ayuda a reescribir el state(eliminar, agregar, etc)
  const [productos, guardarProductos] = useState([
    //los valores pueden cambiar, un formulario, o lo que sea
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa NodeJS', precio: 30 },
    { id: 4, nombre: 'Camisa AngularJS', precio: 20 },
  ]);

  //STATE PARA UN CARRITO DE COMPRAS
  const [carrito, agregarProducto] = useState([

  ]);

  //OBTENER LA FECHA
  const fecha = new Date().getFullYear();
  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h1>Lista de productos</h1>
      {productos.map(producto => (
        <Producto 
          key={producto.id}
          producto={producto}
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
        carrito={carrito}
        agregarProducto={agregarProducto}
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
