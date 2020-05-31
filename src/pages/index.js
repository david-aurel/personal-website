import React, { useEffect } from 'react'
import { navigate } from 'gatsby'
import SEO from '../components/seo'

const IndexPage = () => {
    useEffect(() => {
        navigate('/about')
    })
    return <SEO title="David Durlan" image="opengraph_default.png" />
}

export default IndexPage
