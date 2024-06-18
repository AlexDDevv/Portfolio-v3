import React from 'react';
import gridData from "../../data/gridData.json"
import { Link } from "react-router-dom"

export default function BentoText() {
    return (
        <div className="bento-item adventure">
            <div className="titles">
                <h2 className="title">Mon aventure depuis deux ans</h2>
                <h3 className="subtitle">Quelques accomplissements 🎉</h3>
            </div>
            <div className="content">
                {gridData.text.map(event => (
                    event.events.map((p, i) => (
                        <div className='adventure-content' key={i}>
                            <p className='text-bento'>
                                {p}
                            </p>
                            <span className="fa-solid fa-down-long" aria-hidden="true"></span>
                            <span className="sr-only">Flèche de direction pour signaler un ordre d'évènements</span>
                        </div>
                    ))
                ))}
            </div>
            <Link to={"/about"} className='redirection'>
                <span className="fa-solid fa-square-arrow-up-right" aria-hidden="true"></span>
                <span className="sr-only">Redirection vers la page À propos</span>
            </Link>
        </div>
    );
}