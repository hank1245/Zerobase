import {BiSun, BiMoon, BiShoppingBag} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineSearch} from 'react-icons/ai';
import {useRecoilState} from 'recoil';
import {darkModeState} from "../atoms/darkMode";
import styles from './style/header.module.css';
import {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import {CategoryKR} from "../constants/category";
import axios from 'axios';
import ShoppingCount from './ShoppingCount'

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [productData, setProductData] = useState()
  const [searchInput, setSearchInput] = useState('')
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const $body = document.getElementsByTagName('body')[0];

  useEffect(() => {
    async function fetchData() {
      const products = await axios.get('/products.json')
      setProductData(products.data)
    }
    fetchData()
  }, []);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('reactShopIsDarkMode', !isDarkMode);
  };
  const toggleSearchActive = () => {
    setIsSearchActive(!isSearchActive);
  }
  const drawerOpen = () => {
    setIsDrawerOpen(true)
    $body.classList.add('stopScrolling');
  }
  const drawerClose = (e) => {
    if(e.target.classList.contains(styles.drawerList)) return;
    setIsDrawerOpen(false);
    $body.classList.remove('stopScrolling');
  }

  return (
  <>
    <nav className={(isDarkMode ? styles.App_dark : styles.App_light) + " " +  styles.navbar}>
      <div className={styles.container}>
        <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className={styles.navbarToggler} onClick={drawerOpen}>
          <GiHamburgerMenu size="24" fill={isDarkMode ? "white" : "black"}/>
        </button>
        <h1 className={styles.brandLogo}>
          <Link to="/" key="brandLogo" className={styles.navbarBrand}>React Shop</Link>
        </h1>
        <div className={styles.navbarNav + " " + styles.categoryArea}>
          {Object.entries(CategoryKR).map((category) => (
            <Link to={`/${category[0]}`} key={category[0]} className={styles.navLink}>
              {category[1]}
            </Link>
          ))}
        </div>
        <div className={styles.navbarNav + " " + styles.rightArea}>
          <div className={styles.toggleButton} onClick={toggleMode}>
            <BiSun className={styles.sun + (isDarkMode ? " " + styles.active : "")} size="26" fill="white"/>
            <BiMoon className={styles.moon + (isDarkMode ? "" : " " + styles.active)} size="26" fill="black"/>
          </div>
          <button className={styles.searchBtn} onClick={toggleSearchActive}>
            <AiOutlineSearch size="24" fill={isDarkMode ? "white" : "black"}/>
          </button>
          <form className={styles.searchArea + " " + (isSearchActive ? styles.active : styles.notActive)}>
            <input placeholder="검색" aria-label="Search" type="search" className={styles.searchBox} onChange={(e) => 
            setSearchInput(e.target.value)}/>
          </form>
          <ul className={styles.searchList}>
            {productData && productData.filter((val) => {
              if(searchInput == "") {
                return false
              } else if(val.title.toLowerCase().includes(searchInput.toLowerCase())) {
                return val
              }
            }).map(product => (
              <li key={product.id}><Link to={`/product/${product.id}`}>{product.title}</Link></li>
            ))}
          </ul>


          <Link to={"cart"} key={"cart"} className={styles.cartIcon}>
            <BiShoppingBag size="24" fill={isDarkMode ? "white" : "black"}/>
            <ShoppingCount/>
          </Link>
        </div>
      </div>
      <div className={styles.drawer + (isDrawerOpen ? " " + styles.active : "")} onClick={drawerClose}>
        <ul className={styles.drawerList}>
          {Object.entries(CategoryKR).map((category) => (
            <li className={styles.drawerItem}>
              <Link to={`/${category[0]}`} key={`${category[0]}Drawer`} className={styles.drawerCategoryItem}>
                {category[1]}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  </>
  )
}

export default Header