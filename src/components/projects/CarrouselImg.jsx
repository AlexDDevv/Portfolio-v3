import React from 'react'
import { motion } from "framer-motion"

export default function CarrouselImg({ img, title, index, display }) {
    return (
        <motion.div
            className='carrousel-img-container'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <img
                src={img}
                alt={`${title} presentation n°${index}`}
                className={`carrousel-img ${display}`}
            />
        </motion.div>
    )
}
