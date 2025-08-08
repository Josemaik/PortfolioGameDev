import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () 
{
    // componente -> funcion que devuelve elemento const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@midudev</span> //elemento
    // const josema =  { parameters } -> { ...josema } rest operator
    const[name, setName] = useState('josema');

    console.log('render with name', name)   

    return (
        <section className='App'> {/*hace lo mismo que react fragment*/}
            <TwitterFollowCard userName={name} initialIsFollowing={true}>
                Jose Manuel
            </TwitterFollowCard>
            <TwitterFollowCard userName="elonmusk"> 
                Jose Manuel
            </TwitterFollowCard>

            <button onClick={() => setName('pedro')} >
                Cambio Nombre
            </button>
        </section>
    )
}