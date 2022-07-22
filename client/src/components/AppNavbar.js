import React, { Component } from 'react';
import { FaDeezer } from 'react-icons/fa';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Container } from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    console.log(this.state.isOpen);
  }

  render() {
    return (
      <div>
        <Navbar expand="md" fixed="top" className="m-5 ">
          <Container className='' fluid>
            <Nav>
              <NavbarBrand href="/" className='flex-grow-1'><span className='m-2'><FaDeezer/> </span>vboard</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className='ml-auto justify-content-end flex-grow-1 ' navbar>
                {[
                  ['Home', '/'],
                  ['Tests', '/testlink'],
                  ['Contact', '/contact'],
                  ['About', '/about'],
                ].map(([title, url]) => (
                  <NavItem className='mx-3 '>
                    <NavLink href={url}>
                      {title}
                    </NavLink>
                  </NavItem>
                ))}
              </Nav>
            </Collapse>
            </Nav>
            
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default AppNavbar;