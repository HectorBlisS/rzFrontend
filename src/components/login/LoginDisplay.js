import React, { Component } from 'react'
import { FlexContainer, FacebookButton, FlexBox, GoogleButton, LoginForm, Button } from './StyledComponents'
import './Login.css'
import RocketFund from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import firebase from '../../Api/firebase';
import toastr from 'toastr'
import Nav from '../nav/NavContainer';
import {loginWithEmail, facebookLogin, googleLogin} from '../../Api/nodejs'

class LoginDisplay extends Component {
    state =
        {
            loginData: {
                email: "",
                pass: "",
            },
            isSignedIn: false,
        }

    componentWillMount = () => {
        this.authListener();
        firebase.auth().getRedirectResult()
            .then(result => {
                if(!result.credential) return;
                const {accessToken} = result.credential
                console.log(result)
                if(result.credential.providerId === "google.com") return googleLogin(accessToken)
                else return facebookLogin(accessToken)
                // if (!result.user) return;
                // console.log(result.user);
                // localStorage.setItem("user", JSON.stringify(result.user));
                // this.props.history.push("/userprofile");
            })
            .then(user=>{
                if(!user) return 
                toastr.success('Bienvenido ' + user.email);
                this.props.history.push("/userprofile");
            })
            .catch(e=>{
                toastr.error(e)
                console.log(e)
            })
            // .catch(function (error) {
            //     toastr.error(error);
            // });
    }

    authListener = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                localStorage.setItem('user', user);
            }
            else {
                localStorage.removeItem('user');
            }
        });
    }
    loginGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithRedirect(provider)
        
        // .then(user=>{
        //     toastr.success('Bienvenido ' + user.email);
        //     this.props.history.push("/userprofile");
        // })
        // .catch(e=>{
        //     toastr.error(e)
        //     console.log(e)
        // })
    };

    loginFacebook = () => {
        const provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithRedirect(provider)
        // .then(snap=>{
        //     const {accessToken} = snap.credential
        //     return facebookLogin(accessToken)
        // })
        // .then(user=>{
        //     toastr.success('Bienvenido ' + user.email);
        //     this.props.history.push("/userprofile");
        // })
        // .catch(e=>{
        //     toastr.error(e)
        //     console.log(e)
        // })
    }

    handleInput = (e) => {
        const loginData = this.state.loginData;
        const inputName = e.target.name;
        const inputValue = e.target.value;

        loginData[inputName] = inputValue;
        this.setState({ loginData });
    }

    onLogin = (e) => {
        e.preventDefault();
        console.log("login")
        const {loginData} = this.state
        const auth = {email:loginData.email, password: loginData.pass}
        if (loginData.email && loginData.pass) {
            loginWithEmail(auth)
            .then(user=>{
                toastr.success('Bienvenido ' + user.email);
                this.props.history.push("/userprofile");
            })
            .catch(e=>{
                toastr.error(e)
                console.log(e)
            })
            // firebase.auth().signInWithEmailAndPassword(loginData.email, loginData.pass)
            //     .then(user => {
            //         localStorage.setItem('user', JSON.stringify(user));
            //         toastr.success('Bienvenido ' + user.email);
            //         this.props.history.push("/userprofile");
            //     }).catch(error => {
            //         toastr.error(error);
            //     })
        }
        else {
            alert('Los campos no pueden ser vacios.')
        }
    }

    render() {
        return (
            <div className="back_img">
                <Nav/>
                <FlexContainer>

                    <LoginForm>
                        <div className="flex-container">
                            <img className="logo" src={RocketFund} alt="" />
                        </div>
                        <h3 className="text-center" > Inicia sesión aquí </h3>
                        <FlexBox>
                            <FacebookButton onClick={this.loginFacebook}>
                                <i className="fa fa-facebook"></i> Iniciar sesión con Facebook
                            </FacebookButton>
                        </FlexBox>
                        <br />
                        <FlexBox>
                            <GoogleButton onClick={this.loginGoogle}>
                                <i className="fa fa-google"></i> Iniciar sesión con Google
                            </GoogleButton>
                        </FlexBox>
                        <br />
                        <h3 className="text-center"> O puedes iniciar con tu correo contraseña: </h3>
                        <p className="text-center" style={{ margin: '10px' }}>Correo electrónico </p>
                        <div className="flex-container">
                            <span style={{ width: "320px" }}>
                                <i className="inside fa fa-at"></i>
                                <input className="inp" name="email" value={this.state.loginData.email} placeholder="Correo electronico" type="text" autoFocus onChange={this.handleInput} />
                            </span>
                        </div>
                        <p className="text-center" style={{ margin: '5px' }}>Contraseña </p>
                        <div className="flex-container">
                            <span style={{ width: "320px" }}>
                                <i className="inside fa fa-key"></i>
                                <input className="inp" name="pass" value={this.state.loginData.pass} type="password" placeholder="Contraseña" onChange={this.handleInput} autoFocus />
                            </span>
                        </div>
                        <br />
                        <div className="flex-container">
                            <Button type="submit" onClick={this.onLogin}>Iniciar sesión</Button>
                        </div>
                        <br />
                        <div>
                            <p className="text-center">¿Olvidaste tu contraseña? <a href="">Click Aquí.</a></p>
                            <Link to="/registro">
                                <p className="link">¿No tienes una cuenta? Registrate aquí.</p>
                            </Link>
                        </div>
                    </LoginForm>
                </FlexContainer>
            </div >
        )
    }
}

export default LoginDisplay;
