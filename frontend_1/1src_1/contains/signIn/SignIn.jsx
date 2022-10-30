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
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { connect } from 'react-redux';
import {signIn} from '../../redux/actions'
import bgImage from "assets/images/background.jpg";
import { AlternateEmail } from "@mui/icons-material";

function Redirect({ to }) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}

const theme = createTheme();

class SignIn extends React.Component {
  state = {
    username: '',
    password: '',
    msg: '',
  }
  signIn = () => {
    this.props.signIn(this.state)
  }

  handleChange = (name, val) => {
    // alert("the button is onClick!!!");
    this.setState({
      [name]: val.target.value  
    })
    console.log(name + " : " + val.target.value);
  };

  handleSubmit = () => {
    alert("the button is onClick!!!");
  };

  render() {
    const {msg, redirectTo} = this.props.user
    // If the redirectTo has a value, you need to redirectTo the specified route
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
                Sign In
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
                  name="password1"
                  label="Input your Password"
                  type="password"
                  id="password1"
                  autoComplete="current-password"
                  onChange={val => {this.handleChange('password', val)}}
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button onClick={this.signIn} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link href="/main" variant="body2">
                      Forgot password?
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link href="/register" variant="body2">
                      Do not have an account? Register
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
 //export default SignIn;
export default connect(
  state => ({user: state.user}),
  {signIn}
)(SignIn)