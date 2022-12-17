import React from 'react'
import './Styles.css'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
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

const Hero = () => {
    const [modalOpenState, setModalOpenState] = React.useState(false);
    const handleOpen = () => setModalOpenState(true);
    const handleClose = () => setModalOpenState(false);
    return (
        <div className='hero'>
            <div className='content'>
                <p>LAKE OF DREAMS</p>
                <p>WINTER RETREATS SIGNUP OPEN</p>
                <button href='/' className='button'>Retreat Signup</button>
                <Button onClick={handleOpen}>Open modal</Button>
            </div>
            <div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={modalOpenState}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
        </div>
    )
}

export default Hero
