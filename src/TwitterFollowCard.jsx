import './App.css'

export function TwitterFollowCard ({children, userName = 'unknown', name, isFollowing}) 
{   
    return (
        <article className='tw-follow-card'>
            <header className='tw-follow-card-header'>
                <img 
                className='tw-follow-card-avatar'
                alt="React logo" 
                src={`https://unavatar.io/${userName}`}
                 />
                <div className="tw-follow-card-info">
                    <strong>{children}</strong>
                    <span className="tw-follow-card-infoUserName">@{userName}</span>
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