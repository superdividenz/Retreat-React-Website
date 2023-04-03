import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';


const theme = createTheme();

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function Contact() {
  return (

    
    <Container maxWidth="lg" id='retreats'>
         <ThemeProvider theme={theme}>

      <Divider variant="middle" sx={{borderBottomWidth: 6}}/>

        {/* Hero unit */}
          <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        ></Box>

      <Typography
        component="h2"
        variant="h2"
        align="center"
        textColor="neutral.500"
        fontWeight= "500"
        marginBottom={2}
      >
        Retreats
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" marginBottom={5} paragraph>
        Lake of Dreams
      </Typography>
    
          <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={2}>
               <Grid item xs={6} marginBottom={4} align="center">
                 <Card sx={{ maxWidth: 345 }}>
                   <CardMedia
                       sx={{ height: 200 }}
                       image="./images/Lodi-MR.png"
                       title="Retreats"
                     />
                     <CardContent>
                       <Typography gutterBottom variant="h5" component="div">
                         Mens Retreats
                       </Typography>
                       <Typography variant="body2" color="text.secondary">
                         We have a range of retreats fro winter snowball to spring and fall
                       </Typography>
                     </CardContent>
                     <CardActions>
                       <Button size="large">Sign up</Button>
                     </CardActions>
                   </Card>
               </Grid>
             <Grid item xs={6} marginBottom={4} align="center">
               <Card sx={{ maxWidth: 345 }} >
                  <CardMedia
                    sx={{ height: 200 }}
                    image="./images/front.png"
                    title="Retreats"
                  />
                  <CardContent align="center">
                    <Typography gutterBottom variant="h5" component="div">
                      Womens Retreats
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      We have a range of retreats fro winter snowball to spring and fall
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                  <Button size="large">Sign up</Button>
                  </CardActions>
                </Card>
             </Grid>
            </Grid>
          </Box>

    </ThemeProvider>

    </Container>

    
  );
}