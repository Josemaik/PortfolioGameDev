import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () 
{
    // componente -> funcion que devuelve elemento const format = (userName) => `@${userName}`
    //const formattedUserName = <span>@midudev</span> //elemento
    
    return (
        <section className='App'> {/*hace lo mismo que react fragment*/}
            <TwitterFollowCard isFollowing={true} userName="midudev" name="Miguel Angel">
                Jose Manuel
            </TwitterFollowCard>
            <TwitterFollowCard isFollowing={false} userName="elonmusk"> 
                Jose Manuel
            </TwitterFollowCard>
        </section>
    )
}