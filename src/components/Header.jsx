import React from 'react';

function Header({titulo}) {
    //antes del return puede haber logica
    // const edad = 18;
    // let mensaje;
    // if(edad === 18){
    //     mensaje = 'eres mayor de edad'
    // }else{
    //     mensaje = 'eres menor de edad'
    // }
    //esto es lo que se vera en pantalla
    //los props
    
    return(
        <h1 className="encabezado">{titulo}</h1>
    );
}

export default Header;