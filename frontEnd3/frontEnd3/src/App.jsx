import { Login } from './pages/Login'
import { SegundaAula } from './classes/SegundaAula'
import { TerceiraAula } from './classes/TerceiraAula'

function App() {

  return (
    <>
    {/* componente: trechos de código que podem ser reutilizados em outros pontos*/}
    {/*precisamos criar visualmente para a gente oq é pág e o q é componente, pq no React é tudo igual*/}
    {/* <> // isso é o fragment. Uso qnd tenho 2 componentes que quero retornar, mas não posso retornar os 2 de 1x */}
    {/* <Login /> // nome de component sempre em maiúsculo */}
    {/* <SegundaAula /> */}
    {/*  </> */}
    <TerceiraAula /> {/*para as aulas, não usaremos fragment. Vamos comentar o que não for principal.*/}
    </>
  )
}

export default App
