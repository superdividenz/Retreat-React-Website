import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const theme = createTheme();

const Hero = () => {
  const [modalOpenState, setModalOpenState] = React.useState(false);
  const handleOpen = () => setModalOpenState(true);
  const handleClose = () => setModalOpenState(false);

  // const Contact = () => {
  //   const [modalOpenState, setModalOpenState] = React.useState(false);
  //   const contactOpen = () => setModalOpenState(true);
  //   const contactClose = () => setModalOpenState(false);

  return (
    <div className='hero'>
        <ThemeProvider theme={theme}>
      <CssBaseline />
      

        {/* Hero unit */}
        <Box
          sx={{
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm" id='retreats'>
            <Typography
              marginTop={20}
              component="h2"
              variant="h2"
              align="center"
              textColor="neutral.500"
              fontWeight= "500"
            >
              RETREATS
            </Typography>
            <Typography variant="h5" align="center" textColor="neutral.500" paragraph>
              Lake of Dreams
            </Typography>
            <Stack
              sx={{pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained" onClick={contactOpen}>Contact</Button> */}
              <Button variant="contained" onClick={handleOpen}>Retreats</Button>
                  
            </Stack>
            

          </Container>
        </Box>

        <Modal
        open={modalOpenState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Retreat Sign Up Form
          </Typography>
        </Box>
      </Modal>

      
    </ThemeProvider>
    </div>
    
  );
}
export default Hero;