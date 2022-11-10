import './style.scss'
import moonImage from './../../assets/images/moon.jpg'
import batataGif from './../../assets/images/batata.gif'
import sunImage from './../../assets/images/sun.jpg'
import { QuintaAulaItem } from './../../components/QuintaAulaItem'

export function QuintaAula() {

    const componentsFinded = [
        {
            id: 1,
            title: 'Vídeo Component',
            image: moonImage,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        },
        {
            id: 2,
            title: 'Input Component',
            image: batataGif,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        },
        {
            id: 3,
            title: 'Button Component',
            image: sunImage,
            text: 'Lorem ipsum, dolor sit amet consectetur.'
        }
    ]

    return (
        <div className='quinta-aula-component'>

            <h1 className='main-title'>Componentes identificados</h1>
 
            {/* Jeito simples de passar conteúdo:
            <QuintaAulaItem 
            title='Primeiro Componente' // posso dar o nome q eu quiser em title, mas devo evitar nomes oficiais do html. O conteúdo pode ser alterado como quiser
            image= 'https://' /> */}

            <ul className='components-finded'>
                {
                    componentsFinded.map(
                        component => {
                            return (
                                <QuintaAulaItem 
                                key={component.id}
                                dado={component} />
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}