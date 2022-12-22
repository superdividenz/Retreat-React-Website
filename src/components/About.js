import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';



const theme = createTheme();

export default function Album() {
  return (



    <ThemeProvider theme={theme}>
        

        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" id='retreats'>

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
            LAKE OF DREAMS IS A SPECIAL PLACE
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Contact</Button>
                  
            </Stack>
            

          </Container>
        </Box>
        
 
    </ThemeProvider>



  );
}