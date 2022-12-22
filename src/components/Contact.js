import * as React from 'react';
import Button from '@mui/material/Button';

import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Modal from '@mui/material/Modal';
import Divider from '@mui/material/Divider';

import ContactForm from './ContactForm';



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

const Contact = () => {
  const [modalOpenState, setModalOpenState] = React.useState(false);
  const contactOpen = () => setModalOpenState(true);
  const contactClose = () => setModalOpenState(false);
  return (
    <div className='contact'>
   
        <ThemeProvider theme={theme}>

        <Divider variant="middle" sx={{borderBottomWidth: 6}}/>
      

        {/* Hero unit */}
        <Box
          sx={{
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
              Contact
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
              <Button variant="contained" onClick={contactOpen}>Contact Us</Button>
                  
            </Stack>
            

          </Container>
        </Box>

        <Modal
        open={modalOpenState}
        onClose={contactClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>

          {/* import contact form */}
              <ContactForm />

        </Box>
      </Modal>

      
    </ThemeProvider>
    </div>
    
  );
}
export default Contact;