import React from 'react';
import './Slide.css';
import RaisedButton from 'material-ui/RaisedButton';
import Contador from '../contador/Contador';
import {Link} from 'react-router-dom';


class Slide extends React.Component {

    render() {
        return (
        <div className='fondo'>
          <div className='back'>
            <div className='degradado'>
              <div className='text'>
           		 <h1 >Crowdfunding Zapopan</h1>
           		 <p > El lugar para hacer realidad tus ideas</p>
              </div>
               <Link
                        id="explorar"
                        to="/explorar" >
                   <button className="btn_uno" >Explorar</button>
              </Link>
              <Contador />
            </div>

            <video id='bg-video' autoPlay="autoplay" loop  >
            </video>
           </div>
        </div>
        );
    }
}

export default Slide;