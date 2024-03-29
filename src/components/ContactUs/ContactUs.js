import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import CssBaseline from '@material-ui/core/CssBaseline';


const styles = {
    contactForm: {
        marginTop: 10,
        width: '60vh'
        }
  };

export class ContactForm extends Component {
    state = {
        userName: '',
        email: '',
        message: ''
    }
    
    // Handle submit button
    handleSubmit = async event => {
        
        const { userName, email, message } = this.state;
        
        try {
            const data = await postData('', { userName, email, message });
            console.log(JSON.stringify(data)); 
        } catch (error) {
            console.error(error);
        }

        async function postData(url = '', data = {}) {
        
                const response = await fetch(url, {
                method: 'POST', // *GET, POST, PUT, DELETE, etc.
                mode: 'no-cors', // no-cors, *cors, same-origin
                cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                credentials: 'same-origin', // include, *same-origin, omit
                headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
                },
                redirect: 'follow', // manual, *follow, error
                referrer: 'no-referrer', // no-referrer, *client
                body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        return await response.json(); // parses JSON response into native JavaScript objects
        }

        // Reset from after submiting
        document.getElementById('contact-form').reset();
        this.setState({ userName: "", email: "", message: "" });
        event.preventDefault();
    }

    // Handle fields change
    handleChange = input => event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
        
    }

    render() {
        const { classes } = this.props;
        const { userName, email, message } = this.state;
        return (
            <div className={classes.container}>
            <CssBaseline />
                
                <Grid container direction="column" alignItems="center">
                    <Grid item>
                        <form
                        id="contact-form"
                        className={classes.contactForm}
                        onSubmit={this.handleSubmit}
                        >
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="name"
                                label="Name"
                                name="userName"
                                className={classes.inputField}
                                onChange={this.handleChange("userName")}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="email"
                                label="Email"
                                name="email"
                                className={classes.inputField}
                                onChange={this.handleChange("email")}
                                margin="normal"
                                />
                            </Grid>
                            <Grid item>
                                <TextField
                                fullWidth
                                required
                                id="message"
                                label="Message"
                                name="message"
                                className={classes.inputField}
                                onChange={this.handleChange("message")}
                                margin="normal"
                                multiline
                                />
                            </Grid>
                            <Grid container direction="row" spacing={3} style={{ marginTop: 20, marginBottom: 20}}>
                            <Grid item >
                                <Button
                                className={classes.formButton}
                                type="reset"
                                variant="contained"
                                color="default"
                                //disabled={submitting || pristine}
                                >
                                RESET
                                </Button>
                            </Grid>
                            <Grid item >  
                                <Button
                                className={classes.formButton}
                                type="submit"
                                variant="contained"
                                color="primary"
                                >
                                Submit
                                </Button>
                            </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
                
            </div> 
                      
        );
    }
}

ContactForm.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(ContactForm);
