import React from 'react'
import moi from "../assets/img/portrait.webp"
import Transition from '../utils/Transition'

const About = () => {
    return (
        <main className="main-about">
            <div className="about-container">
                <section className="about-me">
                    <h1 className="hello">Hi there!</h1>
                    <h2 className='name'>I'm Alexis</h2>
                    <p className="description">
                        <strong>Web developer</strong> looking for companies. After a year of self-taught training alongside my job (pharmacy assistant), I took a 9-month web integrator course with OpenClassroom. An apprenticeship would give me the opportunity to gain professional experience, discover teamwork, develop my collaborative skills, perfect everything I've learnt and learn new technologies, so that I can grow in this exciting field that I'm passionate about.
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

