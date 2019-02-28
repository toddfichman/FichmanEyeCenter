import Link from 'next/link';

import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Collapse,
  Image
} from "react-bootstrap";



const timeoutLength = 300;

export default class Navigation extends Component {
  state = {
    isOpen: false,
    // anchorEl: null,
    // mouseOverButton: false,
    // mouseOverMenu: false,
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

//   enterButton = () => {
//     this.setState({ mouseOverButton: true });
//   }

//   leaveMenu = () => {
//     setTimeout(() => {
//      this.setState({ mouseOverMenu: false });
//     }, timeoutLength);
//  }

  render() {
    return (
      <div>
        <Navbar inverse collapseOnSelect >
          <Navbar.Header>


              <a href="/"><Image className="navbar-logo" src="/static/fichman-logo-new.png"/></a>

          <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight className="nav-bar">

              <NavItem eventKey={0} href="#" className="nav-btn">
                <Link href="/"><a>Home</a></Link> 
              </NavItem>
              <NavDropdown eventKey={1} title="About" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem eventKey={1.1}><Link href="/about"><span><a>About</a></span></Link></MenuItem>
                <MenuItem eventKey={1.2}>Another action</MenuItem>
                <MenuItem eventKey={1.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={1.4}>Separated link</MenuItem>
              </NavDropdown>
             
                {/* <NavDropdown
                  title="About"
                  anchorEl={this.state.anchorEl}
                  onMouseEnter={ this.handleOpen }
                  onMouseLeave={ this.handleClose }
                  open={this.state.isOpen}
                  noCaret
                  id="about-dropdown"
                  eventKey={3}
                >
                  <MenuItem eventKey={3.1}>Action</MenuItem>
                  <MenuItem eventKey={3.2}>Another action</MenuItem>
                  <MenuItem eventKey={3.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={3.3}>Separated link</MenuItem>
                </NavDropdown> */}

              {/* <NavDropdown eventKey={2} title="Contact" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem eventKey={2.1}>Action</MenuItem>
                <MenuItem eventKey={2.2}>Another action</MenuItem>
                <MenuItem eventKey={2.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={2.3}>Separated link</MenuItem>
              </NavDropdown> */}

              
             

              {/* <Collapse >
                <NavDropdown
                  title="Contact"
                  onMouseEnter={this.handleOpen}
                  onMouseLeave={this.handleClose}
                  open={this.state.isOpen}
                  noCaret
                  id="contact-dropdown"
                  eventKey={4}
                >
                  <MenuItem eventKey={4.1}>Action</MenuItem>
                  <MenuItem eventKey={4.2}>Another action</MenuItem>
                  <MenuItem eventKey={4.3}>Something else here</MenuItem>
                  <MenuItem divider />
                  <MenuItem eventKey={4.3}>Separated link</MenuItem>
                </NavDropdown>
              </Collapse> */}

              <NavDropdown eventKey={3} title="Resources" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem eventKey={3.1}>Action</MenuItem>
                <MenuItem eventKey={3.2}>Another action</MenuItem>
                <MenuItem eventKey={3.3}>Something else here</MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>

              <NavItem eventKey={0} href="#" className="nav-btn">
                <Link href="/contact"><a>Contact</a></Link> 
              </NavItem>
              
            </Nav>
          </Navbar.Collapse>

          
        </Navbar>
      </div>
    );
  }
}
