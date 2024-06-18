import React from 'react'

export default function EmailBtn({ copyEmail, copied }) {
    return (
        <div className="email-container">
            <button className='btn-copy' onClick={copyEmail}>
                <span className="email">alexddevs@gmail.com</span>
                <span className={copied ? "fa-solid fa-check" : "fa-regular fa-copy"} aria-hidden="true"></span>
                <span className="sr-only">Copier l'adresse email</span>
            </button>
            {copied && (
                <span className={copied ? "copy-msg msg-appear" : "copy-msg"}>Copiée!</span>
            )}
        </div>
    )
}
