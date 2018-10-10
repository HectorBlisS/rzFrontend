import React from 'react';
import './Participar.css';
import FontIcon from 'material-ui/FontIcon';
import RaisedButton from 'material-ui/RaisedButton';
import Nav from '../nav/NavContainer';


class Participar extends React.Component {



    render() {
        return (
            <div className='detras'>
                <Nav/>
                <div className='space'>
                    <h3 className='tittle'> ¿Tienes una idea que puede generar <br/>un impacto positivo en la sociedad?
                    </h3>
                    <p>
                        Sigue estos pasos y lleva tu idea a la realidad
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



export default Participar;