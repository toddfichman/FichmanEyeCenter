import Router from 'next/router';

import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Image
} from "react-bootstrap";



const timeoutLength = 300;

export default class Navigation extends Component {
  

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

              <NavItem className="nav-btn" eventKey={0} onClick={() => Router.push('/')} >
                Home 
              </NavItem>
              <NavDropdown eventKey={1} title="About" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem onClick={() => Router.push('/about')} eventKey={1.1}>About Fichman Eye Center</MenuItem> 
                <MenuItem divider/>
                <MenuItem onClick={() => Router.push('/about/surgery-center')} eventKey={1.2}>Surgey Center</MenuItem>
                <MenuItem onClick={() => Router.push('/about/optical-boutique')} eventKey={1.2}>Optical Boutique</MenuItem>
                <MenuItem onClick={() => Router.push('/about/costs-fees')} eventKey={1.2}>Costs & Fees</MenuItem>
                <MenuItem onClick={() => Router.push('/about/insurances')} eventKey={1.2}>Insurances We Accept</MenuItem>
                <MenuItem onClick={() => Router.push('/about/patient-financing')} eventKey={1.2}>Patient Financing</MenuItem>
                <MenuItem onClick={() => Router.push('/about/testimonials')} eventKey={1.2}>Testimonials</MenuItem>
                <MenuItem onClick={() => Router.push('/office-tours')}eventKey={1.2}>Office Tours</MenuItem>
              </NavDropdown>
            
              <NavDropdown eventKey={3} title="Resources" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem onClick={() => Router.push('/resources/patient-education')}eventKey={1.2}> Patient Education</MenuItem>
                <MenuItem onClick={() => Router.push('/resources/patient-forms')} eventKey={1.2}> Patient Forms</MenuItem>
                <MenuItem onClick={() => Router.push('/resources/informational-videos')} eventKey={1.2}> Informational Videos</MenuItem>
                <MenuItem onClick={() => Router.push('/resources/lasik')} eventKey={1.2}> Lasik Information</MenuItem>
                <MenuItem onClick={() => Router.push('/resources/privacy-policy')} eventKey={1.2}> Privacy Policy</MenuItem>
                <MenuItem onClick={() => Router.push('/resources/FAQs')} eventKey={1.2}> FAQ</MenuItem>
                <MenuItem onClick={() => Router.push('/resources/laser-assisted-cataract-surgery')} eventKey={1.2}> Cataract Surgery</MenuItem>
              </NavDropdown>

              <NavDropdown eventKey={3} title="Our Doctors" id="basic-nav-dropdown" className="nav-btn">
                <MenuItem onClick={() => Router.push('/doctors')} eventKey={3.1}> Meet Our Doctors</MenuItem>
                <MenuItem divider />
                <MenuItem onClick={() => Router.push("/doctors/Richard-Fichman-MD")} eventKey={3.2}> Richard Fichman, M.D.</MenuItem>
                <MenuItem onClick={() => Router.push("/doctors/Dr-Steven-Tu")} eventKey={3.3}> Steve Tu, D.O.</MenuItem>
              </NavDropdown>

              <NavItem eventKey={0} className="nav-btn" onClick={() => Router.push('/contact')} >
                 Contact 
              </NavItem>
              
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
