import React, { Component } from 'react';
import{} from 'react-bootstrap';
import NavBarMenu from './NavBarMenu';

class RestaurantCreate extends Component {
    constructor(){
        super();
        this.state={
            name : null,
            email : null,
            rating : null,
            address:  null,
        }
    }
    create(){
        fetch("http://localhost:3000/restaurant",{
            method: "Post",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurant has been added")
            })
        })
    }
    render() {
        return (
            <div>
                <NavBarMenu/>
                <h1>RestraurantCreate</h1>
                <div>
                    <input onChange={ (event)=>{ this.setState({name:event.target.value}) } } placeholder="Nombre del restaurant" /> <br/> <br/>
                    <input onChange={ (event)=>{ this.setState({email:event.target.value}) } } placeholder="Email del restaurant" /> <br/> <br/>

                    <input onChange={ (event)=>{ this.setState({rating:event.target.value}) } } placeholder="Rating del restaurant" /> <br/> <br/>
                    <input onChange={ (event)=>{ this.setState({address:event.target.value}) } } placeholder="Direccion del restaurant" /> <br/> <br/>
                    
                    <button onClick={()=>{this.create()}}>Add Restaurant</button>

                </div>
            </div>
        );
    }
}

export default RestaurantCreate;