import React from 'react'
import LinkNav from "./LinkNav"
import SocialLink from "../socialMedia/SocialLink"
import data from "../../data/data.json"

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'></div>
            <nav className='nav-bar'>
                <ul className="nav-list">
                    {data.navlink.map(item => (
                        <LinkNav
                            key={item.content}
                            redirection={item.page}
                            content={item.content}
                        />
                    ))}
                </ul>
            </nav>
            <ul className="social-list">
                {data.socialLink.map(item => (
                    <SocialLink
                        key={item.title}
                        link={item.link}
                        title={item.title}
                        icon={item.icon}
                    />
                ))}
            </ul>
        </header>
    )
}
