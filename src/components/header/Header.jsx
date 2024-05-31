import React from 'react'
import data from "../../data/data.json"
import Logo from './Logo'
import LinkNav from "./LinkNav"
import DarkMode from '../DarkMode'

export default function Header() {
    return (
        <header className='header'>
            <div className='logo'>
                <Logo />
            </div>
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
            <DarkMode />
        </header>
    )
}
