import React, { Component } from 'react';
//import api from '../../Api/Django';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import IconMenu from 'material-ui/IconMenu';
import IconButton from 'material-ui/IconButton';
import NavigationExpandMoreIcon from 'material-ui/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/MenuItem';
import {FlatButton, TextField} from 'material-ui';
import Avatar from 'material-ui/Avatar';
import {Link} from 'react-router-dom';
import './Listing.css';
import colors from '../colors';
import logo from '../../assets/logo_reto.png';
import firebase from '../../Api/firebase';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as userActions from '../../redux/actions/userActions';
import {withRouter} from 'react-router-dom';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuIcon from 'material-ui/svg-icons/action/reorder';


//redux
// import {setFilter, search} from "../../redux/actions/filterActions";
// import {toggleMenu} from "../../redux/actions/filterActions";

import './bar.css';

const pic = 'https://maxcdn.icons8.com/Share/icon/Users//circled_user_female1600.png'




class ListingNavBar extends Component{
    constructor(props) {
        super(props);
        this.state = {
            barra:false,
            user:null,
            isStaff:false,
            photoURL:false,
            value: "todos",
            //category:"todos"
          //  ancho: document.documentElement.clientWidth < 600
        };
    }
    signOut = () => {
        // return firebase.auth().signOut()
        //     .then(()=>{
        //         localStorage.removeItem('userInfo');
        //         localStorage.removeItem('userToken');
        //         this.props.userActions.signOut();
        //     });
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        this.setState({user:null})
        //this.props.toggleLogin(null);
        this.props.history.push('/')
    };
    handleChange = (event, index, value) => {
        this.setState({value});
        //this.props.changeCategory(value);
        //this.props.setFilter(value)
        this.props.history.push("/explorar/"+value);
    };

    handleSearch = (e) => {
        //console.log(e.target.value);
        const {value} = e.target;
        this.props.search(value);
    };

    onScroll = () => {
        let y = window.scrollY;
        // console.log(window.scrollY);
        if (y>100) this.setState({barra:true});
        if (y<100) this.setState({barra:false});
    };


    componentWillMount(){
        // firebase.auth().onAuthStateChanged((user)=>{
        //     if(user){
        //         this.setState({photoURL:user.photoURL});
        //     } else {
        //         this.setState({photoURL:false});
        //     }
        // });
        this.setUser()
    }

    setUser = () => {
        const user = JSON.parse(localStorage.getItem('user'))
        //console.log(user)
        if(user) {
            this.setState({photoURL:user.photoURL, user})
        }else{
            this.setState({user:null})
        }
    }

    // componentWillReceiveProps(p){
    //     this.setState({
    //         user:p.user,
    //         isStaff:p.isStaff,
    //         navBarName:p.navBarName,
    //         setFilter:p.setFilter,
    //         value:p.category
    //     });
    // }

//     componentDidMount(){
//         this.setState({
//             user:this.props.user,
//             isStaff:this.props.isStaff,
//             navBarName:this.props.navBarName,
//             setFilter:this.props.setFilter,
//             value:this.props.category
//         });
// // mostramos barra
//         window.addEventListener('scroll',this.onScroll);



//     }

    goToLogin = () =>{
        this.setUser()
        this.props.history.push('/login?next=/userProfile')
        setTimeout(()=>{
            this.setUser()
        },10000)
    }


    render(){
        const imgBck = require('../../assets/space.jpg');
        const {photoURL, value, navBarName, barra} = this.state;
        const {loggedIn} = this.props;
       
        //console.log(isStaff);
        const {history, toggleMenu} = this.props;

        //2018
        const {user} = this.state;
        let isStaff = false
        if(user){
            const {role=null} = user
            isStaff = role === "ADMIN"
        } 



        return(
            <Toolbar
                style={{
                    backgroundImage: `url(${imgBck})`,
                    //backgroundColor:colors.pink,
                    backgroundSize: 'cover',
                    overflow:'hidden',
                    cursor:'pointer',
                    position:'fixed',
                    zIndex:9999,
                    width:'100%',
                    //opacity:navBarName === "home" && !barra ? "0": "1"
                }}
                className="barra-last"
            >


                <ToolbarGroup
                    firstChild={true}>

                    {navBarName === "administrar" && <MenuIcon
                        style={{paddingLeft:"10px", paddingRight:"20px" ,color:"white"}}
                        onTouchTap={()=>toggleMenu()}
                    />}

                    <Link to={"/"}>
                        <img
                            alt="logo"
                            style={styles.logo} src={logo}
                        />
                    </Link>


                    {navBarName !== "explorar" && <Link
                        style={{textDecoration:"none"}}
                        id="explorar"
                        to="/explorar"
                        className="explorar-button noSmall">
                        Explorar
                    </Link>}

                    <div id="busqueda">
                    {navBarName === "explorar" &&  <DropDownMenu
                        id="filtro"
                        className="noSmall"
                        labelStyle={{color:"white"}}
                        value={value}
                        onChange={this.handleChange}>
                        <MenuItem style={{marginTop:56}} disabled primaryText="Categorías" />
                        <MenuItem value="todos" primaryText="Todos" />
                        {this.props.categories.map(c=>{
                            return(
                                <MenuItem key={c.id} value={c.slug} primaryText={c.name} />
                            );
                        })}

                    </DropDownMenu>}
                        </div>


                </ToolbarGroup>
                <ToolbarGroup lastChild={true}>


                    {navBarName === "explorar" && <TextField
                        id="buscar"
                        onChange={this.handleSearch}
                        className="noSmall"
                        hintStyle={{color:"lightgrey"}}
                        inputStyle={{color:"white"}}
                        underlineStyle={{borderColor:"purple"}}
                        underlineFocusStyle={{borderColor:"white"}}
                        hintText="Buscar..."
                    />}


                    {navBarName === "administrar" && <h6 className="titulo-admin">Administración</h6>}


                    {user && <CommunicationChatBubble
                        color="white"
                        style={styles.icon}
                        onTouchTap={()=>history.push('/chat')}
                    />}

                {user && <Avatar 
                    style={{cursor:'auto'}}
                    src={photoURL || pic} />}
                            {user && <IconMenu
                        iconButtonElement={
                            <IconButton
                               iconStyle={{color:'white'}}
                               touch={true}>
                                <NavigationExpandMoreIcon />
                            </IconButton>
                        }
                    >


                                {isStaff && <MenuItem
                                    style={{marginTop:56}}
                                    onTouchTap={()=>this.props.history.push("/admin")}
                                    primaryText="Administración"
                                />}
                                    <MenuItem
                                        style={{marginTop:56}}
                                        onTouchTap={()=>this.props.history.push("/explorar")}
                                        primaryText="Explorar"
                                    />


                            <MenuItem
                                onTouchTap={()=>this.props.history.push("/userprofile")}
                                primaryText="Tu perfil" />

                        <MenuItem 
                            primaryText="Cerrar Sesión"
                            onTouchTap={this.signOut}/>
                    </IconMenu>}


                    
                    {!user &&

                            <FlatButton
                                label="Entrar"
                                labelStyle={{color:'white'}}
                                hoverColor={colors.purple}
                                onClick={this.goToLogin}
                                //onTouchTap={()=>history.push('/login?next=/explorar')}
                            />
           
                    }
                    
                </ToolbarGroup>
            </Toolbar>
        );
    }
}



const styles = {
     logo:{
         width: 110,
         cursor:'pointer',
         marginLeft:'24px',
         height: 50
    },
    icon:{
        cursor:'pointer',
        color:'white',
        marginRight:10,
        marginLeft:10
    }
};

function mapStateToProps(state, ownProps) {
    //console.log(state.user);
    let isStaff = null;
    let loggedIn = null;
    if(Object.keys(state.user).length > 0) isStaff = state.user.role === 'OWNER';
    if(Object.keys(state.user).length > 0) loggedIn = true;
    return {
        // categories:state.category.list,
        // user: state.user,
        // isStaff,
        // loggedIn,
        // navBarName:state.navBarName,
        // category:state.filter.category
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // userActions: bindActionCreators(userActions,dispatch),
        // setFilter: bindActionCreators(setFilter, dispatch),
        // search:bindActionCreators(search, dispatch),
        // toggleMenu: bindActionCreators(toggleMenu, dispatch)
    }
}

export default ListingNavBar = withRouter(connect(mapStateToProps,mapDispatchToProps) (ListingNavBar));



// {inList &&
// <ToolbarGroup>
//     < DropDownMenu
//         labelStyle={{color:'white'}}
//         selectedMenuItemStyle={{color:colors.pink}}
//         id="categoria"
//         value={this.state.value}
//         onChange={this.handleChange}>
//         <MenuItem value={null} primaryText="Todos" />
//         <MenuItem value={'tecnologia'} primaryText="Tecnología" />
//         <MenuItem value={3} primaryText="Innovación" />
//         <MenuItem value={4} primaryText="Sociedad" />
//         <MenuItem value='salud' primaryText="Salud" />
//         <MenuItem value={6} primaryText="Vivienda" />
//         <MenuItem value='deporte' primaryText="Deporte" />
//     </DropDownMenu>
//
//     <ActionSearch style={iconStyles}/>
//     <TextField
//         underlineFocusStyle={{borderColor:'white'}}
//         inputStyle={{color:'white'}}
//         hintStyle={{color:'white'}}
//         hintText="Buscar"
//         fullWidth={false}
//         onChange={this.props.onChangeSearch}
//         style={{margin: '0px 20px 0px 10px'}}
//     />
// </ToolbarGroup>
// }