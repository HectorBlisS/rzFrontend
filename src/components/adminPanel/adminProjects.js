import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import ProjectCard from '../userProfile/ProjectCard';
import api from '../../Api/Django';
import toastr from 'toastr';
import Badge from 'material-ui/Badge';
import {Link} from 'react-router-dom';

import {Toolbar, ToolbarGroup, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';
import DropDownMenu from 'material-ui/DropDownMenu';
import {TextField} from 'material-ui';
import ActionSearch from 'material-ui/svg-icons/action/search';
import Check from 'material-ui/svg-icons/action/check-circle';
import Ex from 'material-ui/svg-icons/action/highlight-off'

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {fullWhite} from 'material-ui/styles/colors';

import ValidateProject from './validateProject';
import { Route } from 'react-router-dom';



class AdminProjects extends Component{


  constructor(props) {
      super(props);
      this.state = {
          value: 'Emprendedor',
          ancho: document.documentElement.clientWidth < 600,
          search:null,
          items: [
                  {
                      id:1,
                      name:'perro',
                      goal:1000000
                  },
                  {
                      id:2,
                      name:'gato',
                      goal:1000000
                  },
                  {
                      id:3,
                      name:'perico',
                      goal:1000000
                  },
                  {
                      id:4,
                      name:'salchicha',
                      goal:1000000
                  },
                  {
                      id:5,
                      name:'nel',
                      goal:1000000
                  },


              ]

      };


  }
  componentWillMount(){
      api.getAxiosAllProjects()
          .then(r=>{
              this.setState({items:r.data});
              console.log(r.data);
          })
          .catch(e=>toastr.error('no se puedieron cargar los proyectos'));
  }

  handleChange = (event, index, value) => this.setState({value});

  onChangeSearch = (e) => {
      console.log(e.target.value);
    this.setState({
        search: e.target.value
    });
    console.log(this.state.search);

  };

  render(){

    const regEx = new RegExp(this.state.search,'i');
    const items = this.state.items.filter(
        item=>{
            if(this.state.search) return regEx.test(item.name);
            return item;
        }
    );

    return(
      <div>
        <div className={this.props.open ? 'adminUsersNavOpened' : 'adminUsersNavClosed'}
           style={{position:'fixed', zIndex:3, boxShadow:'0 1px rgba(0,0,0,.16)'}}>
          <Toolbar
              style={{
                  backgroundColor:'white',
                  overflow:'hidden',
                  cursor:'pointer',

                  width:'100%'
              }}
              className="oculto"
              >
              <ToolbarGroup
                  firstChild={true}>


                      <ToolbarTitle
                      style={{marginLeft: '30px'}}
                      text="Categorías: "/>
                <DropDownMenu value={this.state.value} onChange={this.handleChange}>
                      <MenuItem value={1} primaryText="Todos" />
                      <MenuItem value={2} primaryText="Tecnología" />

                </DropDownMenu>
              </ToolbarGroup>
                <ToolbarGroup>
                  <ActionSearch />
                  <TextField
                  hintText="Buscar"
                  fullWidth={false}
                  onChange={this.onChangeSearch}
                  />

              </ToolbarGroup>
          </Toolbar>
        </div>



        <div style={this.props.open ?{paddingTop:'13%'} : { paddingTop:'12%' }}>
          <GridList
            cols={this.props.open ? 4 : 5}
              cellHeight={'auto'}
               style={{width:'100%'}}>

            {items.map(i=>{
              return(
                <GridTile cols={1} key={i.id} style={{position:'relative'}}>
                    <Link to="edit/1">
                      <Badge
                        style={{position:'absolute', right:0, top:0, zIndex:1,}}
                        primary={true}
                        badgeContent={i.validated ? <Check color={fullWhite}/> : <Check color={fullWhite}/>}/>
                    </Link>
                  <ProjectCard name={i.name} goal={i.goal}/>
                </GridTile>
              );
            })}
          </GridList>

        </div>
      </div>
    );
  }
}

export default AdminProjects;