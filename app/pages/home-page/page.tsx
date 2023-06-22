'use client';
import Navbar from '@/app/components/Navbar';
import { Box, Container, Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';
import Image from 'next/image';

export default function HomePage1() {
    return (<>
        <Navbar />
        {/* <Image src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/To_Do_List.png" alt="background" width={1430} height={350}/> */}
        <Container maxWidth="xl">
            {/* <h1>Home Page</h1> */}
            <center>
                <Typography
                    variant='h3' mt={2}>
                    To - Do App
                </Typography>
                <Typography
                    variant='h6'>
                    A simple To - Do App store simple tasks you may forget :)
                </Typography>
                <Typography
                    variant='body1' mt={2}>
                    First time here ? register now 👇
                </Typography>
                <Button variant="contained" color="primary">Register</Button>
                <Typography
                    variant='body1' mt={2}>
                    Already have an account ? login now 👇
                </Typography>
                <Button variant="contained" color="primary">login</Button>
                <h1></h1>

            </center>


        </Container>
        <Box
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                color: 'primary',
                '& > :not(style)': {
                    m: 1,
                    width: '98%',
                    height: 128,
                },
            }}
        >
            <Paper
                elevation={2}
                sx={{
                    position: 'fixed',
                    bottom: 0,
                    background: '#1a237e',
                }}
            ><Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    color: 'primary',
                    '& > :not(style)': {
                        m: 1,
                        width: 128,
                        height: 128,
                    },
                }}
            >
                    <Typography
                        variant='body1'
                        color="primary.light"
                    >
                        Sample text
                    </Typography>
                </Box>
            </Paper>
        </Box>
    </>
    );
} 