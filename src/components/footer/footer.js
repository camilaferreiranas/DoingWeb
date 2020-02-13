import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import TwitterLogo from '../../twitter.png';
import FacebookLogo from '../../facebook.png';
import InstagramLogo from '../../instagram.png';
import GoogleLogo from '../../google_play.png';
import AppStore from '../../app-store-badge.png';
import { Container } from '@material-ui/core';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Doing Brasil
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function Social() {
  return(

    <Container component="main" maxWidth="xs">
<Typography variant="body2" color="textSecondary" align="center">
      
      
        Nossas redes sociais <br/>
        <a href="https://twitter.com/doingbrasil"><img src={TwitterLogo}></img></a>
       <a href="https://www.facebook.com/doingbrasil"><img src={FacebookLogo}></img></a> 
       <a href="https://www.instagram.com/doingoficial/"><img src={InstagramLogo}></img></a> 
       
     
    </Typography>

   
    
    </Container>
  );
}

function Footer() {
    return (

        <div className="footer">
          

          <Grid item xs={6} sm={6}>
            <Social/>
          </Grid>
         
        <Copyright />
     
        </div>
        
    );
}

export default Footer;