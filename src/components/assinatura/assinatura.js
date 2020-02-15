import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';

import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Header from '../header/header';
import FooterSecundario from '../footer_secundario/footer_secundario';


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

function Assinatura() {
    const classes = useStyles();
    const [tempo_assinatura, setTempo] = React.useState('');

  const inputLabel = React.useRef(null);
 
  

  const handleChange = event => {
    setTempo(event.target.value);
  };
    return (
        <div className="Assinatura">
          <Header/>
          <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        
        <Typography component="h1" variant="h5">
          Pagamento de assinatura
        </Typography>
        <Typography component="h5" variant="h5">
          Ao assinar o Doing você irá desbloquear vários benefícios
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="tnome"
                name="nometitular"
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="Nome do Titular ou Razão Social"
                autoFocus
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                autoComplete="tcpf"
                name="cpfcnpj"
                variant="outlined"
                required
                fullWidth
                id="nome"
                label="CPF ou CNPJ"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="n_cartao"
                label="Nº do cartão"
                name="n_cartao"
                autoComplete="número cartão"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cvv"
                label="CVV"
                type="c_cvv"
                id="cvv"
                autoComplete="cvv"
              />
            </Grid>
           <Grid item xs={6}>
           <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Assinatura</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={tempo_assinatura}
          onChange={handleChange}
        >
          <MenuItem value={1}>Nível Ferro - R$14,9</MenuItem>
          <MenuItem value={2}>Nível Bronze - R$ 24,9</MenuItem>
          <MenuItem value={3}>Nível Prata - R$ 49,90</MenuItem>
          <MenuItem value={4}>Nível Ouro - R$ 99,90</MenuItem>
          
          
          
        </Select>
      </FormControl>
            
           </Grid>
            
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            FINALIZAR PAGAMENTO
          </Button>
          
        </form>
      </div>
      
    </Container>
         <FooterSecundario/>
        </div>
      );
}

export default Assinatura;