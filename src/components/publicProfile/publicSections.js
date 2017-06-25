import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import {GridList, GridTile} from 'material-ui/GridList';
import ProjectCard from '../userProfile/oneProjectCard';
import {Link} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import Detail from 'material-ui/svg-icons/action/info';


class PublicProjects extends Component{


  render(){
    return(
      <div>

        <GridList cols={1} cellHeight={'auto'}>
          {this.props.projects.map(p=>{
            return(
              <GridTile key={p.id} cols={1} style={{position:'relative'}}>
                <Link to={'/detail/' + p.id}>
                  <IconButton tooltip="Detalle"
                    tooltipPosition="bottom-center"
                    iconStyle={{width: 50, height: 50,}}
                    style={{position:'absolute', top:10, left:10,width: 50,
    height: 50,}}>
                    <Detail />
                  </IconButton>
                </Link>
                <ProjectCard
                  location={'Guadalajara'}
                  back={p.photo}
                  goal={p.goal}
                  inputs={'0'}
                  description={p.description}
                  name={p.name}/>
              </GridTile>
            );
          })}
        </GridList>
      </div>
    );
  }
}
class PublicInputs extends Component{
  render(){
    return(
      <div>Inputs</div>
    );
  }
}

class PublicSections extends Component{

  publicProjects = () => {
    return(
      <PublicProjects projects={this.props.projects}/>
    );
  }

  render(){
    return(
        <div>
           <Route path={`/users/:userId/projects`} render={this.publicProjects}/>
           <Route path={`/users/:userId/inputs`} component={PublicInputs}/>
             <Route exact path="/users/:userId" render={this.publicProjects}/>
        </div>
    );
  }
}

export default PublicSections;
