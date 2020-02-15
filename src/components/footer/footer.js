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
import { makeStyles } from '@material-ui/core/styles';

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

const useStyles = makeStyles(theme => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

function Social() {
  const classes = useStyles();
  return(
    
    <Container maxWidth="md" component="footer" className={classes.footer}>
   <Grid container spacing={4} justify="space-evenly">
    <Grid item xs={6} sm={6}>
        Nossas redes sociais <br/>
        <a href="https://twitter.com/doingbrasil"><img src={TwitterLogo}></img></a>
       <a href="https://www.facebook.com/doingbrasil"><img src={FacebookLogo}></img></a> 
       <a href="https://www.instagram.com/doingoficial/"><img src={InstagramLogo}></img></a> 
        </Grid>

       </Grid>
       <Grid container spacing={4} justify="space-evenly">
   

       </Grid>
    
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