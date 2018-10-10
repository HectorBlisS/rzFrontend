import React from 'react';
import './Card.css';
import cometa from '../../assets/cometa.png';
import bandera from '../../assets/bandera.png';
import LinearProgress from 'material-ui/LinearProgress';

class CardRelevantes extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            completed: 0,
        };
    }

    componentDidMount() {
        this.timer = setTimeout(() => this.progress(5), 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    progress(completed) {
        if (completed > 100) {
            this.setState({completed: 100});
        } else {
            this.setState({completed});
            const diff = Math.random() * 10;
            this.timer = setTimeout(() => this.progress(completed + diff), 1000);
        }
    }


    render() {
        return (
            <div className="destacado ">
                <div className="rl_img">
                </div>
                <div className="rl_data">
                    <h2>Desarrollo de primeros 100 lentes de realidad virtual: lentes</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque inventore optio recusandae. Accusamus adipisci aliquid eveniet ex maxime quia quidem totam unde. Aperiam commodi, ipsa ipsam natus numquam obcaecati repudiandae.
                    </p>
                    <br/>
                    <div style={{margin:"10px 0 20px 0"}}>
                        <div className="fle ">
                            <div className="fl">
                                <img className="icon_c" src={cometa} alt=""/> <span>Monto recaudado <strong>$95,000 pesos</strong></span>
                            </div>
                            <div className="fl">
                                <img className="icon_b" src={bandera} alt=""/> <span>Meta <strong>$220,000 pesos</strong></span>
                            </div>
                        </div>
                        <div style={{margin:"8px 0"}} >
                            <LinearProgress style={{height:"10px", borderRadius:"5px"}} color="#3E84FF" mode="determinate" value={this.state.completed} />
                        </div>
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
                            <br/>

                        </div>
                        <div className="fl">
                            <button className="btn_donar">Quiero apoyar este proyecto</button>
                        </div>


                </div>
            </div>
        );
    }
}
export default CardRelevantes;
