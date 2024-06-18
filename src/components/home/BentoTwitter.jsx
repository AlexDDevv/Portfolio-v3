import React from 'react'

export default function BentoTwitter({ name, avatar, profil, pseudo, link, icon, title, tweet }) {
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
                    <span className={icon} aria-hidden="true"></span>
                    <span className="sr-only">Logo du réseau social {title}</span>
                </div>
            </div>
            <div className="twitter-content">
                <p className='tweet'>{tweet}</p>
            </div>
            <button className="redirect-social">
                <a href={link} target='blank' className="social-link">Voir mon {title}</a>
            </button>
        </div>
    )
}
