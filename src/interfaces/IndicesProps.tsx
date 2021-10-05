interface iIndicesProps {
  datos: {
    perConst: number;
    intereses: number;
    recPry: number;
    inicioProg: {
      terrenoProg: number;
      avObrasProg: number;
      valorProyTerminadoProg: number;
      totalGarantiasProg: number;
      boletasProg: number;
      anticipoProg: number;
      creditoObrasProg: number;
      creditoMunProg: number;
      totalDeudasProg: number;
    }[];
    antesRecep: {
      terrenoAntesRecep: number;
      avObrasProgAntesRecep: number;
      valorProyTerminadoAntesRecep: number;
      totalGarantiasAntesRecep: number;
      boletasAntesRecep: number;
      anticipoAntesRecep: number;
      creditoObrasAntesRecep: number;
      creditoMunAntesRecep: number;
      totalDeudasAntesRecep:number;
    }[];
    conRecep: {
        terrenoConRecep: number;
        avObrasProgConRecep: number;
        valorProyTerminadoConRecep: number;
        totalGarantiasConRecep: number;
        boletasConRecep: number;
        anticipoConRecep: number;
        creditoObrasConRecep: number;
        creditoMunConRecep: number;
        totalDeudasConRecep: number;
      }[];
    relacionUno: number;
    relacionDos:number;
    relacionTres:number;
  };
}

export default iIndicesProps;
