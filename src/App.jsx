import Contador from "./Contador"
import Horario from "./Horario"
import Portada from "./Portada"

function App() {
  return (
    <div>
     {/* <Portada 
        titulo='Desarrollo Web 1'
        fecha='16 de febrero del 3020'
      />
    <Horario/> */}
      <Contador
      contador={0}
      />
    </div>
  );
}

export default App
