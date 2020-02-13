import React from 'react';

import Button from '@material-ui/core/Button';

import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import TextField from '@material-ui/core/TextField';






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
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        minHeight: 100,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }
  }));




export default function CadastroAtividade() {
  const classes = useStyles();
  const [setor, setSetor] = React.useState('');
  const handleChange = event => {
    setSetor(event.target.value);
  };
  const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleDateChange = date => {
    setSelectedDate(date);}
  return (
    <React.Fragment>
      <CssBaseline />
    
      <main>
        
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Cadastro de atividade
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="titulo"
                name="titulo_atividade"
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="Título da atividade"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} >
            <TextField
                autoComplete="descricao"
                name="descricao_atividade"
                variant="outlined"
                required
                fullWidth
                multiline= {true}
                id="descricao"
                label="Descreva a atividade."
                autoFocus
              />
            </Grid>
         
            <Grid item xs={6} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="custo_total"
                label="Custo Total R$"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                type="date"
                defaultValue="2020-01-01"
                id="data_entrega"
                label="Data de entrega"
                name="data"
                autoComplete="data"
              />
            </Grid>
          
           
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            ADICIONAR ATIVIDADE
          </Button>
          
        </form>
      </div>
      
    </Container>
      </main>
      
      {/* End footer */}
    </React.Fragment>
  );
}