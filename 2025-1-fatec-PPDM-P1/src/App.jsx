const App = () => {

return (
  <div className='container mt-2 mb-2'>
    <div className="row-justfy-content-center">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h4>Hello, Investimentos</h4>
            <p className="text-muted">Descubra quanto seu dinheiro pode render com juros compostos</p>

            <div className="d-flex">
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Valor inicial (R$)</p>
                <input type="text" className="border rounded card-header p-1" />
              </div>
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Aporte mensal (R$)</p>
                <input type="text" className="border rounded card-header p-1" />
              </div>
            </div>
            <div className="d-flex">
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Taxa de juros (% ao mês)</p>
                <input type="text" className="border rounded card-header p-1" />
              </div>
              <div className="col-6 mb-2">
                <p className="text-muted small mb-0">Periodo (meses)</p>
                <input type="text" className="border rounded card-header p-1" />
              </div>
            </div>

            <div className="d-flex">
              <button style={{ backgroundColor: '#e0e8f3', color: '#3984ee'}} className="btn btn-primary col-8 border-1 rounded me-1  p-1"> Calcular</button>
              <button className="btn btn-danger col-3 border rounded card-header p-1">Limpar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)}

export default App