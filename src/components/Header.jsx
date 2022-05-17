import { Container,Navbar,Nav,Form,FormControl } from "react-bootstrap";
import {BiSun, BiMoon, BiShoppingBag} from 'react-icons/bi';
import {useRecoilState} from 'recoil';
import {darkModeState} from "../atoms/darkMode";
import './style/header.css';

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('reactShopIsDarkMode', !isDarkMode);
  };

  return (
  <>
    <Navbar collapseOnSelect expand="lg" bg={isDarkMode ? "dark" : "light"} variant={isDarkMode ? "dark" : "light"} sticky="top">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <h1 className="brandLogo">
          <Navbar.Brand href="/">React Shop</Navbar.Brand>
        </h1>
          <Nav className="me-auto">
            <Nav.Link href="fashion">패션</Nav.Link>
            <Nav.Link href="accessory">액세서리</Nav.Link>
            <Nav.Link href="digital">디지털</Nav.Link>
          </Nav>
          <Nav>
            <div className="toggleButton" onClick={toggleMode} style={{marginRight : '10px', cursor: 'pointer'}}>
            <BiSun className={`sun ${isDarkMode ? " active" : ""}`} size="28" fill="white"/>
            <BiMoon className={`moon ${isDarkMode ? "" : " active"}`} size="28" fill="black"/>
            </div>
            <Form className="d-flex">
              <FormControl
              type="search"
              placeholder="검색"
              className="me-2"
              aria-label="Search"
              />
            </Form>
            <div style={{marginLeft : '0.25rem'}}>
              <BiShoppingBag size="36" color={isDarkMode ? "white" : "black"}/>
            </div>
          </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Header