import React, { useEffect, useState } from 'react';

export default function DarkMode() {
    const [theme, setTheme] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

    const applyTheme = (theme) => {
        document.querySelector("body").setAttribute("data-theme", theme);
    };

    useEffect(() => {
        applyTheme(theme);

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
            const newTheme = e.matches ? 'dark' : 'light';
            setTheme(newTheme);
            applyTheme(newTheme);
        };

        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, [theme]);

    const toggleTheme = (e) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        setTheme(newTheme);
        applyTheme(newTheme);
    };

    return (
        <div className='dark-mode'>
            <input 
                type="checkbox" 
                className='dark-mode-input' 
                id="darkModeToggle" 
                onChange={toggleTheme}
                checked={theme === 'dark'}
            />
            <label htmlFor="darkModeToggle" className='dark-mode-label'>
                <span className="fa-solid fa-sun sun"></span>
                <span className="fa-solid fa-moon moon"></span>
                <span className="sr-only">Changer la couleur du thème du site</span>
            </label>
        </div>
    );
}
