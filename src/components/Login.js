import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';

class Login extends Component {
    constructor(){
        super();
        this.state={
            name : '',
            password : '',
        }
    }
    iniciar(){
        console.warn(this.state)
        fetch("http://localhost:3000/login?q="+this.state.name).then((data)=>{
            data.json().then((resp)=>{
                console.warn("respuesta",resp)
                if(resp.length>0){
                    localStorage.setItem('login',JSON.stringify(resp))
                    console.warn(this.props.history.push('list'))
                }else{
                    alert("Error usuario y/o contrasena incorrecta")
                }
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <input type="text" placeholder="Ingresa el usuario"
                name="user" onChange={(event)=>this.setState({name:event.target.value})} /> <br/> <br/>

                <input placeholder="Ingresa la contraseña"
                type="password" name="password" onChange={(event)=>this.setState({password:event.target.value})} /> <br/> <br/>

                 <button  onClick={()=>{this.iniciar()}} >Iniciar Sesion</button>

            </div>
        );
    }
}

export default Login;