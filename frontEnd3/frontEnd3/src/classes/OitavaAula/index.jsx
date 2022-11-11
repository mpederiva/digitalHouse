import { useState } from 'react'
import './style.scss'
import { OitavaAulaCardProduto } from "../../components/OitavaAulaCardProduto"

export function OitavaAula() {

    const [nomeProduto, setNomeProduto] = useState('')
    const [precoProduto, setPrecoProduto] = useState('')
    const [fotoProduto, setFotoProduto] = useState('')
    const [formularioErro, setFormularioErro] = useState(false)
    const [allProducts, setAllProducts] = useState([
        {
            id: 1,
            name: 'Xbox',
            price: '3.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_695945-MLB50098260025_052022-O.webp'
        },
        {
            id: 2,
            name: 'Playstation 5',
            price: '5.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_841787-MLA44484414455_012021-O.webp'
        },
        {
            id: 3,
            name: 'Switch',
            price: '2.000',
            picture: 'https://http2.mlstatic.com/D_NQ_NP_771705-MLA40692342174_022020-W.webp'
        }
    ])

    const newProduct = {
        // id: 4, quem especifica esse id é o backend!
        name: 'Playstation 4',
        price: '2.000',
        picture: 'https://http2.mlstatic.com/D_NQ_NP_798586-MLA40076060236_122019-W.webp'
    }

    function cadastrarProduto(event) {

        event.preventDefault()

        const novoProdutoCadastrado = {
            name: nomeProduto,
            price: precoProduto,
            picture: fotoProduto
        }

        if (nomeProduto === '' || precoProduto === '') {

            setFormularioErro(true)

        } else {

            setFormularioErro(false)

            setAllProducts([...allProducts, novoProdutoCadastrado])

            setNomeProduto('')
            precoProduto('')
            fotoProduto('')

        }

        console.log(opcao)
    }

    return (

        <main className="oitava-aula-component">

            <div className="tittle-wrapper">
                <h1>Produtos</h1>
                {/* <button onClick={addNewProduct}>Adicionar novo produto</button> */}
            </div>

            <form className={formularioErro ? 'form-error' : ''} onSubmit={event => cadastrarProduto(event)}>

                <div>
                    <label htmlFor="nomeProduto">Nome</label>
                    <input id="nomeProduto" type="text" value={nomeProduto} onChange={event => setNomeProduto(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="precoProduto">Preço</label>
                    <input id="precoProduto" type="text" value={precoProduto} onChange={event => setPrecoProduto(event.target.value)} />
                </div>

                <div>
                    <label htmlFor="fotoProduto">Foto</label>
                    <input id="fotoProduto" type="text" value={fotoProduto} onChange={event => setFotoProduto(event.target.value)} />
                </div>

                <button type='submit'>Cadastrar Produto</button>
                <button type='reset'>Limpar formulário</button>
            </form>

            {
                formularioErro ? (
                    <span>O seu formulário contem erros</span>
                ) : null
            }

            <section className='products'>
                {
                    allProducts.map(
                        product => {
                            return (
                                <OitavaAulaCardProduto
                                    productData={product}
                                />
                            )
                        }
                    )
                }
            </section>
        </main>
    )
}