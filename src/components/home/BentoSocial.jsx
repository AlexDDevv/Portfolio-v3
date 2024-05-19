import React from 'react'

export default function BentoSocial({ name, avatar, profil, pseudo, link, icon, title, cover, tweet }) {
    return (
        <div className={`bento-item ${name}`}>
            <div className="profil-container">
                <div className="profil">
                    <div className="avatar">
                        <img src={avatar} alt={`${title} profil picture`} />
                    </div>
                    <div className="name">
                        <h2 className="title-profil">{profil}</h2>
                        <h3 className="title-pseudo">{pseudo}</h3>
                    </div>
                </div>
                <div className="social-link">
                    <i className={icon}></i>
                </div>
            </div>
            <div className="social-content">
                {cover ? (
                    <img 
                        src={cover} 
                        alt={`${title} profil preview`}
                        className={`${name}-preview`}
                    />
                ) : (
                    <p className='tweet'>{tweet}</p>
                )}
            </div>
            <button className="redirect-social">
                <a href={link} target='blank' title={title} className="social-link">Visit my {title}</a>
            </button>
        </div>
    )
}
