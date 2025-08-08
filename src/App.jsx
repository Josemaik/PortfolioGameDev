import { useState } from 'react'
import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'


 const users = [
    {
        userName: 'midudev',
        name: 'Miguel Angel',
        initialIsFollowing: true
    },
    {
        userName: 'angela',
        name: 'Miguel Angel',
        initialIsFollowing: false
    },
    {
        userName: 'josema',
        name: 'Jose Manuel',
        initialIsFollowing: false
    }
]


export function App () 
{
    // componente -> funcion que devuelve elemento const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@midudev</span> //elemento
    // const josema =  { parameters } -> { ...josema } rest operator
    const[name, setName] = useState('josema');

    console.log('render with name', name)   

    return (
        <section className='App'>
           { /*bloque renderizable*/
                users.map(({userName, name, initialIsFollowing }) => (
                        <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={initialIsFollowing}
                        >
                            {name}
                        </TwitterFollowCard>
                ))
            }
        </section>
    )
}