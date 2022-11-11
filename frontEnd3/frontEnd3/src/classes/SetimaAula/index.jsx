import { useState } from 'react'
import './style.scss'

export function SetimaAula(){

    // let contador = 0
    const [contador, setContador] = useState(0)
    const [temaEscuro, setTemaEscuro] = useState(false)

    function somarNumero(numero){
        setContador(contador + numero)
    }

    function mudarTema() {
        setTemaEscuro(!temaEscuro)
    }

    return(
        <main className={`setima-aula-component ${temaEscuro ? 'dark-theme' : ''}`}>
            <h1>Contador</h1>
            <button onClick={() => mudarTema()}>Mudar tema</button>
            <button onClick={() => somarNumero(2)}>Adicionar + 2</button>
            <span>Número atual: {contador}</span>
        </main>
    )
}