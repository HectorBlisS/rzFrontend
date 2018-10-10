import React from 'react';
import { Switch, Route } from 'react-router-dom';
import UserProfile from './components/userProfile/UserProfile';
import ProjectsPage from './components/projectListing/ProjectsPage';
import HomeDisplay from './components/home/HomeDisplay';
import Process from './components/process/Process';
import {PayDetailDisplay} from './components/payments/PayDetailDisplay';
import CreateProject from './components/createProject/CreateProject';
import MarkdownEditor from './components/adminPanel/MarkdownEditor';
import Participar from './components/participate/Participar';
import DetailProjectContainer from './components/bliss/detail/DetailProjectContainer';
import NavContainer from './components/nav/NavContainer';
import PrivateRoute from './PrivateRouteConnect';
//import ProjectManagerContainer from './components/projectManager/ProjectManagerContainer';
import { ManagerPage } from './components/projectManager/ProjectManagerContainer';
//import DetailPage from './components/projectListing/DetailPage';
import BlissDetailPage from './components/bliss/detail/BlissDetailPage';
import AdminPanel from './components/adminPanel/adminPanelPage';
import PublicProfile from './components/publicProfile/publicProfilePage';
import Cart from './components/payments/Cart';
import ChatPage from './components/chat/ChatPage';
import Login from './components/login/LoginDisplay';
import Registro from './components/login/RegisterDisplay'
import imgerror from './assets/404.png';
import About from './components/about/About';
const noMatch = () => (
  <div style={{
    backgroundImage: 'url(' + imgerror + ')',
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh'
  }}>
  </div>);

const Routes = () => (
  <Switch>
    <Route exact path="/" component={HomeDisplay} />
      <Route path="/about" component={About}/>
      <Route path="/process" component={Process}/>
      <Route path="/participar" component={Participar}/>
    <Route exact path="/login" component={Login} />
    <Route exact path="/registro" component={Registro} />
    <Route path="/new" component={CreateProject} />
    <Route exact path="/explorar" component={ProjectsPage} />
    <Route path="/explorar/:category" component={ProjectsPage} />
    <Route path="/userprofile" component={UserProfile} />
    <Route exact path="/new" component={CreateProject} />
    <Route path={`/manage/:projectId`} component={ManagerPage} />
    <Route path="/detalle" component={DetailProjectContainer} />
    <Route path="/detail/:projectId" component={BlissDetailPage} />
    <Route path="/users/:userId" component={PublicProfile} />
    <Route path="/admin" component={AdminPanel} />
    <Route path="/cart/:rewardId" component={Cart} />
    <Route path="/chat" component={ChatPage} />
      <Route path="/mark" component={PayDetailDisplay}/>

    <Route component={noMatch} />
  </Switch>
);

export default Routes;
