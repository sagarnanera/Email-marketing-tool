import { Box } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react'
import { Link } from 'react-router-dom'
import Indexhome from '../components/Indexhome';
import Navbar from '../components/Navbar';

const IndexPage = () => {
    return (
        <>


            <Navbar />
            <Container component='main' maxWidth={ 'sm'}>
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign:'center'
                    }}
                >
                    <Indexhome />
                </Box>
            </Container>


        </>
    )
}

export default IndexPage;
