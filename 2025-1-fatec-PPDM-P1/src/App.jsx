import CapturaDados from './CapturaDados'

const App = () => {

return (
  <div className='container mt-2 mb-2'>
    <div className="row justify-content-center">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4>Hello, Investimentos</h4>
            <p className="text-muted">Descubra quanto seu dinheiro pode render com juros compostos</p>

            <CapturaDados />
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default App