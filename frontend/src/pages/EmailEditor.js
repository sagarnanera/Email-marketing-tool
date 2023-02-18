import React from 'react'
import EmailBuilder from '../components/EmailBuilder';
import Navbar from '../components/Navbar';

const EmailEditor = () => {
    return (
        <>
            <Navbar />
            <div className="email-builder">
                <EmailBuilder />
            </div>
        </>
    )
}

export default EmailEditor
