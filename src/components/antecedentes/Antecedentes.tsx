import { useState } from "react";
import { Container } from "react-bootstrap";
import Comercializacion from "../../views/comercializacion/Comercializacion";
import VarGd from "../../views/var-gd/VarGd";
import Documentacion from "./../../assets/documentacion.svg";
import "./Antecedentes.css";

const Antecedentes = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <>
      <section className="encabezado-antedecendentes">
        <img src={Documentacion} alt="Documentacion" width="44" height="36" />
        <h1 className="titulo-antecedentes mt-2">Antecedentes Generales</h1>
      </section>

      <Container>
        <div className="bloc-tabs">
          <button className={toggleState === 1 ? "tabs active-tabs" : "tabs"} disabled>
            Resumen
          </button>
          <button
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)} disabled
          >
            Plazos/Montos
          </button>
          <button
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)} disabled
          >
            Uni. a Const.
          </button>
          <button
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)} disabled
          >
            Costos
          </button>
          <button
            className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(5)}
          >
            Var. G-D.
          </button>
          <button
            className={toggleState === 6 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(6)} 
          >
            Comercialización
          </button>
          <button
            className={toggleState === 7 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(7)} disabled
          >
            Crédito Propio
          </button>
          <button className={toggleState === 8 ? "tabs active-tabs" : "tabs"} disabled>
            Observaciones
          </button>
        </div>

        <div className="content-tabs">
          <div
            className={
              toggleState === 5 ? "content  active-content" : "content"
            }
          >
            <VarGd />
          </div>
        </div>
        <div className="content-tabs">
          <div
            className={
              toggleState === 6 ? "content  active-content" : "content"
            }
          >
            <Comercializacion />
          </div>
        </div>
      </Container>
    </>
  );
};

export default Antecedentes;
