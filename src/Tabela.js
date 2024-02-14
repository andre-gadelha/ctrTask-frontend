function Tabela({arrTasks}){

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Prioridade</th>
                    <th>Selecionar</th>
                </tr>
            </thead>

            <tbody>
                {
                    arrTasks.map((obj, indice) =>(
                        <tr key={indice}>
                            <td>{obj.id}</td>
                            <td>{obj.name}</td>
                            <td>{obj.prioridade}</td>
                            <td><button className="btn btn-success">Selecionar</button></td>
                        </tr>
                    ))
                }
            </tbody>

        </table>
    )

}

export default Tabela;