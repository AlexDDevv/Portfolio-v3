import React from 'react'
import gridData from "../data/gridData.json"
import BentoItem from '../components/home/BentoItem'
import Transition from '../utils/Transition'

const Home = () => {
    return (
        <main className='grid-container'>
            <>
                {gridData.text.map(item => (
                    <BentoItem
                        key={item.id}
                        type={"text"}
                        item={item}
                    />
                ))}
                {gridData.app.map(item => (
                    <BentoItem
                        key={item.id}
                        type={"app"}
                        item={item}
                    />
                ))}
                {gridData.social.map(item => (
                    <BentoItem
                        key={item.id}
                        type={"social"}
                        item={item}
                    />
                ))}
            </>
        </main>
    )
}

export default Transition(Home)
