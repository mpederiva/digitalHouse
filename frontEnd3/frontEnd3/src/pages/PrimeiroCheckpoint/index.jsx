// Aqui você irá escrever as suas funções de Validação, para verificar se o Formulário foi preenchido corretamente
import { useState } from 'react'
import './style.scss'
import { PrimeiroCheckpointCard } from "../../components/PrimeiroCheckpointCard"

export function PrimeiroCheckpoint() {
    // Aqui você irá criar os Estados para manipular os Inputs
    const [nomeCor, setNomeCor] = useState('')
    const [hexadecimalCor, setHexadecimalCor] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    const [allCores, setAllCores] = useState([
        {
            id: 1,
            name: 'Xbox',
            hexadecimalCor: '000000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            hexadecimalCor: 'ffffff',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
    ])

    const newCor = {
        name: 'Playstation 4',
        hexadecimalCor: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function cadastrarCor(event) {

        event.preventDefault()

        const novaCorCadastrada = {
            name: nomeCor,
            hexadecimal: hexadecimalCor,
        }

        if (nomeCor === '' || hexadecimalCor === '') {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setAllCores([...allCores, novaCorCadastrada])

            setNomeCor('')
            hexadecimalCor('')
        }

        console.log(opcao)
    }

    return (

        <main className="primeiro-checkpoint-component">

            <div className="tittle-wrapper">
                <h1>Cores</h1>
            </div>

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarCor(event)}>

                <div>
                    <label htmlFor="nomeCor">Nome da Cor</label>
                    <input id="nomeCor" type="text" value={nomeCor} onChange={event => setNomeCor(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="hexadecimalCor">Código Hexadecimal da Cor</label>
                    <input id="hexadecimalCor" type="text" value={hexadecimalCor} onChange={event => setHexadecimalCor(event.target.value)} />
                </div>

                <button type='submit'>Cadastrar Cor</button>
                <button type='reset'>Limpar formulário</button>
            </form>

            {
                formularioErro ? (
                    <span>O seu formulário contém erros</span>
                ) : null
            }

            <section className='cores'>
                {
                    allCores.map(
                        cor => {
                            return (
                                <PrimeiroCheckpointCard
                                    corData={cor}
                                />
                            )
                        }
                    )
                }
            </section>
        </main>
    )
}