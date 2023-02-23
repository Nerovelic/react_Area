import React, {useState} from "react";
import PropTypes from "prop-types";

export const Contador = ({contador}) => {
    const[valor, setValor] = useState(contador);
    const handleSquare = (event) => {
        setValor(Math.pow(5,2));
    };
    const handleRectangle = (event) => {
        setValor(10*6);
    };
    const handleTriangle = (event) => {
        setValor((12*8)/2);
    };
    const erase = (event) => {
        setValor(contador);
    };
    return(
        <div>
            <h2> Area: {valor}</h2>
            <button onClick={handleSquare}>Cuadrado</button>
            <button onClick={handleRectangle}>Rectangulo</button>
            <button onClick={handleTriangle}>Triángulo</button>
            <button onClick={erase}>Borrar</button>
        </div>
    );
};

Contador.PropTypes = {
    contador: PropTypes.number.isRequired,
};

export default Contador;