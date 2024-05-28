import React from 'react'
import CarrouselImg from "./CarrouselImg"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function ProjectCarrousel({ img, title }) {
    return (
        <Carousel className="carrousel" showThumbs={false} showStatus={false} useKeyboardArrows={true}>
            {img.map((img, idx) => (
                <CarrouselImg
                    key={idx}
                    img={img}
                    title={title}
                />
            ))}
        </Carousel>
    )
}