import React from 'react'

export default function ({ name, title, subtitle, cover }) {
  return (
    <div className={`bento-item ${name}`}>
        <div className="titles">
            <h2 className="title">{title}</h2>
            <h3 className="subtitle">{subtitle}</h3>
        </div>
        <div className="cover">
            <img src={cover} alt={`Application ${title}`} />
        </div>
    </div>
  )
}
