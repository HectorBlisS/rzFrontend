import React from 'react';
import './Categoria.css';
import FontIcon from 'material-ui/FontIcon';
import { Link } from 'react-router-dom';


class Categoria extends React.Component {

  render() {
    return (

      <div className='away '>
        <h3 style={{ marginTop: 0 }} className='titulin'> Categorías </h3>

        <div className='container'>


          <ul id='flex-container'>

            <li>
              <Link to='/explorar/energia'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>lightbulb_outline</FontIcon></div>
                <span className='box_etiqueta'>Enegía</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/45072/pexels-photo-45072.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Energia' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/industrias-verdes'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>filter_vintage</FontIcon></div>
                <span className='box_etiqueta'>Industrias verdes</span>
                <div className='padre'>
                  <img className='verde' src='https://images.pexels.com/photos/9198/nature-sky-twilight-grass-9198.jpg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Industrias verdes' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/industrias-creativas'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>palette</FontIcon></div>
                <span className='box_etiqueta'>Industrias creativas</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/297648/pexels-photo-297648.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Industrias creativas' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/deporte'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>directions_bike</FontIcon></div>
                <span className='box_etiqueta'>Deporte</span>
                <div className='padre'>
                  <img className='verde' src='https://images.pexels.com/photos/261109/pexels-photo-261109.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Deporte' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/educacion'><div className='magnify' >
                <FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>chrome_reader_mode</FontIcon></div>
                <span className='box_etiqueta'>Educación</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/97064/pexels-photo-97064.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Eduación' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/agroindustria'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>filter_hdr</FontIcon></div>
                <span className='box_etiqueta'>Agroindustria</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/360013/pexels-photo-360013.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Agroindustria' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/alimentos'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>local_drink</FontIcon></div>
                <span className='box_etiqueta'>Alimentos</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/196643/pexels-photo-196643.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Alimentos' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/construccion'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>domain</FontIcon></div>
                <span className='box_etiqueta'>Construcción</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Construcción' />
                </div>
              </Link>
            </li>
            <li>
              <Link to='/explorar/movilidad'>
                <div className='magnify' ><FontIcon className="material-icons" style={{ transform: 'scale(2.2)', color: 'white' }}>directions_bus</FontIcon></div>
                <span className='box_etiqueta'>Movilidad</span>
                <div className='padre'>
                  <img src='https://images.pexels.com/photos/186537/pexels-photo-186537.jpeg?w=940&h=650&auto=compress&cs=tinysrgb' alt='Movilidad' />
                </div>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Categoria;