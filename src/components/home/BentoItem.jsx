import React from 'react'
import BentoText from './BentoText'
import BentoApp from './BentoApp'
import BentoSocial from './BentoSocial'

export default function BentoItem({ type, item }) {
    switch (type) {
        case "text":
            return (
                <BentoText
                    key={item.id}
                    name={item.name}
                    title={item.title}
                    subtitle={item.subtitle}
                    events={item.events}
                />
            )
        case "app":
            return (
                <BentoApp
                    key={item.id}
                    name={item.name}
                    title={item.title}
                    subtitle={item.subtitle}
                    cover={item.cover}
                />
            )
        case "social":
            return (
                <BentoSocial
                    key={item.id}
                    name={item.name}
                    avatar={item.avatar}
                    profil={item.profil}
                    pseudo={item.pseudo}
                    link={item.link}
                    icon={item.icon}
                    title={item.title}
                    cover={item.cover}
                    tweet={item.tweet}
                />
            )
        default: return null
    }
}
