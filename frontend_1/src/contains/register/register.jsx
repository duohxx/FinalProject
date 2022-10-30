/* eslint-disable no-useless-constructor */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable no-unused-vars */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */

/* eslint-disable*/ 
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import RadioGroup from "@mui/material/RadioGroup";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import bgImage from "assets/images/background.jpg";
import { connect } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { register } from '../../redux/actions';
const theme = createTheme();

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

class Register extends React.Component {
  state = {
    username: '',  
    password: '',  
    password2: '',  
    email: '',  
    type: 'Customer',
    msg: '',
    redirectTo: '',
  }
  // 点击注册调用
  register = () => {
    //console.log(this.state)
    this.props.register(this.state);
  }
  handleChange = (name, val) => {
    // alert("the button is onClick!!!");
    this.setState({
      [name]: val.target.value  
    })
    const {password, password2, email, type} = this.state;
    console.log(name + " : " + val.target.value);
  };
  handleType = (name, val) => {
    // alert("the button is onClick!!!");
    this.setState({
      [name]: val  
    })
    const {type} = this.state;
    console.log(name + " : " + val);
  };

  render() {
    const {msg, redirectTo} = this.props.user
    if(redirectTo) {
      return <Redirect to={redirectTo}/>
    }
    return (
      <ThemeProvider theme={theme}>
        <Grid container component="main" sx={{ height: "100vh" }}> 
          <CssBaseline />
          <Grid
            item
            xs={false}
            sm={4}
            md={7}
            sx={{
              backgroundImage: `url(${bgImage})`,
              backgroundRepeat: "no-repeat",
              backgroundColor: (t) =>
                t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Register
              </Typography>
              {msg ? <Typography variant="caption" color="#F44336">{msg}</Typography>: null}
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="Username"
                  label="Usernames"
                  name="Username"
                  autoComplete="Username"
                  autoFocus
                  onChange={val => {this.handleChange('username', val)}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={val => {this.handleChange('email', val)}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password" 
                  label="Input your Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={val => {this.handleChange('password', val)}}
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password2"
                  label="Input again"
                  type="password"
                  id="password2"
                  autoComplete="current-password"
                  onChange={val => {this.handleChange('password2', val)}}
                />
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="Customer"
                    row
                    name="radio-buttons-group"
                  >
                    <FormControlLabel value="Customer" control={<Radio />} onChange={() => this.handleType('type', 'Customer')} label="Customer" />
                    <FormControlLabel value="Doctor" control={<Radio />} onChange={() => this.handleType('type', 'Doctor')} label="Doctor" />
                  </RadioGroup>
                </FormControl>
                <Button onClick = {this.register} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Register
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/main" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/signIn" variant="body2">
                      Alread have an account? Sign In
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

 //export default Register;
export default connect(
  state => ({user: state.user}),
  {register}
)(Register)