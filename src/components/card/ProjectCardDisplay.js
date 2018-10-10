import React from 'react';
import './Card.css';
import cometa from '../../assets/cometa.png';
import bandera from '../../assets/bandera.png';

export const ProjectCardDisplay= () => (
    <div className="card">
        <h2>Audifonos del futuro</h2>
        <div className="card_img">

        </div>
        <div className="pad">
            <div className="fl info">
                <img className="icon_c" src={cometa} alt=""/>
                <p>Monto recaudado: <strong>$95,000.00</strong></p>
            </div>
            <div className="fl info">
                <img className="icon_b" src={bandera} alt="" style={{marginLeft:"5px"}}/>
                <p>Meta: <strong>$195,000.00</strong></p>
            </div>
            <div className="fl relevantes">
                <div>
                    <p className="num"><strong>27</strong></p>
                    <p className="dato">Dias restantes</p>
                </div>
                <div >
                    <p className="num"><strong>27</strong></p>
                    <p className="dato">Dias restantes</p>
                </div>
                <div >
                    <p className="num"><strong>27</strong></p>
                    <p className="dato">Dias restantes</p>
                </div>
            </div>
        </div>
    </div>
);