import React from 'react';
import './About.css';
import log from '../../assets/logo_reto.png';
import Nav from '../nav/NavContainer'

class About extends React.Component {

    render() {
        return (
        	<div className='detras'>
				<Nav />
				<div className="padi">
					<h3 className='tittle'> ¿Qué es CrowdZapopan?</h3>
					<hr  className="linea_rosa"/>
					<div className='info'>
						<div className='logo'>
							<img className='log' src={log} alt='logo'/>
						</div>
						<div className='inf'>
							<p>
								Somos un programa impulsado por el Gobierno Municipal de Zapopan,
								 que a través de una competencia de ideas, buscamos impulsar, de manera gratuita, a los emprendedores a través de un programa integral de consultoría, mentoría, financiamiento, vinculación e internacionalización. Buscamos emprendedores que destaquen por sus ideas,
								empresas e iniciativas valiosas, relevantes y con valor agregado.
								Somos un programa impulsado por el Gobierno Municipal de Zapopan,

							</p>
						</div>

					</div>
				</div>
        	</div>
        );
    }
}

export default About;