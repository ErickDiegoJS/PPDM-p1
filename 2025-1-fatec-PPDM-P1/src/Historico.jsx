const Historico = ({ historico }) => {
  let linhasHtml = historico.map(({valorFinalAcumulado, data}, index) => (
    <div className="row border-bottom py-2" key={index}>
      <div className="col-9">
        <p className="text-muted">{data}</p>
      </div>

      <div className="col-3 text-end">
        <strong>
          R$ {valorFinalAcumulado}
        </strong>
      </div>
    </div>
  ))

  return (
    <div className="card">
      <div className="card-header">
        <div className="row">
          <div className="col-9">
            <p className='text-muted'>Data</p>
          </div>
          <div className="col-3">
            <p className='text-muted text-end'>Valor final</p>
          </div>
        </div>
      </div>
      <div className="card-body">
        {linhasHtml}
      </div>
    </div>
  )
}

export default Historico;
