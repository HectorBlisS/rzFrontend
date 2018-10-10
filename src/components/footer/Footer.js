import React from 'react';
import './Footer.css';
import logo from '../../assets/reto_blanco.png';
import lg from '../../assets/zapopan_blanco.png';

class Footer extends React.Component {

	render() {
		return (
			<div className='footer'>
				<div className='footer_info'>
					<div className='definition'>
						<p>Av. Vallarta 6503 Local E-48</p>
						<p>Plaza Concentro, Col. Ciudad Granja</p>
						<p>Zapopan, Jalisco, México</p>
					</div>
					<div className='definition'>
						<img src={logo} alt="" />
						<img src={lg} alt="" />
					</div>
				</div>
				<hr />
				<div className="politicas" style={{ textAlign: "center" }}>
					<p>Aviso de Privacidad</p>
				</div>
			</div>
		);
	}
}

export default Footer;