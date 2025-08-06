import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () 
{
    return (
        <section className='App'> {/*hace lo mismo que react fragment*/}
            <TwitterFollowCard username="elonmusk" name="jose manuel"/>
            <TwitterFollowCard username="elonmusk" name="jose manuel"/>
            <TwitterFollowCard username="elonmusk" name="jose manuel"/>
        </section>
    )
}