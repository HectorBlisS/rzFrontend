import React from 'react';
import './Nav.css';
import logo from '../../assets/logo.png';
import {Link} from 'react-router-dom';

export const NavDisplay= () => (
    <div className="nav">
        <div>
            <img src={logo} alt=""/>
            <Link to="/about">
                <p>Nosotros</p>
            </Link>
            <Link to="/participar">
                <p>¿Cómo participar?</p>
            </Link>
            <Link to="/process">
                <p>¿Cómo donar?</p>
            </Link>
        </div>
        <div>
            <button>Comienza tu proyecto</button>
            <a href="/login2">
                <span>Log in</span>
            </a>
        </div>
    </div>



);