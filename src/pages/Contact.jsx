import React, { useState } from 'react'
import { copyEmail } from '../utils/copyEmail'
import EmailBtn from '../components/EmailBtn'
import desk from "../assets/img/contactImg.webp"
import Transition from '../utils/Transition'

const Contact = () => {
    const [copied, setCopied] = useState(false)

    return (
        <main className="main-contact">
            <section className="contact-me">
                <h1>Me contacter</h1>
                <p><strong>À l'écoute</strong> de toutes les opportunités qui peuvent se présenter à moi, alors si mon profil vous semble intéressant, vous pouvez toujours me contacter par mes différents réseaux sociaux ou par email!</p>
                <EmailBtn
                    copyEmail={() => copyEmail(copied, setCopied)}
                    copied={copied}
                />
            </section>
            <div className="contact-img">
                <img src={desk} alt="Un bureau avec un ordinateur portable, un café et de quoi écrire." />
            </div>
        </main>
    )
}

export default Transition(Contact)

