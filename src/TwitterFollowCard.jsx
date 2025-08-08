import { useState } from 'react' 

export function TwitterFollowCard ({children, userName = 'unknown', initialIsFollowing}) 
{  
    //constants
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing) 

    const text = isFollowing ? 'Following' : 'Follow'
    const buttonClassName = isFollowing ? 'tw-follow-button is-following' : 'tw-follow-button'
    
    //functions
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    //block to render
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
                <button className={buttonClassName} onClick={handleClick}>
                    <span className='tw-FollowCard-text'>
                        {text}
                    </span>
                    <span className='tw-FollowCard-stopFollow'>
                        Dejar de Seguir
                    </span>
                </button>
            </aside>
       </article>
    )
}