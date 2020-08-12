import React, { Component } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faEdit, faList, faHome, faPlusCircle, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';
import {Navbar, Nav} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class NavBarMenu extends Component{
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home"><Link to="/">Resto</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home"><Link to="/"><FontAwesomeIcon icon={faHome} /> Inicio</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/list"><FontAwesomeIcon icon={faList} /> Lista</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/create"><FontAwesomeIcon icon={faPlusCircle} /> Crear</Link></Nav.Link>
                            <Nav.Link href="#link"><Link to="/search"><FontAwesomeIcon icon={faSearch} /> Buscar</Link></Nav.Link>
                            {
                                localStorage.getItem('login')?
                                <Nav.Link href="#link"><Link to="/logout"><FontAwesomeIcon icon={faUser} /> Cerrar Sesion</Link></Nav.Link>
                                :
                                <Nav.Link href="#link"><Link to="/login"><FontAwesomeIcon icon={faUser} /> Iniciar Sesion</Link></Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavBarMenu;