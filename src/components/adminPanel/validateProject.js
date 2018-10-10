import React, {Component} from 'react';
//import api from '../../Api/Django';
import {getProjectAdmin, updateProjectAdmin} from '../../Api/nodejs'
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import './adminPanelPage.css';
import RaisedButton from 'material-ui/RaisedButton';
import ReactMarkdown from 'react-markdown';
import toastr from 'toastr';
import {Toolbar, ToolbarGroup, TextField, DatePicker, SelectField, Avatar, Dialog, CardHeader, MenuItem} from 'material-ui'

//import FloatingActionButton from 'material-ui/FloatingActionButton';
//import ContentAdd from 'material-ui/svg-icons/content/add';
//import Warn from 'material-ui/svg-icons/action/report-problem';
import MainLoader from '../common/MainLoader';

//2018
import MarkdownEditor from './MarkdownEditor';


class ValidateProject extends Component{

  constructor(){
    super();
    this.state={
      openModal:false,
      observations:[],
      project:null,
      video:'',
      editingMarkdown:false
    }
  }

  componentWillMount(){
    getProjectAdmin(this.props.match.params.id)
        .then(project=>{
                //console.log(project);
                this.setState({project})
                this.formatVideo(project.video)

            })
    .catch(
        e=>{
            console.log(e);
            toastr.error("No se pudo cargar")
        }
    );
  }

  formatVideo = (link) => {
    const id = link.split('/')[3]
    const video = 'https://www.youtube.com/embed/' + id + '/'
    this.setState({video})
  }

   handleChange = (event, index, value) => {
    const {project} = this.state;
    project.status = value
     this.setState({value, project});
     console.log(this.state.project)
   }
   handleInicio = (event,value) => {
    const {project} = this.state;

    project.publish = value
     this.setState({project});
     console.log(this.state.project)
   }
   handleFinal = (event,value) => {
    const {project} = this.state;

    project.finish = value
     this.setState({project});
     //console.log(this.state.project)
   }
   handleText = (event, index) => {
     const field = event.target.name;
     const project = this.state.project;
     project[field] = event.target.value;
     this.setState({project});
     //console.log(this.state.project)
   }
   modificarProyecto = () => {
     const {project} = this.state;
    //  console.log(this.state.project.id, 'b',project);
    //  delete project.photo;
    //  api.updateProject(this.state.project.id, project)
    //   .then(r=>{
    //     toastr.success('Haz modificado este proyecto')
    //   }).catch(e=>{
    //     console.log(e)
    //   })
   }

   addComment = () => {

        let nuevo = this.state.newComm;
        nuevo.project = this.state.project.id;
        // api.newObservation(nuevo)
        //     .then(
        //         r=>{
        //             let observations = this.state.observations;
        //             observations.push(r);
        //             this.setState({
        //                 observations,
        //                 newComm:{}
        //             });
        //             toastr.success('Se añadió tu observación')

        //         })
        //     .catch(
        //         e=>{
        //             toastr.options.closeButton=true;
        //             toastr.error(e.data.text);

        //         }
            // );





   }
   newObservation = (e) => {

     let observation = this.state.newComm;
     let field = e.target.name;
     observation[field] = e.target.value;
     this.setState({
         newComm:observation
     });

   }
   cleanText =(e)=>{
     e.target.value=""
   }

   editMarkdown = () => {
     this.setState({editingMarkdown: !this.state.editingMarkdown})
   }

   onChangeBody = (e) => {
    const value = e.target.value
    const {project} = this.state
    project.body = value
    this.setState({project})
   }

   saveProject = () => {
     const {project} = this.state
     updateProjectAdmin(project)
     .then(r=>{
       toastr.info('Proyecto actualizado')
       this.setState({editingMarkdown:false})
     })
     .catch(e=>{
       console.log(e)
       toastr.error('No se pudo guardar')
     })
   }

   toggleModal = () => {
     this.setState({openModal:!this.state.openModal})
   }

   changeVideo = () => {
    const {project} = this.state
    this.formatVideo(project.video)
    //this.saveProject()
    this.toggleModal()
   }

   changeDate = (field,date) =>{
    console.log(date)
    const {project} = this.state
    project[field] = date
    this.setState({project})
   }

   handleSelect = (field, value) => {
    const {project} = this.state
    project[field] = value
    this.setState({project})
   }
   

  render(){

    const {project, video, editingMarkdown, openModal} = this.state
    if(!project) return <MainLoader />
    const {status, body='', category, title, owner={}, goal, endDate=new Date(), startDate=new Date(), summary} = project
    if(editingMarkdown) return<div> <MarkdownEditor editMarkdown={this.editMarkdown} onSaveBody={this.saveProject} onChangeBody={this.onChangeBody} body={body} /></div>
    return(

      <div style={{paddingTop:50 }}>
                <Toolbar
                    style={{display:'flex', justifyContent:'flex-end'}}
                >
                    <ToolbarGroup
                        
                    >
                        <RaisedButton
                            secondary
                            onClick={this.saveProject}
                            label="Guardar"
                        />

                        
                    </ToolbarGroup>
                </Toolbar>

            <iframe
                title="Video" width="100%"
                height={document.documentElement.clientWidth > 600 ? 345 : 200}

                src={video}
                frameBorder="0"
                allowFullScreen/>
            <button onClick={this.toggleModal} >Cambiar Video</button>
            <Paper zDepth={4} style={{padding:20, display:'flex', flexDirection:'column', alignItems:'center'}}>

            <Avatar src={owner.photoURL} />
            <p>{owner.username} - {owner.email}</p>
  

              <h1 style={{margin:0, textAlign:'center'}}>{title}</h1>
              <div
                  style={{display:'flex', flexDirection:'column'}}>
                  <RaisedButton 
                    primary
                    label="Editar Descripción"
                    onClick={this.editMarkdown}
                  />
                    {/* <ReactMarkdown source={body}/> */}
              </div>
              <Divider />
              <Paper style={{display:'flex', flexWrap:'wrap'}} >
                <SelectField 
                  value={status}
                  floatingLabelText={"Estado del proyecto"}
                  onChange={(e,i,v)=>this.handleSelect('status', v)}
                >
                  <MenuItem value="DRAFT" >Draft</MenuItem>
                  <MenuItem value="VALIDATING" >Validating</MenuItem>
                  <MenuItem value="PUBLISHED" >Published</MenuItem>
                </SelectField>

                <DatePicker 
                  floatingLabelText="Fecha de inicio"
                  name="startDate"
                  onChange={(a,date)=>this.changeDate('startDate', date)}
                  value={new Date(startDate)}
                  hintText="Fecha de inicio"
                  mode="landscape" />
                  <DatePicker 
                  floatingLabelText="Fecha de Término"
                  name="endDate"
                  onChange={(a,date)=>this.changeDate('endDate', date)}
                  value={new Date(endDate)}
                  hintText="Fecha de Término"
                  mode="landscape" />

                  <TextField 
                  onChange={this.handleText}
                  name="goal"
                  floatingLabelText={"Meta"}
                  value={goal}
                  type="number"
                />

                 <TextField 
                 multiLine={true}
                  onChange={this.handleText}
                  name="summary"
                  floatingLabelText={"Resumen"}
                  value={summary}
                  type="text"
                />


              </Paper>
            </Paper>


      <Dialog
        style={{textAlign:'center'}}
        open={openModal}
        onRequestClose={this.toggleModal}
      >
        <div style={{display:'flex'}} >
            <CardHeader >
              Cambiar El video:
            </CardHeader>
            <TextField
              name="video"
              onChange={this.handleText}
              label="Link"
              value={project.video}
            />

          </div>
          <RaisedButton
            onClick={this.toggleModal}
            primary
            label="Cancelar"
          />
          <RaisedButton
            onClick={this.changeVideo}
            label="Guardar"
          />
      </Dialog>



      </div>
    );
  }
}
export default ValidateProject;
