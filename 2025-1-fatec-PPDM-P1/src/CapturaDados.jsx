import { useState } from 'react';

const CapturaDados = ({ setValorInicial, setAporteMensal, setTaxaJuros, setPeriodo, calcularResultado }) => {
  const [valorInicialEntrada, setValorInicialEntrada] = useState("")
  const [aporteMensalEntrada, setAporteMensalEntrada] = useState("")
  const [taxaJurosEntrada, setTaxaJurosEntrada] = useState("")
  const [periodoEntrada, setPeriodoEntrada] = useState("")

  const limparEntrada = () => {
    setValorInicialEntrada("");
    setValorInicial(0)
    setAporteMensalEntrada("");
    setAporteMensal(0)
    setTaxaJurosEntrada("");
    setTaxaJuros(0)
    setPeriodoEntrada("");
    setPeriodo(0)
  };

  return (
    <div>
      <div className="d-flex">
        <div className="col-6 mb-2">
          <p className="text-muted small mb-0">Valor inicial (R$)</p>
          <input type="text" className="border rounded card-header p-1"
            value={valorInicialEntrada}
            onChange={(e) => {
              setValorInicialEntrada(e.target.value)
              setValorInicial(parseInt(e.target.value) || 0)
            }} />
        </div>
        <div className="col-6 mb-2">
          <p className="text-muted small mb-0">Aporte mensal (R$)</p>
          <input type="text" className="border rounded card-header p-1"
            value={aporteMensalEntrada}
            onChange={(e) => {
              setAporteMensalEntrada(e.target.value)
              setAporteMensal(parseInt(e.target.value) || 0)
            }} />
        </div>
      </div>
      <div className="d-flex">
        <div className="col-6 mb-2">
          <p className="text-muted small mb-0">Taxa de juros (% ao mês)</p>
          <input type="text" className="border rounded card-header p-1"
            value={taxaJurosEntrada}
            onChange={(e) => {
              setTaxaJurosEntrada(e.target.value)
              setTaxaJuros(parseInt(e.target.value) / 100 || 0)
            }} />
        </div>
        <div className="col-6 mb-2">
          <p className="text-muted small mb-0">Periodo (meses)</p>
          <input type="text" className="border rounded card-header p-1"
            value={periodoEntrada}
            onChange={(e) => {
              setPeriodoEntrada(e.target.value)
              setPeriodo(parseInt(e.target.value) || 0)
            }} />
        </div>
      </div>
      <div className="d-flex">
        <button onClick={calcularResultado} style={{ backgroundColor: '#e0e8f3', color: '#3984ee' }} className="btn btn-primary col-8 border-1 rounded me-1  p-1">Calcular</button>
        <button onClick={limparEntrada} className="btn btn-danger col-3 border rounded card-header p-1">Limpar</button>
      </div>
    </div>
  )
}

export default CapturaDados;
