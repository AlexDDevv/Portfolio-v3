import React from 'react'
import react from "/icons/react.png"
import typescript from "/icons/typescript.png"
import tailwind from "/icons/tailwind.png"
import nextjs from "/icons/nextjs.png"
import postgresql from "/icons/postgresql.png"
import figma from "/icons/figma.png"

export default function CircleSkills() {
    return (
        <>
            <div className="circle little">
                <div className="img-container">
                    <img src={react} alt="Logo de Reactjs" />
                    <img src={typescript} alt="Logo de Typescript" />
                </div>
            </div>
            <div className="circle medium">
                <div className="img-container">
                    <img src={tailwind} alt="Logo de Tailwind" />
                    <img src={nextjs} alt="Logo de Nextjs" />
                </div>
            </div>
            <div className="circle big">
                <div className="img-container">
                    <img src={postgresql} alt="Logo de PostgreSQL" />
                    <img src={figma} alt="Logo de Figma" />
                </div>
            </div>
        </>
    )
}
