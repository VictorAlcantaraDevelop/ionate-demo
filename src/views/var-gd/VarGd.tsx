import { Col, Row, Table } from "react-bootstrap";
import indices from "./../../interfaces/IndicesProps";
import "./VarGd.css";

const IndiceData = (props: indices) => {
  const { perConst, intereses, recPry, inicioProg, antesRecep, conRecep,relacionUno,relacionDos,relacionTres } = props.datos;
  
  return (
    <>
      <Row>
        <Col className="col-lg-2 col1">
          <h3>Índices</h3>
          <hr />
          <h4>Per.Const.(n)</h4>
          <input type="text" className="caja" value={perConst.toFixed(2)} />
          <h4>Intereses (i)</h4>
          <input type="text" className="caja" value={intereses.toFixed(2)} />
          <h4>Rec. Pry (Rec)</h4>
          <input type="text" className="caja" value={recPry.toFixed(2)}></input>
        </Col>
        <Col>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>Inicio Prog</th>
                <th>Antes de Recep.Mun.</th>
                <th>Con Recep.Mun.</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TERRENO</td>
                <td>{inicioProg[0].terrenoProg.toFixed(2)}</td>
                <td>{antesRecep[0].terrenoAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].terrenoConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td>AV.OBRAS</td>
                <td>{inicioProg[0].avObrasProg.toFixed(2)}</td>
                <td>{antesRecep[0].avObrasProgAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].avObrasProgConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td>VALOR PROY.TERMINADO</td>
                <td>{inicioProg[0].valorProyTerminadoProg.toFixed(2)}</td>
                <td>{antesRecep[0].valorProyTerminadoAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].valorProyTerminadoConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="total-prog">TOTAL GARANTIAS</td>
                <td className="total-inicio-prog">
                  {inicioProg[0].totalGarantiasProg.toFixed(2)}
                </td>
                <td className="total-antes-recep">
                  {antesRecep[0].totalGarantiasAntesRecep.toFixed(2)}
                </td>
                <td className="total-con-recep">
                  {conRecep[0].totalGarantiasConRecep.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td>BOLETAS GTIA.URBAN.</td>
                <td>{inicioProg[0].boletasProg.toFixed(2)}</td>
                <td>{antesRecep[0].boletasAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].boletasConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td>ANTICIPO</td>
                <td>{inicioProg[0].anticipoProg.toFixed(2)}</td>
                <td>{antesRecep[0].valorProyTerminadoAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].valorProyTerminadoConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td>CRÉDITO SEGÚN AV. DE OBRAS</td>
                <td>{inicioProg[0].creditoObrasProg.toFixed(2)}</td>
                <td>{antesRecep[0].creditoObrasAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].creditoObrasConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td>CRÉDITOS CON RECEP.MUN</td>
                <td>{inicioProg[0].creditoMunProg.toFixed(2)}</td>
                <td>{antesRecep[0].creditoMunAntesRecep.toFixed(2)}</td>
                <td>{conRecep[0].creditoMunConRecep.toFixed(2)}</td>
              </tr>
              <tr>
                <td className="total-prog">TOTAL DEUDAS</td>
                <td className="total-inicio-prog">
                  {inicioProg[0].totalDeudasProg.toFixed(2)}
                </td>
                <td className="total-antes-recep">
                  {antesRecep[0].totalDeudasAntesRecep.toFixed(2)}
                </td>
                <td className="total-con-recep">
                  {conRecep[0].totalDeudasConRecep.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
      <div className="Container mt-3">
        <Row>
          <Col className="col-lg-2 col1"></Col>
          <Col className="col2">
            <p className="Texto2">Relación Garantía-Deuda(%)</p>
            <input type="text" className="caja2" value={relacionUno.toFixed(2)}></input>
            <input type="text" className="caja2" value={relacionDos.toFixed(2)}></input>
            <input type="text" className="caja2" value={relacionTres.toFixed(2)}></input>
          </Col>
        </Row>
        <Row>
          <p className="texto-final">*Información histórica según solicitud</p>
        </Row>
      </div>
    </>
  );
};
const VarGd = () => {
  const data = {
    perConst: 12.0,
    intereses: 10.0,
    recPry: 6.0,
    inicioProg: [
      {
        terrenoProg: 37637.0,
        avObrasProg: 0.0,
        valorProyTerminadoProg: 0.0,
        totalGarantiasProg: 37637.0,
        boletasProg: 0.0,
        anticipoProg: 7000.0,
        creditoObrasProg: 0.0,
        creditoMunProg: 0.0,
        totalDeudasProg: 7000.0,
      },
    ],
    antesRecep: [
      {
        terrenoAntesRecep: 37637.0,
        avObrasProgAntesRecep: 51787.0,
        valorProyTerminadoAntesRecep: 0.0,
        totalGarantiasAntesRecep: 89424.0,
        boletasAntesRecep: 0.0,
        anticipoAntesRecep: 7726.69,
        creditoObrasAntesRecep: 47111.73,
        creditoMunAntesRecep: 0.0,
        totalDeudasAntesRecep: 54838.42,
      },
    ],
    conRecep: [
      {
        terrenoConRecep: 0.0,
        avObrasProgConRecep: 0.0,
        valorProyTerminadoConRecep: 135079.98,
        totalGarantiasConRecep: 135079.98,
        boletasConRecep: 0.0,
        anticipoConRecep: 7726.69,
        creditoObrasConRecep: 47111.73,
        creditoMunConRecep: 0.0,
        totalDeudasConRecep: 54838.42,
      },
    ],
    relacionUno:5.38,
    relacionDos:1.63,
    relacionTres:2.46
  };
  return (
    <div>
      <IndiceData datos={data} />
    </div>
  );
};

export default VarGd;
