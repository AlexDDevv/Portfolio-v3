import React from 'react'
import gridData from "../data/gridData.json"
import BentoContact from '../components/home/BentoContact'
import BentoGithub from '../components/home/BentoGithub'
import BentoSkills from '../components/home/BentoSkills'
import BentoText from "../components/home/BentoText"
import BentoApp from '../components/home/BentoApp'
import BentoTwitter from '../components/home/BentoTwitter'
import Transition from '../utils/Transition'

const Home = () => {
    return (
        <main className='grid-container'>
            <>
                <BentoContact />
                <BentoGithub />
                <BentoSkills />
                <BentoText />
                {gridData.app.map(app => (
                    <BentoApp
                        key={app.id}
                        name={app.name}
                        title={app.title}
                        subtitle={app.subtitle}
                        cover={app.cover}
                    />
                ))}
                {gridData.twitter.map(twitter => (
                    <BentoTwitter
                        key={twitter.id}
                        name={twitter.name}
                        avatar={twitter.avatar}
                        profil={twitter.profil}
                        pseudo={twitter.pseudo}
                        link={twitter.link}
                        icon={twitter.icon}
                        title={twitter.title}
                        cover={twitter.cover}
                        tweet={twitter.tweet}
                    />
                ))}
            </>
        </main>
    )
}

export default Transition(Home)
