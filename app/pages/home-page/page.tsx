'use client';
import Navbar from '@/app/components/Navbar';
import { Box, Container, Typography, Paper } from '@mui/material';
import Button from '@mui/material/Button';
import { blue } from '@mui/material/colors';
import { light } from '@mui/material/styles/createPalette';
import Image from 'next/image';
import Link from 'next/link';

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
                <Link href={"https://to-do-app.auth.us-east-1.amazoncognito.com/signup?client_id=3vkkllodbthh6deppjljnjfpqd&response_type=code&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpages%2Fnotes"}>
                <Button variant="contained" color="primary">Register</Button>
                </Link>
                <Typography
                    variant='body1' mt={2}>
                    Already have an account ? login now 👇
                </Typography>
                <Link href={"https://to-do-app.auth.us-east-1.amazoncognito.com/login?client_id=3vkkllodbthh6deppjljnjfpqd&response_type=code&scope=openid&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fpages%2Fnotes"}>
                <Button variant="contained" color="primary">login</Button>
                </Link>
                
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
                    height: 35,
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
            >
                <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    color: 'primary',
                
                    '& > :not(style)': {
                        m: 1,
                        width: '100%',
                        height: 35,
                    },
                }}
            >
                <Typography
                        variant='body1'
                        color="primary.light"
                        sx={{
                            textAlign:'center',
                        }}
                    >
                       ©2023 ABC pvt. ltd. All rights reserved.
                    </Typography>   
                </Box>
            </Paper>
        </Box>
    </>
    );
} 