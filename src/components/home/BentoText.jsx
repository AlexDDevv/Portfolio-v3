import React from 'react';
import { Link } from "react-router-dom"

export default function BentoText({ name, title, subtitle, events }) {
    return (
        <div className={`bento-item ${name}`}>
            <div className="titles">
                {name === "presentation" ? (
                    <h1 className='title'><span className='bolder'>Alexis Delporte -</span> {title}</h1>
                ) : (
                    <h2 className="title">{title}</h2>
                )}
                {name === "presentation" ? (
                    <h2 className="subtitle">{subtitle}</h2>
                ) : (
                    <h3 className="subtitle">{subtitle}</h3>
                )}
            </div>
            <div className="content">
                {events && Array.isArray(events) && (
                    typeof events[0] === 'object' ? (
                        events.map((event, i) => (
                            <p className='text-bento' key={`${name}-${i}`}>
                                <span className='span-bento'>
                                    {event.date}
                                </span>
                                {event.content}
                            </p>
                        ))
                    ) : (
                        events.map((event, i) => (
                            <div className='adventure-content' key={`${name}-${i}`}>
                                <p className='text-bento'>
                                    {event}
                                </p>
                                <i className="fa-solid fa-down-long"></i>
                            </div>
                        ))
                    )
                )}
            </div>
            <Link to={"/about"} title='About me' className='redirection'>
                <i className="fa-solid fa-square-arrow-up-right"></i>
            </Link>
        </div>
    );
}
