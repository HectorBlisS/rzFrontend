import React from 'react';
import reto from '../../assets/reto_blanco.png';
import zapopan from '../../assets/zapopan_blanco.png';

class Banner extends React.Component {

    render() {
        return (
            <div className="banner fl center">
                <span>Plataforma impulsada por:</span>
                <img src={reto} alt=""/>
                <img src={zapopan} alt=""/>
            </div>
        );
    }
}
export default Banner;

