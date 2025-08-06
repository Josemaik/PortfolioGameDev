import './App.css'

export function TwitterFollowCard ({username, name, isfollowing}) 
{
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                className='tw-follow-card-avatar'
                alt="React logo" 
                src={`https://unavatar.io/${username}`}
                 />
                <div>
                    <strong>{name}</strong>
                    <span>@{username}</span>
                </div>
            </header>
            <aside>
                <button className='tw-follow-button'>
                    Follow
                </button>
            </aside>
       </article>
    )
}