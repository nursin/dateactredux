import React, { Component } from 'react';
import { Nav, Navbar, NavbarToggler, NavItem, Jumbotron, Button, Collapse, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false,
      isModalOpen: false
    };
  }

  toggleNav = () => {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  toggleModal = () => {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    })
  }

  render() {
    return(
      <React.Fragment>
        <Jumbotron fluid>
          <div className="container">
            <div className="row">
              <div className="col-12 col-sm-2 col-lg-1 mb-3 mb-sm-0 text-center align-self-center">
                <a id="logo" href="index.html"><i className="fa fa-transgender-alt fa-5x"/></a>
              </div>
              <div className="col ml-sm-4 ml-md-0 ml-lg-4 ml-xl-0 text-center text-sm-left">
                <h1>Date Act</h1>
                <h2 id="slogan">Spice up your date life</h2>
              </div>
              {/* <!-- This button will open a share modal so the user can select messages, social, email and such --> */}
              <span className="col-md-4 col-xl-2 mt-4 text-center">
                <Button className="btn btn-warning btn-lg text-black" outline onClick={this.toggleModal}>Share With Friends</Button>
              </span>
            </div>
          </div>
        </Jumbotron>
        <Navbar dark sticky="top" expand="md">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-lg"/> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <i className="fa fa-info fa-lg"/> About
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <i className="fa fa-address-card fa-lg"/> Contact
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader className="bg-gradient text-center" toggle={this.toggleModal}><h2 className="text-white">Share on social media</h2></ModalHeader>
          <ModalBody>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 text-center">
                  <a href="http://facebook.com/" className="btn button-hover-bg-gradient bg-blue text-white" target="_blank" rel="noreferrer">Share on <i className="fa fa-facebook fa-2x"></i>acebook</a>
                </div>
                <div className="col-12 text-center mt-2">
                  <a href="http://twitter.com/" className="btn button-hover-bg-gradient bg-blue text-white" target="_blank" rel="noreferrer">Share on <i className="fa fa-twitter fa-2x"></i>Twitter</a>
                </div>
                <div className="col-12 text-center mt-2">
                  <a href="http://instagram.com/" className="btn button-hover-bg-gradient bg-blue text-white" target="_blank" rel="noreferrer">Share on <i className="fa fa-instagram fa-2x"></i> Instagram</a>
                </div>
                <div className="col-12 text-center mt-2">
                  <a href="http://youtube.com/" className="btn button-hover-bg-gradient bg-blue text-white" target="_blank" rel="noreferrer">Share on <i className="fa fa-youtube fa-2x"></i> YouTube</a>
                </div>
              </div>
            </div>
          </ModalBody>
        </Modal>
      </React.Fragment>
    )
  }

}

export default Header;