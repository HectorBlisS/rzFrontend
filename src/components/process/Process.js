import React from 'react';
import './Process.css';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../nav/NavContainer';
import '../../../node_modules/react-joyride/lib/react-joyride-compiled.css';
//tutorial
//import jQuery, {$} from 'jquery';


class Process extends React.Component {

    state = {
      visible:false
    };

    componentDidMount(){
        setTimeout(()=>this.setState({visible:true}), 9000);
    }

    render() {
        const {visible} = this.state;
        return (
        	<div className='detras'>
                <Nav/>
                <div className='space'>
                <h3 className='tittle'> ¿Cómo fondear un proyecto?</h3>
                <p>En Rocket Found facilitamos la donación a iniciativas <br/>que están generando impacto a través de la tecnología, tu colaborción
                    puede ser la diferencia.
                </p>
                    <br/>
                    <br/>
                    <br/>
                <div className='contenedor'>
                    <div className='content'>
                        <div className='circle_process bleu'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'white'}}
                            >person_add</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Crea un perfil de usuario</h3>
                            <p>
                                Inicia sesión vía redes sociales para crear tu perfil.
                            </p>
                        </div>
                    </div> 
                    <div className='content'> 
                         <div className='circle_process bleu'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'white'}}
                            >touch_app</FontIcon>
                        </div> 
                         <div className='paso'>
                            <h3>Elige un proyecto</h3>
                            <p>
                                Elige un proyecto, lee su descripción y ponte en cotacto con el emprendedor.
                            </p>
                        </div>
                    </div> 
                     <div className='content'>               
                         <div className='circle_process bleu'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'white'}}
                            >redeem</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Escoge una recompensa</h3>
                            <p>
                               Elige una de las recompensas que el emprendedor ofrece por tu apoyo.
                            </p>
                        </div>
                    </div>
                     <div className='content'>   
                         <div className='circle_process bleu'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:'white'}}
                            >payment</FontIcon>
                        </div> 
                        <div className='paso'>
                            <h3>Fondea</h3>
                            <p>
                                Completa tus datos de fondeo para apoyar el proyecto.
                            </p>
                        </div>
                    </div>
                     <div className='content'>   
                         <div className='circle_process bleu'>
                            <FontIcon className='material-icons icon_p' style={{fontSize:70,color:' white'}}
                            >chat</FontIcon>
                        </div>
                        <div className='paso'>
                            <h3 id="block">Mantente actualizado</h3>
                            <p>
                                En tu perfil podrás ver los avances del proyecto y platicar con el emprendedor.
                            </p>
                        </div>
                    </div>   
                    </div>
                </div>
                
        	</div>
        );
    }
}

const styles = {
    noVisible:{
        display:"none"
    },
    visible:{
        display:"inherit"
    }
};

export default Process;