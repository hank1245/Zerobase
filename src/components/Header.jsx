import { useEffect, useState } from "react";
import { Container,Navbar,Nav,Form,FormControl } from "react-bootstrap";
import {BiSun, BiMoon, BiShoppingBag} from 'react-icons/bi';
import {useRecoilState} from 'recoil';
import {darkModeState} from "../atoms/darkMode";
import './style/header.css';
import axios from 'axios'
import {Link} from 'react-router-dom'
import ShoppingCount from "./ShoppingCount";

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [productData, setProductData] = useState()
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    async function fetchData() {
      const products = await axios.get('/products.json')
      setProductData(products.data)
    }
    fetchData()
  })
  

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
            <Nav.Link href="/products/fashion">패션</Nav.Link>
            <Nav.Link href="/products/accessory">액세서리</Nav.Link>
            <Nav.Link href="/products/digital">디지털</Nav.Link>
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
              onChange={(e) => setSearchInput(e.target.value)}/>
            </Form>
            <ul className="searchList">
              {productData && productData.filter((val) => {
                if(searchInput == "") {
                  return false
                } else if(val.title.toLowerCase().includes(searchInput.toLowerCase())) {
                  return val
                }
              }).map(product => (
                <li key={product.id}><Link to={`/products/${product.id}`}>{product.title}</Link></li>
              ))}
            </ul>
            <div className="shopping_list">
              <BiShoppingBag size="36" color={isDarkMode ? "white" : 'black'}/>
              <ShoppingCount count={0}/>
            </div>
          </Nav>
      </Container>
    </Navbar>
  </>
  )
}

export default Header