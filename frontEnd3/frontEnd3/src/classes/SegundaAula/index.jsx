import './style.scss' 
//se eu coloco import styles from './style.module.scss' , evito confusão no estilo, para não ficar generalizado
//mas no className em name ficaria <main className={styles['segunda-aula-main']}>

export function SegundaAula() {
    return (
        <main className='segunda-aula-main'>
            <h1>Segunda Aula</h1>
            <h2> Projeto escolhido: Globo</h2>
            <ul>
                <li>
                    <h1>Header section</h1>
                    <p>Main menu</p>
                    <p>Logo</p>
                    <p>Auxiliary menu</p>
                </li>
                <li>
                    <h3>Product links</h3>
                    <p>g1</p>
                    <p>ge</p>
                    <p>gshow</p>
                    <p>globoplay</p>
                    <p>gshow</p>
                    <p>quem</p>
                    <p>receitas</p>
                    <p>giga gloob</p>
                </li>
                <li>
                    <h3>Highlight</h3>
                    <p>banner home container</p>
                    <p>headline</p>
                    <p>headline bullets</p>
                    <p>posts</p>
                </li>
                <li>
                    <h3>Tópicos do jornal</h3>
                    <p>Menu interno</p>
                    <p>Conteúdo do tópico</p>
                    <p>ver mais</p>
                </li>
                <li>
                    <h1>Footer</h1>
                    <p>loco</p>
                    <p>Copyright</p>
                </li>
            </ul>
        </main>
    )
}