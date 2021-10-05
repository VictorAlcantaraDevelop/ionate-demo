import { Col, Row, Table } from "react-bootstrap";
import comercializacion from "./../../interfaces/ComercializacionProps";
import "./Comercializacion.css";

const ComerData = (props: comercializacion) => {
  const {
    numUniComp,
    numUniPorComer,
    montoCredito,
    destUniComp,
    destUniComer,
    montoUniCompr,
    montoUniComer,
    deuda,
    FlujosAjustados,
    relacionFlujo,
  } = props.datos;
  return (
    <div>
      <div className="Container mt-3">
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Partida</th>
                <th></th>
                <th>Destino</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>UNIDADES COMPROMETIDAS</td>
                <td>{numUniComp}</td>
                <td>{destUniComp}</td>
                <td>{montoUniCompr.toFixed(2)}</td>
              </tr>
              <tr>
                <td>UNIDADES POR COMERCIALIZAR</td>
                <td>{numUniPorComer}</td>
                <td>{destUniComer}</td>
                <td>{montoUniComer.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="monto-credito" colSpan="1">MONTO CRÉDITO ANTES DE INICIO DE ABONOS</td>
                <td></td>
                <td></td>
                <td className="monto-total-credito">{montoCredito}</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col></Col>
          <Col className="col-lg-6 col2">
            <div className="montos-comercializacion">
              <span>
                <p className="Texto2">
                  Deuda (Créd. Propuesto + Carga Financiera)
                </p>
                <input type="text" className="caja3" value={deuda}></input>
              </span>
              <span>
                <p className="Texto2">Flujos Ajustados</p>
                <input type="text" className="caja3" value={FlujosAjustados}></input>
              </span>
              <span>
                <p className="Texto2">Relación flujo ajustado deuda</p>
                <input type="text" className="caja3" value={relacionFlujo}></input>
              </span>
            </div>
          </Col>
        </Row>
        <Row>
          <p className="texto-final">*Información histórica según solicitud</p>
        </Row>
      </div>
    </div>
  );
};

const Comercializacion = () => {
  const data = {
    numUniComp: 8,
    numUniPorComer: 34,
    montoCredito: 56226.52,
    destUniComp: "FLUJO AJUSTADO",
    destUniComer: "FLUJO AJUSTADO",
    montoUniCompr: 6432.0,
    montoUniComer: 94878.0,
    deuda: 56226.52,
    FlujosAjustados: 101310.0,
    relacionFlujo: 1.8,
  };

  return (
    <div>
      <ComerData datos={data} />
    </div>
  );
};

export default Comercializacion;
