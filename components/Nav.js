import Link from 'next/link';
import Router from 'next/router';

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
        <Navbar inverse collapseOnSelect className="navbar-container">
          <Navbar.Header>


              <a href="/"><Image className="navbar-logo" src="/static/images/fichman-logo-new.png"/></a>

          <Navbar.Toggle />
          </Navbar.Header>
          
          <Navbar.Collapse>
            <Nav pullRight className="nav-bar">

              <NavItem eventKey={0} href="#" >
                <span className="nav-btn" onClick={() => Router.push('/')}>Home</span> 
              </NavItem>
              <NavDropdown eventKey={1} title="About" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem eventKey={1.1}><span onClick={() => Router.push('/about')}>About Fichman Eye Center</span></MenuItem> 
                <MenuItem divider/>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/about/surgery-center')}>Surgey Center</span></MenuItem>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/about/optical-boutique')}>Optical Boutique</span></MenuItem>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/about/costs-fees')}>Costs & Fees</span></MenuItem>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/about/insurances')}>Insurances We Accept</span></MenuItem>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/about/patient-financing')}>Patient Financing</span></MenuItem>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/about/testimonials')}>Testimonials</span></MenuItem>
                <MenuItem eventKey={1.2}><span onClick={() => Router.push('/office-tours')}>Office Tours</span></MenuItem>
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
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/patient-education')}>Patient Education</span></MenuItem>
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/patient-forms')}>Patient Forms</span></MenuItem>
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/informational-videos')}>Informational Videos</span></MenuItem>
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/lasik')}>Lasik Information</span></MenuItem>
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/privacy-policy')}>Privacy Policy</span></MenuItem>
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/FAQs')}>FAQ</span></MenuItem>
              <MenuItem eventKey={1.2}><span onClick={() => Router.push('/resources/laser-assisted-cataract-surgery')}>Cataract Surgery</span></MenuItem>
              
                <MenuItem divider />
                
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>

              <NavDropdown eventKey={3} title="Our Doctors" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem eventKey={3.1}><span onClick={() => Router.push('/doctors')}>Meet Our Doctors</span></MenuItem>
                <MenuItem divider />
                <MenuItem eventKey={3.2}><span onClick={() => Router.push("/doctors/Richard-Fichman-MD")}>Richard Fichman, M.D.</span></MenuItem>
                <MenuItem eventKey={3.3}><span onClick={() => Router.push("/doctors/Dr-Steven-Tu")}>Steve Tu, D.O.</span></MenuItem>
                <MenuItem eventKey={3.3}>Separated link</MenuItem>
              </NavDropdown>

              <NavItem eventKey={0} href="#" >
                <span className="nav-btn" onClick={() => Router.push('/contact')}>Contact</span> 
              </NavItem>
              
            </Nav>
          </Navbar.Collapse>

          
        </Navbar>
      </div>
    );
  }
}
