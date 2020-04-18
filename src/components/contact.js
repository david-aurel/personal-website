import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Contact = () => {
    const [input, setInput] = useState({})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [formInfo, setFormInfo] = useState('')

    useEffect(() => {}, [success, error])
    const handleChange = ({ target }) =>
        setInput({ ...input, [target.name]: target.value })

    const sendEmail = async () => {
        setError(false)

        if (!input.name) {
            return setFormInfo('* Please provide a name')
        } else if (!/^.+@.+\..+$/.test(input.email)) {
            return setFormInfo('* Please provide a valid email')
        } else if (!input.subject) {
            return setFormInfo('* Please provide a subject line')
        } else if (!input.message) {
            return setFormInfo('* Please provide a message')
        } else {
            setFormInfo('Sending...')
        }

        try {
            const { data } = await axios.post(
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
            <div className={error ? 'error' : ''}>
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
            </div>
            <div className="contact-form">
                <div className="upper-form-group">
                    <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="name"
                        onChange={e => handleChange(e)}
                    />
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="email"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="lower-form-group">
                    <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="subject"
                        onChange={e => handleChange(e)}
                    />
                    <textarea
                        name="message"
                        id="message"
                        placeholder="message"
                        onChange={e => handleChange(e)}
                    ></textarea>
                    <button onClick={sendEmail}>submit</button>
                </div>
            </div>

            <div className="socialmedia-wrapper">
                <a
                    href="https://linkedin.com/in/daviddurlan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialmedia-card linkedin"
                >
                    <img src="/icons/linkedin.svg" />
                    David Durlan
                </a>
                <a
                    href="https://github.com/david-aurel"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="socialmedia-card github"
                >
                    <img src="/icons/github.svg" />
                    david-aurel
                </a>
            </div>
        </div>
    )
}

export default Contact
