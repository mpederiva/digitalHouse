export function QuintaAulaItem(props) {

    console.log(props)

    return (

        // jeito simples de passar conteúdo:
        //<h1>{props.title}</h1>

        <li key={props.dado.id}>
            <img src={props.dado.image} />
            <h1>{props.dado.title}</h1>
            <p>{props.dado.text}</p>
        </li>
    )
}