import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

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

    
    <Container maxWidth="sm" id='contact'>
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
      >
        Contact
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Contact Us
      </Typography>
    
          <Box sx={{ flexGrow: 1 }}>
             <Grid container spacing={2}>
               <Grid item xs={6} marginBottom={4}>
                 <Item>Contact Form</Item>
               </Grid>
             <Grid item xs={6} marginBottom={4}>
               <Item>Map</Item>
             </Grid>
            </Grid>
          </Box>

    </ThemeProvider>

    </Container>

    
  );
}