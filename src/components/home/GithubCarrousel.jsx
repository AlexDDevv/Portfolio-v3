import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import gridData from "../../data/gridData.json"

export default function GithubCarrousel() {
    return (
        <Carousel className="git-carrousel" showThumbs={false} showStatus={false} showIndicators={false} showArrows={false} autoPlay={true} infiniteLoop={true} stopOnHover={false}>
            {gridData.github.map(img => (
                img.cover.map((cover, i) => (
                    <img 
                        key={i}
                        src={cover} 
                        alt="Présentation de différents projets sur mon profil Github" 
                        className="github-preview" 
                        loading='lazy'
                    />
                ))
            ))}
        </Carousel>
    )
}