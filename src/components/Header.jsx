import { Container,Navbar,Nav,Form,FormControl } from "react-bootstrap"
import { useState } from "react"
import {BiSun, BiMoon, BiShoppingBag} from 'react-icons/bi'

function Header() {
    const [mode, setMode] = useState(true)
    const toggleMode = () => {
        setMode(!mode)
    }

  return (
    <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                <div style={{paddingLeft : '200px'}}>
                <Navbar.Brand href="#home">React Shop</Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">패션</Nav.Link>
                    <Nav.Link href="#pricing">액세서리</Nav.Link>
                    <Nav.Link href="#digital">디지털</Nav.Link>
                    </Nav>
                    <Nav>
                    <div className="toggleButton" onClick={toggleMode} style={{marginRight : '10px'}}>
                        {mode ? (<BiSun size="36" color="white"/>) : (<BiMoon size="36" color="white"/>)}
                    </div>
                    <Form className="d-flex">
                        <FormControl
                        type="search"
                        placeholder="검색"
                        className="me-2"
                        aria-label="Search"
                        />
                    </Form>
                    <div style={{paddingRight : '150px'}}>
                        <BiShoppingBag size="36" color="white"/>
                    </div>
                    </Nav>
                </Navbar.Collapse>
                </Container>
            </Navbar>
  </>
  )
}

export default Header