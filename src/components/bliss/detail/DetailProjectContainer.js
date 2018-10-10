import React from 'react';
import {DetailProjectDisplay} from './DetailProjectDisplay';
import './Detail.css';
import FontAwesome from 'react-fontawesome';
import {Tabs, Tab} from 'material-ui/Tabs';
import CardRecompensa from './CardRecompensa';


class DetailProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <div className="detalle">
                <div className="flexin" style={{justifyContent:"space-between", height:"200px"}}>
                    <div className="project_header">
                        <h1 className="tit">Nombre del proyecto</h1>
                        <p className="sub">Join THE AQUABATS to MAKE A BRAND NEW ALBUM & A WHOLE YEAR OF NEW EPISODES
                            that make the world super rad... for the kids!
                        </p>
                    </div>
                    <div className="project_author" >
                        <div>
                            <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=0&oh=b35a7ba99b0de8631960de4203d0956c&oe=5C2ECDFF" alt=""/>
                            <p className="txt padding">Brenda Ortega</p>
                            <p className="sub padding">
                                <FontAwesome name="map-marker" className="maker"/>CDMX, Mexico</p>
                        </div>

                    </div>
                </div>
                <div className="flexi" >
                    <div className="video_detalle">
                        <iframe  src="https://www.youtube.com/embed/aJOTlE1K90k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                    </div>
                    <div className="project_data">
                        <p className="sub" style={{textAlign:"justify"}}>oin THE AQUABATS to MAKE A BRAND NEW ALBUM & A WHOLE YEAR OF NEW EPISODES
                            that make the world super rad... for the kids!
                            oin THE AQUABATS to MAKE A BRAND NEW ALBUM & A WHOLE YEAR OF NEW EPISODES
                            that make the world super rad... for the kids!</p>
                        <p className="datos"><strong>$90,000.00</strong> <span>contribuido de $150,000.00</span>   </p>
                        <p className="datos"><strong>300</strong> <span>aportadores</span>   </p>
                        <p className="datos"><strong>30</strong> <span>días restantes</span>   </p>
                        <button className="btn_patrocinar">Patrocinar este proyecto</button>
                        <div className="flexi">
                            <button className="btn_seguir">Seguir</button>
                            <div style={{display:"flex", justifyContent:"space-between", alignItems:"center", color:"#656969", width:"60%", padding:"0 3%", boxSizing:"border-box"}}>
                                <FontAwesome name="facebook-square"/>
                                <FontAwesome name="twitter"/>
                                <FontAwesome name="envelope"/>
                                <FontAwesome name="code"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flexi">
                    <div className="project_tabs">
                        <Tabs
                            value={this.state.value}
                            onChange={this.handleChange}
                            style={{width:"100%"}}>
                            <Tab label="Descripción" value="a" style={{backgroundColor:"#f5f5f5 ", padding:"0 2%", color:"#2a2a2a"}}>
                                <div>
                                    <h2 >Acerca de</h2>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=0&oh=b35a7ba99b0de8631960de4203d0956c&oe=5C2ECDFF" alt=""/>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <p>
                                        Brigantia, legendary land of Celtic tribes, is the capital of a mythical age inhabited by ancient races and riddled with powerful strongholds and portals to mysterious realms. It is a time of magic, a force of nature wielded by sages and abundant in dragon lairs.
                                    </p>
                                    <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=0&oh=b35a7ba99b0de8631960de4203d0956c&oe=5C2ECDFF" alt=""/>

                                </div>
                            </Tab>
                            <Tab label="Actualizaciones" value="b" style={{backgroundColor:"#f5f5f5 ", color:"#2a2a2a"}}>
                                <div >
                                    <h2 >Actualizaciones del Proyecto</h2>
                                    <p>
                                        This is another example of a controllable tab. Remember, if you
                                        use controllable Tabs, you need to give all of your tabs values or else
                                        you wont be able to select them.
                                    </p>
                                </div>
                            </Tab>
                            <Tab label="Comentarios" value="c" style={{backgroundColor:"#f5f5f5 ", color:"#2a2a2a"}}>
                                <div >
                                    <h2>Comentarios</h2>
                                    <p>
                                        This is another example of a controllable tab. Remember, if you
                                        use controllable Tabs, you need to give all of your tabs values or else
                                        you wont be able to select them.
                                    </p>
                                </div>
                            </Tab>
                        </Tabs>
                    </div>
                    <div className="project_recompensa">
                        <h3>Apoyar</h3>
                        <div className="recompensa_free">
                            <p style={{marginLeft:"14px"}}>Contribuir sin recompensa</p>
                            <div className="flexi">
                            <input type="text" placeholder="Ingresa el monto"/>
                            <div className="box_icon">
                                <FontAwesome name="dollar-sign"/>
                            </div>
                            </div>
                            <button className="btn_continuar">Continuar</button>
                        </div>
                        <CardRecompensa />
                    </div>
                </div>
            </div>
        );
    }
}
export default DetailProjectContainer;

