import React from 'react';

import Footer from './components/footer/footer';
import Main from './components/main/main';
import Dashboard from './components/dashboard/dashboard';
import './App.css';
import Produtos from './components/produtos/produtos';
import Suporte from './components/suporte/suporte';

import Header from './components/header/header';
import firebase from 'firebase';
import Perfil from './components/perfil/perfil';
import SobreNos from './components/sobre_nos/sobre_nos';
import Assinatura from './components/assinatura/assinatura';



function App() {
  return (
    <div className="App">
     <Dashboard/>
     
    </div>
  );
}

export default App;
