import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
  return (
    <>
    <div>
      
      <Navbar className="bg-body-tertiar bg-dark ">
        <Container>
          <Navbar.Brand href="#home" className='text-light'>
          <i className="fa-solid fa-clapperboard fa-fade me-3" style={{color: '#ffffff'}}></i>
          
            
          {' '}
            Media Player 
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
    </>
  )
}

export default Header