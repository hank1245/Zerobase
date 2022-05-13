import { Container,Navbar,Nav,Form,FormControl } from "react-bootstrap";
import { useState } from "react";
import {BiSun, BiMoon, BiShoppingBag} from 'react-icons/bi';
import {useDispatch} from "react-redux";

function Header() {
  const [mode, setMode] = useState(true);
  const [theme, setTheme] = useState('dark');

  const dispatch = useDispatch();

  const toggleMode = () => {
    setMode(!mode)
    if (mode) {
      dispatch({type: 'light'});
      setTheme('light');
    } else {
      dispatch({type: 'dark'});
      setTheme('dark');
    }
  }

  return (
  <>
    <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme} sticky="top">
      <Container>
        {/* <div style={{paddingLeft : '200px'}}> */}
        <h1 style={{margin: 0, display: 'flex', alignItems: 'center'}}>
          <Navbar.Brand href="/">React Shop</Navbar.Brand>
        </h1>
        {/* </div> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="fashion">패션</Nav.Link>
            <Nav.Link href="accessory">액세서리</Nav.Link>
            <Nav.Link href="digital">디지털</Nav.Link>
          </Nav>
          <Nav>
            <div className="toggleButton" onClick={toggleMode} style={{marginRight : '10px', cursor: 'pointer'}}>
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