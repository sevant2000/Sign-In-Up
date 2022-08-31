import React from 'react'
import { Navbar } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Nav } from 'react-bootstrap'

function Header() {
  return (
    <>
        <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Welcome...!</Navbar.Brand>
    </Container>
    </Navbar>
    </>
  )
}

export default Header