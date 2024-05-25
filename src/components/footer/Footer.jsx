import React from 'react'
import data from "../../data/data.json"
import SocialLink from "../socialMedia/SocialLink"

export default function Footer() {
    return (
        <footer className="footer">
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
        </footer>
    )
}
