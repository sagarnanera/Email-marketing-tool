import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
// import { Link } from 'react-router-dom'
import Indexhome from '../components/Indexhome';
import Navbar from '../components/Navbar';

const IndexPage = () => {

    const pages = [
        // { name: 'Products', slug: 'products' },
        // { name: 'Pricing', slug: 'pricing' },
        // { name: 'Blog', slug: 'blog' },
        { name: 'Email-builder', slug: 'email-builder' },
        { name: 'Login', slug: 'login' },
        { name: 'Sing-up', slug: 'register' }
    ];

    return (
        <>

            <Navbar navlinks={pages} />
            <Container component='main' maxWidth={'sm'}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center'
                    }}
                >
                    <Indexhome />
                </Box>
            </Container>


        </>
    )
}

export default IndexPage;
