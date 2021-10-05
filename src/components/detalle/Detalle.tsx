import DetalleEstado from '../../views/detalleEstado/DetalleEstado';
import { useState } from "react";
import { Container } from "react-bootstrap";
import Arquitecto from "./../../assets/arquitecto.svg";

export const Detalle = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index: number) => {
      setToggleState(index);
    };
  
    return (
      <>
        <section className="encabezado-antedecendentes">
          <img src={Arquitecto} alt="Documentacion" width="44" height="36" />
          <h1 className="titulo-arquitecto mt-2">Detalle de Estado de Avance</h1>
        </section>
  
        <Container>
          <div className="bloc-tabs">
            <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"}>
              Estado de Avance
            </button>
            <button
              className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(2)} disabled
            >
              Corrección del Avance
            </button>
            <button
              className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(3) } disabled
            >
              Antecedentes de la Obra
            </button>
            <button
              className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
              onClick={() => toggleTab(4) } disabled
            >
              Observaciones
            </button>
        
          </div>
  
          <div className="content-tabs">
            <div
              className={
                toggleState === 1 ? "content  active-content" : "content"
              }
            >
              <DetalleEstado />
            </div>
          </div>
     
        </Container>
      </>
    );
  };

export default Detalle;