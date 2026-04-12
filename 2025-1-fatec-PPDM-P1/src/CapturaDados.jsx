import { useState } from 'react';

const CapturaDados = () => {
const [valorInicial, setValorInicial] = useState('')
const [aporteMensal, setAporteMensal] = useState('')
const [taxaJuros, setTaxaJuros] = useState('')
const [periodo, setPeriodo] = useState('')

const limpar = () => {
    setValorInicial('');
    setAporteMensal('');
    setTaxaJuros('');
    setPeriodo('');
  };
  
return (
        <>
    <div className="d-flex">
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Valor inicial (R$)</p>
                <input type="text" className="border rounded card-header p-1"
                  value={valorInicial} onChange={(e) => setValorInicial(e.target.value)} />
              </div>
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Aporte mensal (R$)</p>
                <input type="text" className="border rounded card-header p-1" 
                  value={aporteMensal} onChange={(e) => setAporteMensal(e.target.value)} />
              </div>
            </div>
            <div className="d-flex">
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Taxa de juros (% ao mês)</p>
                <input type="text" className="border rounded card-header p-1" 
                  value={taxaJuros} onChange={(e) => setTaxaJuros(e.target.value)} />
              </div>
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Periodo (meses)</p>
                <input type="text" className="border rounded card-header p-1" 
                  value={periodo} onChange={(e) => setPeriodo(e.target.value)} />
              </div>
            </div>

            <div className="d-flex">
              <button style={{ backgroundColor: '#e0e8f3', color: '#3984ee'}} className="btn btn-primary col-8 border-1 rounded me-1  p-1"> Calcular</button>
              <button onClick={limpar} className="btn btn-danger col-3 border rounded card-header p-1">Limpar</button>
            </div>
        </>
    )
}

export default CapturaDados;