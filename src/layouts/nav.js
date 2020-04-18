import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const Nav = ({ initSlider }) => {
    const [sliderState, setSliderState] = useState('')
    const [hamburgerState, setHamburgerState] = useState(false)
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        initSlider === ''
            ? setSliderState('slider-portfolio')
            : setSliderState(`slider-${initSlider}`)
    }, [initSlider])

    const toggleHamburger = () => {
        setHamburgerState(!hamburgerState)
        setAnimation(!animation)
    }

    const nav = ['portfolio', 'blog', 'about me', 'contact']
    const navItems = nav.map((item, i) => {
        const minItem = item.split(' ')[0]
        const upperCaseItem = item.charAt(0).toUpperCase() + item.slice(1)
        return (
            <Link
                key={i}
                to={`/${minItem}`}
                onClick={() => {
                    setSliderState(`slider-${minItem}`)
                    toggleHamburger()
                }}
                tabIndex={hamburgerState ? 0 : -1}
            >
                {upperCaseItem}
            </Link>
        )
    })

    return (
        <nav className={hamburgerState ? 'expand' : ''}>
            <div className={`slider ${sliderState}`}></div>

            <button
                className={`hamburger ${hamburgerState ? 'on' : ''}`}
                onClick={() => {
                    toggleHamburger()
                }}
                tabIndex="0"
                animation={animation ? 1 : 0}
            />

            <div className="navItems">{navItems}</div>
        </nav>
    )
}

export default Nav
