import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import './HomePage.css';
import Slide from '../slide/Slide';
import Categoria from '../categoria/Categoria';
import {DestacadosContainer} from "../common/destacados/DestacadosContainer";
import { signOut } from '../../Api/firebase';
import Process from '../process/Process';
import About from '../about/About';
import Footer from '../footer/Footer';
import Comentarios from '../comentarios/Comentarios';
import MainBar from './mainBar/MainBar';


class HomePage extends React.Component {


    logout = () => {
        signOut()
            .then(()=>{
                this.props.history.push('/login');
            });
    };


    componentWillMount(){

    }

    render() {
        return (
        <div className="App">
            {/*<MainBar/>*/}
            <Slide />
            <About />
        	<DestacadosContainer />
            <Categoria />
            <Comentarios />
            <Process />

            <Footer />
             
          </div>
        );
    }
}
export default HomePage;

