const ExibeDados = ({resultado}) => {
    return (
        <div style={{ backgroundColor: '#eeeeee' }} className="mt-2 rounded border">
            <div className="ps-3 pt-3">
                <p className="text-muted">Valor final acumulado</p>
                <h1 className="text-success">R$ {resultado.valorFinalAcumulado}</h1>
            </div>
            <hr className="ms-3 me-3" />
            <div className="ps-3 pe-3">
                <div className="d-flex">
                    <div className="col-6 mb-2">
                        <p className="text-muted">Total investido</p>
                        <h5>R$ {resultado.totalInvestido}</h5>
                    </div>
                    <div className="col-6 mb-2">
                        <p className="text-muted">Juros acumulados</p>
                        <h5>R$ {resultado.jurosAcumulados}</h5>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="col-6 mb-2">
                        <p className="text-muted">Nº de aportes</p>
                        <h5>{resultado.aportes}</h5>
                    </div>
                    <div className="col-6 mb-2">
                        <p className="text-muted">Rentabilidade</p>
                        <h5 className="text-success">+{resultado.rentabilidade}%</h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExibeDados
