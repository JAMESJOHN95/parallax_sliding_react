import React from 'react'
import './common.css'
import{ Navbar,Container} from 'react-bootstrap'
import logo from '../images/logo.jpg'

function Navbar1() {
  return (
    <>
<Navbar className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">
          <img style={{height:'60px',width:'80px'}} src={logo} alt="Logo" />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Navbar1