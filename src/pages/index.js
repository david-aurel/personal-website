import React, { useEffect } from 'react'
import { navigate } from 'gatsby'

const IndexPage = () => {
    useEffect(() => {
        navigate('/about')
    })
    return null
}

export default IndexPage
