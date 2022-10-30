/* eslint-disable*/ 
/*
Customer information complete component
*/
import React, {Component} from 'react'
import { connect } from 'react-redux'
import {Redirect} from 'react-router-dom'

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import MKBox from "components/MKBox";
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl'
import MenuItem from '@mui/material/MenuItem'
import Select from '@mui/material/Select'
import InputLabel from '@mui/material/InputLabel'

import HeaderSelector from '../../components/headerSelector/headerSelector'
import {updateUser} from '../../redux/actions'
import Infos from '../../components/UserInfo/Infos'

import bgImage from "../../assets/images/hospitalBackground.jpg";

class CustomerInfo extends Component{
    state = {
        header: '',
        firstname: '',
        lastname: '',
        subject: '',
        address: '',
        city: '',
        country: '',
        info: '',
    }
    
      // Updating Header Status
    setHeader = (header) => {
        this.setState({
          header
        })
    }
    handleChange = (name, value) => {
        // debugger
        this.setState({
          [name]: value.target.value  
        })
        console.log(name + " : " + value.target.value);
    }
    
    save = () => {
        this.props.updateUser(this.state)
    }

    render(){
        var sectionStyle = {
            width: "100%",
            height: "400px",
            backgroundImage: {bgImage}
        }
        return(
            <MKBox
                minHeight="75vh"
                width="100%"
                sx={{
                backgroundImage: `url(${bgImage})`,
                backgroundColor: 'rgb(255, 165, 0)',
                backgroundSize: "cover",
                backgroundPosition: "top",
                display: "grid",
                placeItems: "center",
            
                }}
            >
                <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
                    <Typography component="h1" variant="h4" align="center">
                        Please complete your information
                    </Typography>
                    <Paper 
                        variant="outlined" 
                        sx={{ 
                            my: { xs: 3, md: 6 }, 
                            p: { xs: 2, md: 3 },
                            backgroundColor: 'rgba(0, 100, 120, 0.95)',
                        }}
                        
                    >
                        <Paper 
                        variant="outlined" 
                        sx={{ 
                            backgroundColor: 'rgb(255, 255, 255)',
                        }}
                        >
                            <Typography component="h1" variant="h4" align="center">
                                Costomer
                            </Typography>
                            <HeaderSelector setHeader={this.setHeader}/>

                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="firstName"
                                    name="firstName"
                                    label="First name"
                                    fullWidth
                                    autoComplete="given-name"
                                    variant="standard"
                                    onChange={val => {this.handleChange('firstname', val)}}
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="lastName"
                                    name="lastName"
                                    label="Last name"
                                    fullWidth
                                    autoComplete="family-name"
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <FormControl sx={{ m: 2, minWidth: 120 }} size="large">
                                    <InputLabel id="demo-select-small">Subject</InputLabel>
                                    <Select
                                        labelId="demo-select-small"
                                        id="demo-select-small"
                                        value={this.subject}
                                        label="Subject"
                                        onChange={value => {this.handleChange('subject', value)}}
                                    >
                                        <MenuItem value={"Bone"}>Bone</MenuItem>
                                        <MenuItem value={"Heart"}>Heart</MenuItem>
                                        <MenuItem value={"Skin"}>Skin</MenuItem>
                                        <MenuItem value={"Lung"}>Lung</MenuItem>
                                    </Select>
                                    </FormControl>
                                </Grid>
                                
                                
                                <Grid item xs={12}>
                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="shipping address-line1"
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <TextField
                                    id="address2"
                                    name="address2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="shipping address-line2"
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="shipping address-level2"
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    id="state"
                                    name="state"
                                    label="State/Province/Region"
                                    fullWidth
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="shipping postal-code"
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="country"
                                    name="country"
                                    label="Country"
                                    fullWidth
                                    autoComplete="shipping country"
                                    variant="standard"
                                />
                                </Grid>
                                <Grid item xs={12}>
                                <Button onClick = {this.register} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                                    Register
                                </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Paper>
                </Container>
                
                {/*<Infos usertype={"Customer"}/>*/}
            </MKBox>
        )
    }
}

export default connect(
    state => ({user: state.user}),
    {updateUser}
)(CustomerInfo)