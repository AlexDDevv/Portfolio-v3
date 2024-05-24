import React from 'react'

export default function CarrouselImg({ img, title, index, display }) {
    return (
        <img
            src={img}
            alt={`${title} presentation n°${index}`}
            className={`carrousel-img ${display}`}
        />
    )
}
