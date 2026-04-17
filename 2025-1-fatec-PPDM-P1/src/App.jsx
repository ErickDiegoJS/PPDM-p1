import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import Historico from './Historico.jsx'
import { useState } from 'react';

const App = () => {
  const [valorInicial, setValorInicial] = useState(0)
  const [aporteMensal, setAporteMensal] = useState(0)
  const [taxaJuros, setTaxaJuros] = useState(0)
  const [periodo, setPeriodo] = useState(0)

  const [resultado, setResultado] = useState({
    valorFinalAcumulado: 0,
    totalInvestido: 0,
    jurosAcumulados: 0,
    aportes: 0,
    rentabilidade: 0
  })
  const [historico, setHistorico] = useState([])

  const calcularResultado = () => {
    const vI = valorInicial
    const aM = aporteMensal
    const tJ = taxaJuros
    const p = periodo

    const valorFinalAcumulado = vI * (1 + tJ) ** p + aM * (((1 + tJ) ** p - 1) / tJ)

    setResultado({
      valorFinalAcumulado: valorFinalAcumulado,
      totalInvestido: vI + (aM * p),
      jurosAcumulados: (vI * (1 + tJ) ** p + aM * (((1 + tJ) ** p - 1) / tJ)) - (vI + aM * p),
      aportes: p,
      rentabilidade: ((vI * (1 + tJ) ** p + aM * (((1 + tJ) ** p - 1) / tJ)) - (vI + aM * p)) / (vI + aM * p) * 100
    })

    setHistorico((historico) => [...historico, {
      valorFinalAcumulado: valorFinalAcumulado,
      data: new Date().toLocaleString('pt-br', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }])
  }

  return (
    <div className='container mt-2 mb-2'>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Hello, Investimentos</h5>
              <h6 className="text-muted">Descubra quanto seu dinheiro pode render com juros compostos</h6>

              <CapturaDados
                setValorInicial={setValorInicial}
                setAporteMensal={setAporteMensal}
                setTaxaJuros={setTaxaJuros}
                setPeriodo={setPeriodo}
                calcularResultado={calcularResultado}
              />

              <ExibeDados
                resultado={resultado}
              />

              <div className="row">
                <div className="col-9">
                  <h4>Histórico de simulações</h4>
                </div>
                <div className="col-3">
                  <p className='text-muted text-end'>{historico.length} simulações</p>
                </div>
              </div>
              <Historico
                historico={historico}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
