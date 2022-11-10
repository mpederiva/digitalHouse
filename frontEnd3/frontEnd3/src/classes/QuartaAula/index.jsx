import './style.scss';
import moonImage from './../../assets/images/moon.jpg'
import batataGif from './../../assets/images/batata.gif'
import sunImage from './../../assets/images/sun.jpg'

export function QuartaAula() {

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
        <div className='quarta-aula-component'> {/* o nome da classe deve servir só para esse, daí ñ bagunça o projeto*/}
            <h1 className='main-title'> Componentes identificados</h1>
            <ul className='components-finded'>
                {
                    componentsFinded.map( 
                        component => {
                            return (
                                <li key={component.id}>
                                    <img src={component.image} />
                                    <h1>{component.title}</h1>
                                    <p>{component.text}</p>
                                </li>
                            )
                        }
                    )
                }
            </ul>
        </div>
    )
}