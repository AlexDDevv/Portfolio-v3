import React from 'react'

export default function CarrouselImg({ img, title }) {
    return (
        <img
            src={img}
            alt={`${title} presentation`}
            className="carrousel-img"
        />
    )
}
