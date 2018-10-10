import './Login.css'
import React, { Component } from 'react'
import { FlexContainer, LoginForm, Button } from './StyledComponents'
import styled from 'styled-components'
import RocketFund from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import firebase from 'firebase';
import toastr from 'toastr'

const RegisterForm = styled(LoginForm)`
    
`;
class RegisterDisplay extends Component {
    state = {
        registerData: {
            username: null,
            email: null,
            password: null,
            checkPassword: null,
        }
    }

    handleInput = (e) => {
        const inputName = e.target.name;
        const inputValue = e.target.value;
        const registerData = this.state.registerData;

        registerData[inputName] = inputValue;
        this.setState({ registerData });
    }

    onRegister = (e) => {
        e.preventDefault();
        const registerData = this.state.registerData;
        if (registerData.username && registerData.email && registerData.password && registerData.checkPassword) {
            if (registerData.password === registerData.checkPassword) {
                if(registerData.password.lenght>=6){
                console.log("Procede al registro");
                firebase.auth().createUserWithEmailAndPassword(registerData.email, registerData.password)
                    .then(user => {
                        const NewUser = {};
                        NewUser.displayName = registerData.username;
                        NewUser.email = registerData.email;
                        firebase.database().ref(`/users/${user.uid}`).set(NewUser);
                        toastr.success("Registrado! Ahora puedes iniciar sesión.");
                    })
                    .catch(error => {
                        toastr.error(error);
                    })
                }
                else{
                    alert("La contraseña debe tener más de 6 caracteres.")
                }
            }
            else {
                alert("Las contraseñas deben coincidir-")
            }
        }
        else {
            alert("Los campos no deben estar vacios.")
        }
    }
    render() {
        return (
            <FlexContainer>
                <RegisterForm>
                    <div className="flex-container">
                        <img className="logo" src={RocketFund} alt="" />
                    </div>
                    <h3 className="text-center">Registrate en RocketFund</h3>
                    <p className="text-center" style={{ margin: '5px' }}>Nombre de usuario:</p>
                    <div className="flex-container">
                        <span style={{ width: "320px" }}>
                            <i className="inside fa fa-user"></i>
                            <input className="inp" name="username" placeholder="Nombre de usuario" type="text" onChange={this.handleInput} />
                        </span>
                    </div>
                    <p className="text-center" style={{ margin: '5px' }}>Correo</p>
                    <div className="flex-container">
                        <span style={{ width: "320px" }}>
                            <i className="inside fa fa-at"></i>
                            <input className="inp" name="email" placeholder="Correo electronico" type="text" onChange={this.handleInput} />
                        </span>
                    </div>
                    <p className="text-center" style={{ margin: '5px' }}>Contraseña </p>
                    <div className="flex-container">
                        <span style={{ width: "320px" }}>
                            <i className="inside fa fa-key"></i>
                            <input className="inp" name="password" type="password" placeholder="Contraseña" onChange={this.handleInput} />
                        </span>
                    </div>
                    <div className="flex-container">
                        <span style={{ width: "320px", marginTop: '5px' }}>
                            <i className="inside fa fa-key"></i>
                            <input className="inp" name="checkPassword" type="password" placeholder="Repite tu contraseña" onChange={this.handleInput} />
                        </span>
                    </div>
                    <br />
                    <div className="flex-container">
                        <Button type="submit" onClick={this.onRegister}>Crear cuenta</Button>
                    </div>
                    <div>
                        <Link to="/login2">
                            <p className="link">¿Ya tienes una cuenta? Inicia sesión.</p>
                        </Link>
                    </div>
                </RegisterForm>
            </FlexContainer>
        )
    }
}

export default RegisterDisplay;