import React from 'react'

export default function ContactBtn({ link, contact }) {
    return (
        <button className='contact-btn'>
            <a href={link} target='_blank'>{contact}</a>
        </button>
    )
}
