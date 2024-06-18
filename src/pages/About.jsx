import React from 'react'
import moi from "../assets/img/portrait.webp"
import Transition from '../utils/Transition'

const About = () => {
    return (
        <main className="main-about">
            <div className="about-container">
                <section className="about-me">
                    <h1 className='name'>Je suis Alexis</h1>
                    <p className="description">
                        <strong>Développeur web</strong> en recherche d'entreprises pour réaliser une formation JS d'une durée de 15 mois avec la Wild Code School. Le rythme sera d'une semaine de formation et trois semaines d'entreprises.
                    </p>
                    <p className="description">
                        Souhaitant acquérir une expérience professionnelle, travailler en équipe et continuer à apprendre et à grandir dans ce domaine qui me passionne et m'anime, l'alternance est une suite logique à mon parcours d'autodidacte et d'intégrateur web avec OpenClassrooms.
                    </p>
                </section>
                <a href="https://delporte-alexis-cv.vercel.app/" target='_blank' className='cv-link'>
                    <span className="fa-solid fa-file" aria-hidden="true"></span>
                    <span className="sr-only">Redirection vers mon CV en ligne</span>
                    Mon CV
                </a>
            </div>
            <div className="avatar">
                <img src={moi} alt="Image d'Alexis Delporte" />
            </div>
        </main>
    )
}

export default Transition(About)

