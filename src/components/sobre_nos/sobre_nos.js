import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Header from '../header/header';
import FooterSecundario from '../footer_secundario/footer_secundario';
import Logo from '../../doingLogo.png';


import {
    BrowserRouter as Router,
    Switch,
    Route
    } from "react-router-dom";
   





const useStyles = makeStyles(theme => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function Suporte() {
    const classes = useStyles();

    return (
        <div className="Login">

          <Header/>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar>
        <img src={Logo}></img>
        </Avatar> <br/>
        <Typography component="h1" variant="h5">
         Sobre Nós 
        </Typography><br/>
        <Typography component="h4" align="justify"> 
            O Doing veio da necessidade de organizar melhor os projetos. <br/>
            Ao utilizar as aplicações disponíveis no mercado, sentiu-se uma carência de algumas
             funcionalidades, o Doing também tem como objetivo 
            ser uma plataforma simples, para não ser uma tarefa complicada para a
            equipe. <br/>    

        </Typography> <br/>
        <Typography component="h3" variant="h5">
         O Doing é um produto iVent Brasil. 
        </Typography><br/>
        
      </div>
      
    </Container>
    <FooterSecundario/>
        </div>
      );
}

export default Suporte;