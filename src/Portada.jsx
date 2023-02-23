import PropTypes from 'prop-types';

const Portada = ({titulo = 'Desarrollo Web 1', fecha = '16 de febrero del 3020'}) =>  {

  return (
    <div>
    <h1>{titulo}</h1>
    <h3>{fecha}</h3>
    </div>
  )
}

Portada.propTypes ={
    titulo: PropTypes.string,
    fecha: PropTypes.string
}

export default Portada