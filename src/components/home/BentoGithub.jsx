import React from 'react'
import GithubCarrousel from './GithubCarrousel'

export default function BentoGithub() {
    return (
        <div className='bento-item github'>
            <div className="github-content">
                <GithubCarrousel />
                <div className="github-link">
                    <a href="https://github.com/AlexDDevv" target='_blank'>
                        Voir plus de projets
                        <span className="fa-brands fa-github" aria-hidden="true"></span>
                        <span className="sr-only">Lien vers mon profil Github</span>
                    </a>
                </div>
            </div>
        </div>
    )
}
