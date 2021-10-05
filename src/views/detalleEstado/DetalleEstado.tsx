import { Button, Col, Row, Table } from "react-bootstrap";
import "./DetalleEstado.css";
import detalleAvance from "./../../interfaces/detalleProps";

const DetalleData = (props: detalleAvance) => {
  const {
    noAvance,
    fecha,
    moneda,
    costoProyecto,
    avanceFecha,
    avanceAnterior,
    avancePromedio,
    montoCorregidoUno,
   montoCorregidoDos,
   devAnticipoUno,
   devAnticipoDos
  } = props.datos;
  return (
    <>
      <div className="montos-detalle">
        <span>
          <p className="Texto3">No. Avance</p>
          <input type="text" className="caja4" value={noAvance}></input>
        </span>
        <span>
          <p className="Texto3">Fecha de Inspección</p>
          <input type="text" className="caja4" value={fecha}></input>
        </span>
        <span>
          <p className="Texto3">Moneda</p>
          <input type="text" className="caja4" value={moneda}></input>
        </span>
      </div>

      <div className="Container mt-4">
        <Row>
          <Table striped bordered hover>
            <thead>
              <tr>
                <td rowSpan="2"></td>
                <th colSpan="2" scope="colgroup">
                  Costo Total del Proyecto
                </th>
                <th colSpan="2" scope="colgroup">
                  Total Avance a la Fecha
                </th>
                <th colSpan="2" scope="colgroup">
                  Total Avance Anterior
                </th>
                <th colSpan="2" scope="colgroup">
                  Total Avance del promedio
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col">%Inc</th>
                <th scope="col"></th>
                <th scope="col">%Inc</th>
                <th scope="col"></th>
                <th scope="col">%Inc</th>
                <th scope="col"></th>
                <th scope="col">%Inc</th>
              </tr>
              <tr>
                <th scope="row">INSTAL FAENAS Y OBRAS</th>
                <td>{costoProyecto[0].instalCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incUnoProy.toFixed(2)}</td>
                <td>{avanceFecha[0].instAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incUnoAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].instAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incUnoAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].instProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incUnoProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">URB TERREN EN</th>
                <td>{costoProyecto[0].urbCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incDosProy.toFixed(2)}</td>
                <td>{avanceFecha[0].urbAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incDosAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].urbAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incDosAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].urbProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incDosProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">EDIFICACIÓN</th>
                <td>{costoProyecto[0].EdiCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incTresProy.toFixed(2)}</td>
                <td>{avanceFecha[0].ediAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incTresAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].ediAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incTresAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].ediProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incTresProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">GASTO GRAL DIRECTO</th>
                <td>{costoProyecto[0].gastCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incCuaProy.toFixed(2)}</td>
                <td>{avanceFecha[0].gastAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incCuaAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].gastAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incCuaAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].gastProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incCuaProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">HONORARIOS EMPRESA</th>
                <td>{costoProyecto[0].honCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incCinProy.toFixed(2)}</td>
                <td>{avanceFecha[0].honAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incCinAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].honAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incCinAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].honProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incCinProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">OTROS</th>
                <td>{costoProyecto[0].otrCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incSeiProy.toFixed(2)}</td>
                <td>{avanceFecha[0].otrAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incSeiAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].otrAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incSeiAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].otrProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incSeiProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">IVA</th>
                <td>{costoProyecto[0].ivaCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incSieProy.toFixed(2)}</td>
                <td>{avanceFecha[0].ivaAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incSieAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].ivaAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incSieAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].ivaProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incSieProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">AVANCE EXIGIDO</th>
                <td>{costoProyecto[0].avCostProyecto.toFixed(2)}</td>
                <td>{costoProyecto[0].incOchProy.toFixed(2)}</td>
                <td>{avanceFecha[0].avAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incOchAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].avAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incOchAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].avProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incOchProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row">TOTAL OBRA</th>
                <td>{costoProyecto[0].totCostProyecto.toFixed(2)}</td>
                <td></td>
                <td>{avanceFecha[0].totAvance.toFixed(2)}</td>
                <td>{avanceFecha[0].incNueAvance.toFixed(2)}</td>
                <td>{avanceAnterior[0].totAnterior.toFixed(2)}</td>
                <td>{avanceAnterior[0].incNueAnterior.toFixed(2)}</td>
                <td>{avancePromedio[0].totProm.toFixed(2)}</td>
                <td>{avancePromedio[0].incNueProm.toFixed(2)}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="monto">MONTO</td>
                <td className="factor">FACTOR</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="monto-corregido">MONTO CORREGIDO</td>
                <td className="total-corregido">{montoCorregidoUno}</td>
                <td className="factor-corregido">{montoCorregidoDos}</td>
              </tr>
              <tr>
                <th scope="row"></th>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="devolucion-min">DEVOLUCIÓN MÍNIMO ANTICIPO</td>
                <td className="total-dev">{devAnticipoUno}</td>
                <td className="total-dev-ant">{devAnticipoUno }</td>
              </tr>
            </tbody>
          </Table>
        </Row>
        <Row>
          <Col className="col-lg-9 col1">
            <Row>
              <Col className="col-lg-10 col3">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="2"
                ></textarea>
              </Col>
              <Col className="col-lg-2 col4">
                <Button className="btn btn-warning">FIRMAR</Button>
              </Col>
            </Row>
          </Col>
          <Col className="col-lg-3 col2">
            <Button className="btn btn-warning">GUARDAR</Button>
            <Button className="btn btn-secondary">IMPRIMIR</Button>
            <Button className="btn btn-danger">SALIR</Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

const DetalleEstado = () => {
  const data = {
    noAvance: 1,
    fecha: "26/10/2001",
    moneda: "U.F.",
    costoProyecto: [
      {
        instalCostProyecto: 949.0,
        urbCostProyecto: 4542.0,
        EdiCostProyecto: 40849.0,
        gastCostProyecto: 5447.0,
        honCostProyecto: 2723.0,
        otrCostProyecto: 0.0,
        ivaCostProyecto: 0.0,
        avCostProyecto: 0.0,
        totCostProyecto: 54510.0,
        incUnoProy: 1.71,
        incDosProy: 7.93,
        incTresProy: 76.85,
        incCuaProy: 12.23,
        incCinProy: 0.0,
        incSeiProy: 1.29,
        incSieProy: 0.0,
        incOchProy: 0.0,
      },
    ],
    avanceFecha: [
      {
        instAvance: 618.0,
        urbAvance: 77.0,
        ediAvance: 1559.0,
        gastAvance: 407.0,
        honAvance: 0.0,
        otrAvance: 666.0,
        ivaAvance: 0.0,
        avAvance: 0.0,
        totAvance: 3327.0,
        incUnoAvance: 69.99,
        incDosAvance: 1.88,
        incTresAvance: 3.92,
        incCuaAvance: 6.43,
        incCinAvance: 0.0,
        incSeiAvance: 100.0,
        incSieAvance: 0.0,
        incOchAvance: 0.0,
        incNueAvance: 6.1,
      },
    ],
    avanceAnterior: [
      {
        instAnterior: 0.0,
        urbAnterior: 0.0,
        ediAnterior: 0.0,
        gastAnterior: 0.0,
        honAnterior: 0.0,
        otrAnterior: 0.0,
        ivaAnterior: 0.0,
        avAnterior: 0.0,
        totAnterior: 0.0,
        incUnoAnterior: 0.0,
        incDosAnterior: 0.0,
        incTresAnterior: 0.0,
        incCuaAnterior: 0.0,
        incCinAnterior: 0.0,
        incSeiAnterior: 0.0,
        incSieAnterior: 0.0,
        incOchAnterior: 0.0,
        incNueAnterior: 0.0,
      },
    ],
    avancePromedio: [
      {
        instProm: 618.0,
        urbProm: 77.0,
        ediProm: 1559.0,
        gastProm: 407.0,
        honProm: 0.0,
        otrProm: 666.0,
        ivaProm: 0.0,
        avProm: 0.0,
        totProm: 3327.0,
        incUnoProm: 65.12,
        incDosProm: 1.7,
        incTresProm: 3.82,
        incCuaProm: 7.47,
        incCinProm: 0.0,
        incSeiProm: 66600.0,
        incSieProm: 0.0,
        incOchProm: 0.0,
        incNueProm: 6.1,
      },
    ],
    montoCorregidoUno: 3327.0,
    montoCorregidoDos: 100.0,
    devAnticipoUno: 450.0,
    devAnticipoDos: 13.52,
  };

  return <>
  <div>
      <DetalleData datos={data} />
    </div>
  </>;
};

export default DetalleEstado;
