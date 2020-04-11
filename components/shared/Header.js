// import React from 'react';
// import Link from 'next/link';

// class Header extends React.Component {

//     render() {

//         return (
//             <React.Fragment>
                // <Link href = "/">
                //     <a className = "customClassFromFile"> Home</a>
                // </Link>

                // <Link href = "/about">
                //     <a> About</a>
                // </Link>

//                 <Link href = "/blogs">
//                     <a> Blogs</a>
//                 </Link>
                
//                 <Link href = "/portfolios">
//                     <a> Porfolios</a>
//                 </Link>

//                 <Link href = "/cv">
//                     <a> Cv</a>
//                 </Link>
//                 {/* <NextLink route='/test/1'>Test 1</NextLink>
//                 <NextLink route='/test/2'>Test 2</NextLink> */}
//             </React.Fragment>
//         )
//     }
// }

// export default Header;

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Clyde Danac</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/blogs" title="Blog" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <BsNavLink route="/cv" title="Cv" />
            </NavItem>
            <NavItem className="port-navbar-item">
              <Login/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;

const BsNavLink = (props) => {
  const {route, title} = props;
  return(
    <Link href={route}>
      <a className= "nav-link port-navbar-link"> {title} </a>
    </Link>
  )
}


const Login = () => {
  return (
    <span className="nav-link port-navbar-link">Login</span>
  )
}

