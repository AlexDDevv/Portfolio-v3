import React from 'react';

export default function BentoText({ name, title, subtitle, events }) {
    return (
        <div className={`bento-item ${name}`}>
            <div className="titles">
                <h2 className="title">{title}</h2>
                <h3 className="subtitle">{subtitle}</h3>
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
                            <p className='text-bento' key={`${name}-${i}`}>
                                {event}
                            </p>
                        ))
                    )
                )}
            </div>
        </div>
    );
}
