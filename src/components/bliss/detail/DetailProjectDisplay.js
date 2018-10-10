import React from 'react';
import './Detail.css';
import FontAwesome from 'react-fontawesome';

export const DetailProjectDisplay = ({}) => {

    return (
        <div className="detalle">
            <div className="flexin" style={{justifyContent:"space-between", height:"200px"}}>
                <div className="project_header">
                    <h1>Nombre del proyecto</h1>
                     <p>Join THE AQUABATS to MAKE A BRAND NEW ALBUM & A WHOLE YEAR OF NEW EPISODES 
                         that make the world super rad... for the kids!
                     </p>
                </div>
                <div className="project_author" >
                    <div>
                    <img src="https://scontent.fmex6-1.fna.fbcdn.net/v/t1.0-9/40685322_1788581754570538_7568345997529579520_n.jpg?_nc_cat=0&oh=b35a7ba99b0de8631960de4203d0956c&oe=5C2ECDFF" alt=""/>
                    <p>Brenda Ortega</p>
                        <p>
                    <FontAwesome name="map-marker"/>CDMX, Mexico</p>
                    </div>

                </div>
            </div>
            <div className="flexi" >
                <div className="video_detalle">
                    <iframe  src="https://www.youtube.com/embed/aJOTlE1K90k" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

                </div>
                <div className="project_data">
                    <p>oin THE AQUABATS to MAKE A BRAND NEW ALBUM & A WHOLE YEAR OF NEW EPISODES
                        that make the world super rad... for the kids!
                        oin THE AQUABATS to MAKE A BRAND NEW ALBUM & A WHOLE YEAR OF NEW EPISODES
                        that make the world super rad... for the kids!</p>
                    <p>$90,000.00 <span>contribuido de $150,000.00</span>   </p>
                    <p>300<span>aportadores</span>   </p>
                    <p>30 <span>días restantes</span>   </p>
                    <button>Patrocinar este proyecto</button>
                    <div>
                        <button>Seguir</button>
                        <FontAwesome name="facebook-square"/>
                        <FontAwesome name="twitter"/>
                        <FontAwesome name="envelope"/>
                        <FontAwesome name="code"/>
                    </div>
                </div>
                <div className="project_recompensa">
                    <p>pollo</p>
                </div>
            </div>
        </div>
    );6
};