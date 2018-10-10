import React from 'react';
import './Card.css';
import cometa from '../../assets/cometa.png';
import bandera from '../../assets/bandera.png';


export const CardRelevantesDisplay = () => (

    <div className="destacado ">
        <div className="rl_img">
        </div>
        <div className="rl_data">
            <h2>Desarrollo de primeros 100 lentes de realidad virtual: lentes</h2>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque inventore optio recusandae. Accusamus adipisci aliquid eveniet ex maxime quia quidem totam unde. Aperiam commodi, ipsa ipsam natus numquam obcaecati repudiandae.
            </p>
            <br/>
            <div >
                <div className="fle ">
                    <div className="fl">
                        <img className="icon_c" src={cometa} alt=""/> <span>Monto recaudado <strong>$95,000 pesos</strong></span>
                    </div>
                    <div className="fl">
                        <img className="icon_b" src={bandera} alt=""/> <span>Meta <strong>$220,000 pesos</strong></span>
                    </div>
                </div>

            </div>
        </div>
    </div>
);