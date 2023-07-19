import Layout from '@components/Layout'
import React from 'react'

// type Props = {}

// export default function HomePage({}: Props) {
//   return (
//       <h1>HomePage</h1>
//   )
// }



import { NextPage } from 'next';
import Head from 'next/head';
import { Container, Grid, Paper, Typography } from '@mui/material';
import { Room } from '@mui/icons-material';

interface RoomProps {
  title: string;
  description: string;
  price: number;
}

const rooms: RoomProps[] = [
    {
      title: 'Deluxe Room',
      description: 'Experience luxury in our spacious deluxe room.',
      price: 199,
    },
    {
      title: 'Premium Suite',
      description: 'Indulge in the comfort and style of our premium suite.',
      price: 299,
    },
    {
      title: 'Executive Villa',
      description: 'Relax in the privacy and grandeur of our executive villa.',
      price: 499,
    },
  ];
  
  const HomePage: NextPage = () => {
    return (
      <>
        <Head>
          <title>Hotel Sale | Home</title>
        </Head>
        <Container maxWidth="lg" sx={{ paddingTop: 8 }}>
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to Hotel Sale
          </Typography>
          <Typography variant="body1" align="center" gutterBottom>
            Browse our selection of rooms and book your stay today.
          </Typography>
          <Grid container spacing={3} sx={{ marginTop: 4 }}>
            {rooms.map((room) => (
              <Grid item xs={12} sm={6} md={4} key={room.title}>
                <Paper variant="outlined" sx={{ padding: 2 }}>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginBottom: 16,
                    }}
                  >
                    <Room fontSize="large" />
                  </div>
                  <Typography variant="h6" align="center" gutterBottom>
                    {room.title}
                  </Typography>
                  <Typography variant="body1" align="center" gutterBottom>
                    {room.description}
                  </Typography>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      marginTop: 16,
                    }}
                  >
                    <Typography variant="h5" color="primary">
                      ${room.price}
                    </Typography>
                  </div>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
        <style jsx global>{`
          body {
            background-color: #f5f5f5;
          }
        `}</style>
      </>
    );
  };
  
  export default HomePage;