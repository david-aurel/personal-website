import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'

const Nav = ({ initSlider }) => {
    const [sliderState, setSliderState] = useState('')
    const [hamburgerState, setHamburgerState] = useState(false)
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        initSlider === ''
            ? setSliderState('slider-about')
            : setSliderState(`slider-${initSlider}`)
    }, [initSlider])

    const toggleHamburger = () => {
        setHamburgerState(!hamburgerState)
        setAnimation(!animation)
    }

    const nav = ['about me', 'portfolio', 'blog', 'contact']
    const navItems = nav.map((item, i) => {
        const minItem = item.split(' ')[0]
        const upperCaseItem = item.charAt(0).toUpperCase() + item.slice(1)
        return (
            <Link
                key={i}
                to={`/${minItem}`}
                onClick={() => {
                    setSliderState(`slider-${minItem}`)
                    setHamburgerState(false)
                }}
            >
                {upperCaseItem}
            </Link>
        )
    })

    return (
        <nav className={hamburgerState ? 'expand' : ''}>
            <button
                className={`hamburger ${hamburgerState ? 'on' : ''}`}
                onClick={() => {
                    toggleHamburger()
                }}
                tabIndex="0"
                title="toggle navbar"
                aria-label="toggle navbar"
                animation={animation ? 1 : 0}
            />

            <div className="navItems">
                <div className={`slider ${sliderState}`} />
                {navItems}
            </div>
        </nav>
    )
}

export default Nav
