import React from 'react'
import axios from 'axios'
import { Link } from 'gatsby'
import PageTransition from 'gatsby-plugin-page-transitions'

import SEO from '../components/seo'
import Contact from '../components/contact'

const contactPage = ({ data }) => (
    <PageTransition>
        <SEO title="Contact" />
        <Contact />
    </PageTransition>
)

export default contactPage
