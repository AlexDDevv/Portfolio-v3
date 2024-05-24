import React from 'react'
import CarrouselImg from "./CarrouselImg"
import CarrouselInput from './CarrouselInput'

export default function ProjectCarrousel({ img, title, index, onChange }) {
    return (
        <div className='carrousel'>
            <div className="carrousel-img-container">
                {img.map((img, idx) => (
                    index === idx && (
                        <CarrouselImg
                            key={idx}
                            img={img}
                            title={title}
                            index={index}
                            display={index === idx ? "display" : "hide"}
                        />
                    )
                ))}
            </div>
            <div className="btn-carrousel">
                {img.map((_, idx) => (
                    <CarrouselInput
                        key={idx}
                        btn={`radio-${idx}`}
                        checked={index === idx}
                        onChange={() => onChange(idx)}
                    />
                ))}
            </div>
        </div>
    )
}
