import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

const cards = [1, 2, 3];
const theme = createTheme();

export default function About() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      
      <main>

        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" id='about'>
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="text.primary"
                gutterBottom
              >
                About
              </Typography>
              <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Lake of Dreams
              </Typography>
              <Grid align="center" marginTop={2} marginBottom={5}>
              <Typography>
                 This is a media card. You can use this section to describe the
                 content.
              </Typography>
              </Grid>
              <Grid container spacing={4}>
                 {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                    >
                      <CardMedia
                        component="img"
                        sx={{
                          // 16:9
                          pt: '56.25%',
                        }}
                        image="https://source.unsplash.com/random"
                        alt="random"
                      />
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Typography gutterBottom variant="h5" component="h2">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card. You can use this section to describe the
                          content.
                        </Typography>
                      </CardContent>
                      <CardActions>
                        <Button size="small">View</Button>
                        <Button size="small">Edit</Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>

          </Container>

        </Box>

      </main>
      
    </ThemeProvider>
  );
}
