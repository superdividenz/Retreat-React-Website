import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Divider from '@mui/material/Divider';


const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Divider variant="middle" sx={{borderBottomWidth: 6}}/>

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
              marginTop={5}
              component="h2"
              variant="h2"
              align="center"
              textColor="neutral.500"
              fontWeight= "500"
            >
              Retreats
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Mens and Womens Retreat dates
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