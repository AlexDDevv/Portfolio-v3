import React from 'react'
import desk from "../assets/img/contactImg.webp"
import Transition from '../utils/Transition'

const Contact = () => {
    const msgAppear = () => {
        const msg = document.querySelector(".copy-msg");
        if (msg) {
            msg.classList.add("msg-appear");
            setTimeout(() => {
                msg.classList.remove("msg-appear");
            }, 1000);
        }
    }

    const copyEmail = () => {
        const email = document.querySelector(".email").textContent;
        navigator.clipboard.writeText(email).then(() => {
            const msg = document.querySelector(".copy-msg");
            msgAppear();
            if (msg) {
                msg.textContent = "Copiée!";
            }
        })
    };

    return (
        <main className="main-contact">
            <section className="contact-me">
                <h1>Me contacter</h1>
                <p><strong>À l'écoute</strong> de toutes les opportunités qui peuvent se présenter à moi, alors si mon profil vous semble intéressant, vous pouvez toujours me contacter par mes différents réseaux sociaux ou par email!</p>
                <button className='btn-copy' onClick={copyEmail}>
                    <span className="email">alexddevs@gmail.com</span>
                    <span className="fa-regular fa-copy" aria-hidden="true"></span>
                    <span className="sr-only">Copier l'adresse email</span>
                </button>
                <span className="copy-msg">Copiée?</span>
            </section>
            <div className="contact-img">
                <img src={desk} alt="Un bureau avec un ordinateur portable, un café et de quoi écrire." />
            </div>
        </main>
    )
}

export default Transition(Contact)

