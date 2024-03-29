interface iDetalleProps {
  datos: {
    noAvance: number;
    fecha: string;
    moneda: string;
    costoProyecto: {
      instalCostProyecto: number;
      urbCostProyecto: number;
      EdiCostProyecto: number;
      gastCostProyecto: number;
      honCostProyecto: number;
      otrCostProyecto: number;
      ivaCostProyecto: number;
      avCostProyecto: number;
      totCostProyecto: number;
      incDosProy:  number;
      incUnoProy:  number;
      incTresProy:number;
      incCuaProy:number;
      incCinProy:number;
      incSeiProy:number;
      incSieProy:number;
      incOchProy: number;
    }[];
    avanceFecha: {
      instAvance: number;
      urbAvance: number;
      ediAvance: number;
      gastAvance: number;
      honAvance: number;
      otrAvance: number;
      ivaAvance: number;
      avAvance: number;
      totAvance: number;
      incDosAvance:  number;
      incUnoAvance:  number;
      incTresAvance:number;
      incCuaAvance:number;
      incCinAvance:number;
      incSeiAvance:number;
      incSieAvance:number;
      incOchAvance: number;
      incNueAvance: number;
    }[];
    avanceAnterior: {
      instAnterior: number;
      urbAnterior: number;
      ediAnterior: number;
      gastAnterior: number;
      honAnterior: number;
      otrAnterior: number;
      ivaAnterior: number;
      avAnterior: number;
      totAnterior: number;
      incUnoAnterior:  number;
      incDosAnterior:  number;
      incTresAnterior:number;
      incCuaAnterior:number;
      incCinAnterior:number;
      incSeiAnterior:number;
      incSieAnterior:number;
      incOchAnterior: number;
      incNueAnterior: number;
    }[];
    avancePromedio: {
      instProm: number;
      urbProm: number;
      ediProm: number;
      gastProm: number;
      honProm: number;
      otrProm: number;
      ivaProm: number;
      avProm: number;
      totProm: number;
      incUnoProm:  number;
      incDosProm:  number;
      incTresProm:number;
      incCuaProm:number;
      incCinProm:number;
      incSeiProm:number;
      incSieProm:number;
      incOchProm: number;
      incNueProm: number;
    }[];
   montoCorregidoUno:number;
   montoCorregidoDos:number;
   devAnticipoUno:number;
   devAnticipoDos:number;
  };
}

export default iDetalleProps;
