import React from 'react'
import EmailBuilder from '../components/EmailBuilder';
import Navbar from '../components/Navbar';

const EmailEditor = () => {

    const navlinks = [
        { name: 'Export HTML', slug: '#' },
        { name: 'Save Template', slug: '#' },
    ];
    return (
        <>
            <Navbar navlinks={navlinks} />
            <div className="email-builder">
                <EmailBuilder />
            </div>
        </>
    )
}

export default EmailEditor
