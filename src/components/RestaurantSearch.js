import React, { Component } from 'react';
import {Table,Form, Container} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import {
    Link
} from 'react-router-dom'
import NavBarMenu from './NavBarMenu';

class RestaurantSearch extends Component {
    constructor(){
        super()
        this.state = {
            searchData : null,
            noData : false,
            lastSearch : "",
        }
    }
    buscar(key){
        console.warn(key)
        this.setState({lastSearch:key})
        fetch("http://localhost:3000/restaurant?q="+key).then((data)=>{
            data.json().then((resp)=>{
                console.warn("resp",resp)
                if( resp.length>0 ){
                    this.setState({searchData: resp, noData:false})
                }else{
                    this.setState({noData: true, searchData: null})
                }
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
                this.buscar(this.state.lastSearch)
            })
        })
    }
    render() {
        return (
            <Container>
                <NavBarMenu/>
                <h1>RestaurantSearch</h1>
                <Form.Control type="text" placeholder="Ingrese el nombre del restaurante" onChange={(event)=>this.buscar(event.target.value)} />
                <div className="mt-4">
                    {
                        this.state.searchData?
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Nombre</th>
                                    <th>Email</th>
                                    <th>Rating</th>
                                    <th>Direccion</th>
                                    <th>Operaciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                    this.state.searchData.map((item,i)=>
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
                            :""
                    }
                    {
                        this.state.noData?<h3>No data Found</h3>:null
                    }
                </div>
            </Container>
        );
    }
}

export default RestaurantSearch;