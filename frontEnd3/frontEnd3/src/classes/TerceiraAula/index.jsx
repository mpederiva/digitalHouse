import './style.scss'
import batataGif from './../../assets/images/batata.gif'

export function TerceiraAula() {

    const componentsFinded = [
        { name: 'Component Card', description: 'teste', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name: 'Component Card 2', description: 'teste 2', image: 'http://pa1.narvii.com/6203/b19ab0278cb42d6c11e6ac6c3c4f2824dc593def_00.gif' },
        { name: 'Component Card 3', description: 'teste 3', image: '' },
        { name: 'Component Card 4 ', description: 'teste 4', image: '' },
        { name: 'Component Card 5', description: 'teste 5', image: '' },
    ]

    //Se quiser add só 1 info, posso identificar dentro do return ex: components[0].name

    return (  //tudo o que fica aqui dentro é html e posso colocar JS se eu puser entre{}. O nome disso é interpolação
        <main>
            <h1>Lista de componentes encontrados no sistema</h1>
            <ul>
                {
                    componentsFinded.map(component => (
                        <li>
                            <img src={component.image} />
                            <h1>{component.name}</h1>
                            <p>{component.description}</p>
                        </li>
                    ))
                }
            </ul>
        </main>
    )
}