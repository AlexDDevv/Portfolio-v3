import React, { useState } from 'react'
import { copyEmail } from '../../utils/copyEmail'
import ContactBtn from './ContactBtn'
import EmailBtn from '../EmailBtn'
import gridData from "../../data/gridData.json"

export default function BentoContact() {
    const [copied, setCopied] = useState(false)

    return (
        <div className={`bento-item contactBento`}>
            <h1 className='title'>Alexis Delporte - développeur web</h1>
            <div className="separate-bar"></div>
            <h2 className="subtitle">Recherche une alternance pour une formation JS d'une durée de 15 mois.</h2>
            <div className="content">
                {gridData.btn.map(btn => (
                    <ContactBtn
                        key={btn.id}
                        link={btn.link}
                        contact={btn.contact}
                    />
                ))}
                <EmailBtn
                    copyEmail={() => copyEmail(copied, setCopied)}
                    copied={copied}
                />
            </div>
        </div>
    )
}
