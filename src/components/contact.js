import React, { useState, useEffect } from 'react'
import axios from 'axios'
import autosize from 'autosize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => {
    const [input, setInput] = useState({})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [formInfo, setFormInfo] = useState('')
    const [animation, setAnimation] = useState(false)

    useEffect(() => {
        autosize(document.querySelector('.contact textarea'))
    }, [success, error])
    const handleChange = ({ target }) => {
        setInput({ ...input, [target.name]: target.value })
    }

    const sendEmail = async () => {
        if (!success) {
            setError(false)

            if (!input.name) {
                return setFormInfo('* Please provide a name')
            } else if (!input.message) {
                return setFormInfo('* Please provide a message')
            } else {
                setFormInfo('Sending...')
            }

            try {
                await axios.post(
                    'https://2ny34mqbjh.execute-api.eu-central-1.amazonaws.com/prod',
                    input
                )
                setSuccess(true)
                setFormInfo('Success!')
            } catch (err) {
                setError(err)
                setFormInfo(`${err} (most likely David's fault)`)
                console.log('error while sending an email:', err)
            }
        }
    }
    const emoji = (() => {
        return (
            <span role="img" aria-label="emoji">
                {success
                    ? ' 😊'
                    : error
                    ? ' 🤖'
                    : formInfo === 'Sending...'
                    ? ' 🤞'
                    : formInfo
                    ? ' 👇'
                    : ' 👋'}
            </span>
        )
    })()

    return (
        <div className="page contact">
            <span
                className={`formInfo ${error ? 'error' : ''}`}
                animation={animation ? '1' : '0'}
            >
                {formInfo ? (
                    <p>
                        {formInfo} {emoji}
                    </p>
                ) : (
                    <p>
                        I absolutely love comments and feedback, come say hi!
                        {emoji}
                    </p>
                )}
            </span>
            <div className="contact-form">
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    onChange={e => handleChange(e)}
                />
                <textarea
                    name="message"
                    id="message"
                    placeholder="Message"
                    onChange={e => {
                        handleChange(e)
                    }}
                    rows="1"
                ></textarea>
                <button
                    onClick={() => {
                        sendEmail()
                        setAnimation(!animation)
                    }}
                >
                    Send
                </button>
            </div>
            <div className="socialmedia-wrapper">
                <div className="socialmedia-card-wrapper">
                    <a
                        href="https://linkedin.com/in/daviddurlan"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socialmedia-card linkedin"
                    >
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                        David Durlan
                    </a>
                    <a
                        href="https://github.com/david-aurel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socialmedia-card github"
                    >
                        <FontAwesomeIcon icon={['fab', 'github']} />
                        david-aurel
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Contact
