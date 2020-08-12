import React, { Component } from 'react';
import {Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from 'react-router-dom'
import NavBarMenu from './NavBarMenu';

class RestaurantList extends Component {
    constructor(){
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount(){
        this.getDataRestaurant()
    }
    getDataRestaurant(){
        fetch("http://localhost:3000/restaurant").then((response)=>{
            response.json().then((result)=>{
                this.setState({list:result})
            })
        })
    }
    delete(id){
        fetch('http://localhost:3000/restaurant/'+id,{
            method : 'DELETE',
            // headers: {
            //     'Content-Type' : 'application/json'
            // },
        }).then((result)=>{
            result.json().then((resp)=>{
                alert("Restaurante Eliminado")
                this.getDataRestaurant()
            })
        })
    }
    render() {
        return (
            <div className="container">
                <NavBarMenu/>
                <h1>RestaurantList</h1>
                {
                    this.state.list?
                    <div>
                        <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Rating</th>
                            <th>Direccion</th>
                            <th>Operacion</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.list.map((item, i)=>
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.rating}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Link to={"update/"+item.id}> <FontAwesomeIcon icon={faEdit} color="orange" title="Editar" /></Link>
                                    <span onClick={()=>this.delete(item.id)} > <FontAwesomeIcon icon={faTrash} color="red" title="Eliminar"/></span>
                                </td>
                            </tr>)
                        }
                        </tbody>
                        </Table>
                    </div>
                    :<p>Porfavor espere!....</p>
                }
            </div>
        );
    }
}

export default RestaurantList;