import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import { useState } from 'react';

const App = () => {
  const [resultado, setResultado] = useState({
    valorFinalAcumulado: 0,
    totalInvestido: 0,
    jurosAcumulados: 0,
    aportes: 0,
    rentabilidade: 0
  })

  return (
    <div className='container mt-2 mb-2'>
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <h5>Hello, Investimentos</h5>
              <h6 className="text-muted">Descubra quanto seu dinheiro pode render com juros compostos</h6>

              <CapturaDados prop={setResultado} />
              <ExibeDados
                valorFinalAcumulado={resultado.valorFinalAcumulado}
                totalInvestido={resultado.totalInvestido}
                jurosAcumulados={resultado.jurosAcumulados}
                aportes={resultado.aportes}
                rentabilidade={resultado.rentabilidade} 
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
