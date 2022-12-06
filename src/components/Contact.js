
import React from 'react';
import './Contact.css';
import { Grid, TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { Wrapper, Status } from "@googlemaps/react-wrapper";

const render = (status: Status) => {
    return <h1>{status}</h1>;
    };

function Contact() {

  return (
    <div className="Contact" id="contact"> 
      <Grid container>
          
        <Grid item xs={12} md={6}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Contact
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Fill up the form and our team will get back to you within 24 hours.
          </Typography> 
            <form>
              <Grid container spacing={1}>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter first name" label="First Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid xs={12} sm={6} item>
                  <TextField placeholder="Enter last name" label="Last Name" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="email" placeholder="Enter email" label="Email" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField type="number" placeholder="Enter phone number" label="Phone" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <TextField label="Message" multiline rows={4} placeholder="Type your message here" variant="outlined" fullWidth required />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth>Submit</Button>
                </Grid>

              </Grid>
            </form>
          </CardContent>
        </Card>
        </Grid>
        <Grid item xs={12} md={6}>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
        <CardContent>
        <Typography gutterBottom variant="h5">
              Contact
            </Typography>
        </CardContent>
            {/* <Wrapper apiKey={"YOUR_API_KEY"} render={render}>
            <YourComponent/>
            </Wrapper> */}
        </Card>
        </Grid>
        
      </Grid>
    </div>
  );
}

export default Contact;