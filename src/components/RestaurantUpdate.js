import React, { Component } from 'react';
import NavBarMenu from './NavBarMenu';

class RestaurantUpdate extends Component {
    constructor(){
        super();
        this.state={
            name : null,
            email : null,
            address : null,
            rating : null,
            id : null,
        }
    }
    componentDidMount(){
        fetch('http://localhost:3000/restaurant/'+this.props.match.params.id).then((response)=>{
            response.json().then((result)=>{
                // console.warn(result)
                this.setState({
                    name : result.name,
                    email : result.email,
                    address : result.address,
                    rating : result.rating,
                    id : result.id
                })
            })
        })
    }
    editar(){
        fetch('http://localhost:3000/restaurant/'+this.state.id,{
            method : 'PUT',
            headers : {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(this.state)
        }).then((result)=>{
            result.json().then((resp)=>{
                alert('Restaurante Actualizado')
            })
        })
    }
    render() {
        // console.warn(this.state);
        return (
            <div>
                <NavBarMenu/>
                RestaurantUpdate
                <div>
                    <input onChange={(event)=>{this.setState({name:event.target.value})} } placeholder="nombre del restaurante" value={this.state.name} /> <br/> <br/>
                    <input onChange={ (event)=>{this.setState({email:event.target.value})} } placeholder="ingresa el correo del restaurante" value={this.state.email} /> <br/> <br/>

                    <input  onChange={ (event)=>{this.setState({rating:event.target.value})} } placeholder="ingresa la calificacion del restaurante" value={this.state.rating} />  <br/> <br/>
                    <input  onChange={(event)=>{this.setState({address:event.target.value})}} placeholder="Ingresa la direccion" value={this.state.address} /> <br/> <br/>

                    <button onClick={()=>{this.editar()}} >Editar Restaurante</button>

                </div>
            </div>
        );
    }
}

export default RestaurantUpdate;