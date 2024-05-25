import React from 'react'
import moi from "../assets/img/portrait.webp"
import Transition from '../utils/Transition'

const About = () => {
    return (
        <main className="main-about">
            <div className="about-container">
                <section className="about-me">
                    <h1 className="hello">Bonjour!</h1>
                    <h2 className='name'>Je suis Alexis</h2>
                    <p className="description">
                        <strong>Développeur web</strong> à la recherche d'une entreprise. Je me suis formé en parallèle de mon travail pendant un an, puis j'ai suivi une formation d'intégrateur web de 9 mois avec OpenClassrooms. Je souhaiterai maintenant faire une formation en alternance afin d'acquérir une expérience professionnelle, de découvrir le travail en équipe et de continuer à apprendre et à grandir dans ce domaine qui me passionne et m'anime.
                    </p>
                </section>
                <div className="cv-container">
                    <a href="https://delporte-alexis-cv.vercel.app/" target='_blank' title='Mon CV' className='cv-link'>
                        <i className="fa-solid fa-file"></i>
                        Mon CV
                    </a>
                </div>
            </div>
            <div className="avatar">
                <img src={moi} alt="Image d'Alexis Delporte" />
            </div>
        </main>
    )
}

export default Transition(About)

