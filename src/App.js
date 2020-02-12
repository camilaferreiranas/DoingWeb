import React from 'react';
import Login from './components/login/login';
import CadastroUsuario from './components/cadastro_usuario/cadastro_usuario';
import Dashboard from './components/dashboard/dashboard';
import Album from './components/main/main';
import Footer from './components/footer/footer';
import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';
import { withStyles } from "@material-ui/core/styles";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Paper, Typography, Grid, Card, CardHeader, CardContent, Avatar, List, ListItem, ListItemText, IconButton } from "@material-ui/core";
import Perfil from './components/perfil/perfil';

import firebase from 'firebase';
import EsqueciSenha from './components/login/esqueci_senha';
import Suporte from './components/suporte/suporte';
import Assinatura from './components/assinatura/assinatura';
import CadastroAtividade from './components/cadastro_atividade/cadastro_atividade';




function App() {
  return (
    <div className="App">
      <CadastroAtividade/>
     <Footer/>
    </div>
  );
}

export default App;
