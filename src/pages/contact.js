import React from 'react'
import SEO from '../components/seo'
import Contact from '../components/contact'

const contactPage = ({ data }) => (
    <>
        <SEO title="Contact" image="opengraph_default.png" />
        <Contact />
    </>
)

export default contactPage
