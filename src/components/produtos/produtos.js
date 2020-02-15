import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Header from '../header/header';
import FooterSecundario from '../footer_secundario/footer_secundario';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Doing
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
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
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

const tiers = [
  {
    title: 'Gratuito',
    price: '0',
    description: ['Até 5 usuários', 'Cadastro de 3 atividades'],
    buttonText: 'Cadastre-se de graça',
    buttonVariant: 'outlined',
  },
  {
    title: 'Equipe Nível Ferro',
    
    price: '14.9',
    description: [
      'Até 5 usuários',
      'Cadastro ilimitado de atividades',
      
    ],
    buttonText: 'Assine o Equipes Nível Ferro',
    buttonVariant: 'outlined',
  },
  {
    title: 'Equipes Nível Bronze',
    price: '24.9',
    description: [
      'Até 20 usuários',
      'Cadastro ilimitado de atividades',
     
    ],
    buttonText: 'Assine o Equipes Nível Bronze',
    buttonVariant: 'outlined',
  },
  {
    title: 'Equipes Nível Prata',
    price: '49.9',
    description: [
      'Até 50 usuários',
      'Cadastro ilimitado de atividades',
     
    ],
    buttonText: 'Assine o Equipes Nível Prata',
    buttonVariant: 'outlined',
  },
  {
    title: 'Equipes Nível Ouro',
    price: '99.9',
    description: [
      'Até 100 usuários',
      'Cadastro ilimitado de atividades',
     
    ],
    buttonText: 'Assine o Equipes Nível Ouro',
    buttonVariant: 'outlined',
  },
  
  {
    title: 'Equipes Nível Nióbio',
   
    description: [
      'Mais de 100 usuários',
      'Cadastro ilimitado de atividades',
     
    ],
    buttonText: 'Entre em contato',
    buttonVariant: 'outlined',
  },
];
const footers = [
  {
    title: 'Redes Sociais',
    description: ['Team', 'History', 'Contact us', 'Locations'],
  },
 
  {
    title: 'Legal',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Produtos() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Produtos
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Escolha a assinatura que mais se adequa a sua equipe.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map(tier => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Black' ? tier.price="" : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      R${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mensal
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map(line => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <FooterSecundario/>
      {/* End footer */}
    </React.Fragment>
  );
}