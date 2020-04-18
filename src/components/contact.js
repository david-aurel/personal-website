import React, { useState } from 'react'
import axios from 'axios'

const Contact = () => {
    const [input, setInput] = useState({})
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)
    const [formInfo, setFormInfo] = useState('')

    const handleChange = ({ target }) =>
        setInput({ ...input, [target.name]: target.value })

    const sendEmail = async () => {
        setError(false)
        if (!input.name) {
            return setFormInfo('Please provide a name')
        } else if (!/^.+@.+\..+$/.test(input.email)) {
            return setFormInfo('Please provide a valid email')
        } else if (!input.subject) {
            return setFormInfo('Please provide a subject line')
        } else if (!input.message) {
            return setFormInfo('Please provide a message')
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
            setSuccess(err)
            setFormInfo(`${err}. David promises to fix this.`)
            console.log('error while sending an email:', err)
        }
    }

    return (
        <div className="page contact">
            <p>
                I absolutely love comments and feedback, come say hi!{' '}
                <span role="img" aria-label="waving hand emoji">
                    👋
                </span>
            </p>
            <div className="contact-form">
                <p className={success ? 'success' : '' || error ? 'error' : ''}>
                    {formInfo}
                </p>

                <div className="form">
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

            <p>
                <img
                    src="/icons/linkedin.svg"
                    style={{
                        background:
                            'linear-gradient(to bottom, grey 0%, grey 100%)center / 80% 80% no-repeat',
                        filter: 'invert(1)',
                    }}
                />
                David Durlan
            </p>
            <p>
                <img
                    src="/icons/github.svg"
                    style={{
                        background:
                            'radial-gradient(circle, grey 65%, black 0%)',
                        filter: 'invert(1)',
                    }}
                />
                david-aurel
            </p>
        </div>
    )
}

export default Contact
