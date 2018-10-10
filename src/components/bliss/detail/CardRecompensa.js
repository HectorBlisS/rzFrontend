import React from 'react';
import './Detail.css';
import './CardReward.css';

class CardRecompensa extends React.Component {


    render() {
        return (
            <div className="reward">
                <div className="cubierta">
                    <div style={{margin:"0 15px -30px 15px"}} className="txt_card">
                        <h4>Contribuir 100MXN</h4>
                        <h4>JOIN THE LEGION!</h4>
                        <p className="sub">Get a DIGITAL MEMBERSHIP KIT, a whole year of EXCLUSIVE EMAIL
                            UPDATES from The Aquabats, a SPECIAL THANKS on TheAquabats.com,
                            and an exclusive AQUABATS BUTTON!*</p>
                        <p className="sub" style={{fontSize:"12px"}}>Entrega aproximada: 30 Diciembre 2019</p>
                        <p className="sub" style={{fontSize:"12px"}}>120 patrocinadores</p>
                        <span className="flotante">Patrocinar</span>
                    </div>
                </div>
            </div>
        );
    }
}
export default CardRecompensa;

