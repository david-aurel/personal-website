import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Nav from './nav'
import '../utils/fontawesome.js'
import Transition from '../components/transition'

const Layout = ({ children, location }) => {
    const [initSlider, setInitSlider] = useState('')

    useEffect(() => {
        setInitSlider(location.pathname.split('/')[1])
    }, [location.pathname])

    return (
        <>
            <header>
                <Nav initSlider={initSlider} />
            </header>
            <Transition location={location}>
                <main>{children}</main>
            </Transition>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
