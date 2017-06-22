import React, {Component} from 'react';
import {Paper, ToolbarTitle, ListItem} from 'material-ui';
import Dialog from 'material-ui/Dialog';
import {FlatButton, TextField} from 'material-ui';


class RewardList extends Component {

    state = {
      rewardOpen:false,
        reward:''
    };

    openReward = (r) => {

        if(!r){
            this.setState({
                rewardOpen:!this.state.rewardOpen,
                reward:false
            });
        } else{
            this.setState({
                rewardOpen:!this.state.rewardOpen,
                reward:r
            });
        }


    };


    render(){
        const actions = [
            <FlatButton
                label="Cerrar"
                primary={true}
                onTouchTap={this.openReward}

            />,
            <FlatButton
                style={{backgroundColor:'#991FA6', color:'white'}}
                label="Adquirir"
                type="submit"
                primary={true}
                onTouchTap={this.openReward}
            />,
        ];

        return(
            <div>



                <Paper>
                    <ToolbarTitle
                        style={{color:'black'}}
                        text="Recompensas"
                    />
                </Paper>
                <div className="reward-list">

                    <div
                        onTouchTap={()=>this.openReward(false)}
                        key={123}
                        className="reward-paper"
                        style={{
                            paddingTop:'10px',
                            paddingBottom:'10px'
                        }}
                    >
                        <span
                            style={{}}
                        ><strong>Aportación libre </strong></span>

                    </div>


                    {this.props.project.rewards.map(
                        r=>{
                           return(
                               <div
                                   onTouchTap={()=>this.openReward(r)}
                                   key={r.id}
                                   className="reward-paper"
                                   style={{
                                       paddingTop:'10px',
                                       paddingBottom:'10px'
                                   }}
                               >
                        <span
                            style={{}}
                        >{r.title} </span>
                                   <span
                                       style={{}}
                                   >
                            <strong>
                                $ {r.amount}
                            </strong>

                        </span>

                               </div>







                           );


                        }
                    )}








                </div>




                <Dialog
                    actions={actions}
                    modal={false}
                    open={this.state.rewardOpen}
                    onRequestClose={this.openReward}
                    title={this.state.reward.title}
                    contentStyle={customContentStyle}
                >

                    {this.state.reward ? <div>
                        {this.state.reward.description}
                        <p style={{fontSize:'1.5rem'}}>$ {this.state.reward.amount}</p>
                        <p style={{fontSize:'.7rem'}}>Solo quedan {this.state.reward.quantity}</p>
                    </div>
                        :
                        <div>
                            <form>
                            $
                            <TextField
                                type="number"
                                min="100"
                                max="1000"
                                underlineStyle={{borderColor:'#4DB1E0'}}
                                underlineFocusStyle={{borderColor:'#89BE53'}}
                            />
                            </form>
                        </div>
                        }


                </Dialog>

            </div>

        );
    }
}

const customContentStyle = {
    width: 355,
    maxWidth: 'none',
};

export default RewardList;