import './style.scss'

export function PrimeiroCheckpointCard(props) {

    function adicionarCor() {
        console.log(props.corData)
    }

    return (

        <div className="primeiro-checkpoint-card-component">
            <img src={props.corData.picture} />
            <div className="card-body">
                <h1>{props.corData.name}</h1>
                <span>{props.corData.hexadecimal}</span>
            </div>
            <button onClick={adicionarCor}>Comprar</button>
        </div>
    )
}