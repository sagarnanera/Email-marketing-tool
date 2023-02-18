import React from 'react'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const Indexhome = () => {

    const navigate = useNavigate();

    return (
        <>
            <h1 style={{margin:20}}>Turn Emails into Revenue</h1>
            <p style={{fontSize:'larger',margin:10}} >
                Win new customers with the #1 email marketing and automations brand* that recommends ways to get more opens, clicks, and sales.
            </p>
            <Button onClick={() => { navigate('/register') }}>Register</Button>
        </>
    )
}

export default Indexhome
