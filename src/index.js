import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Suporte from './components/suporte/suporte';
import Main from './components/main/main';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter,  Switch, Route} from 'react-router-dom';
import Produtos from './components/produtos/produtos';
import Login from './components/login/login';
import Assinatura from './components/assinatura/assinatura';
import CadastroAtividade from './components/cadastro_atividade/cadastro_atividade';
import CadastroUsuario from './components/cadastro_usuario/cadastro_usuario';
import Dashboard from './components/dashboard/dashboard';
import Atividades from './components/dashboard/Atividades';
import Perfil from './components/perfil/perfil';
import EditarPerfil from './components/perfil/editar_perfil';
import SobreNos from './components/sobre_nos/sobre_nos';
import EsqueciSenha from './components/login/esqueci_senha';

ReactDOM.render(<BrowserRouter>
<Switch>
    <Route path="/" exact={true} component={App}/>
    <Route path="/suporte" exact={true} component={Suporte}/>
    <Route path="/main" exact={true} component={Main}/>
    <Route path="/produtos" exact={true} component={Produtos}/>
    <Route path="/login" exact={true} component={Login}/>
    <Route path="/assinatura" exact={true} component={Assinatura}/>
    <Route path="/cadastroatividade" exact={true} component={CadastroAtividade}/>
    <Route path="/cadastrousuario" exact={true} component={CadastroUsuario}/>
    <Route path="/dashboard" exact={true} component={Dashboard}/>
    <Route path="/Atividades" exact={true} component={Atividades}/>
    <Route path="/perfil" exact={true} component={Perfil}/>
    <Route path="/editarperfil" exact={true} component={EditarPerfil}/>
    <Route path="/sobrenos" exact={true} component={SobreNos}/>
    <Route path="/esquecisenha" exact={true} component={EsqueciSenha}/>

</Switch>
</BrowserRouter>, document.getElementById('root'));


