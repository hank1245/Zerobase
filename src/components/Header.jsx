import {BiSun, BiMoon, BiShoppingBag} from 'react-icons/bi';
import {GiHamburgerMenu} from 'react-icons/gi';
import {AiOutlineSearch} from 'react-icons/ai';
import {useRecoilState} from 'recoil';
import {darkModeState} from "../atoms/darkMode";
import styles from './style/header.module.css';
import {useState} from 'react';
import {Link} from "react-router-dom";
import {CategoryKR} from "../constants/category";

function Header() {
  const [isDarkMode, setIsDarkMode] = useRecoilState(darkModeState);
  const [isSearchActive, setIsSearchActive] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem('reactShopIsDarkMode', !isDarkMode);
  };
  const toggleSearchActive = () => {
    setIsSearchActive(!isSearchActive);
  }

  return (
  <>
    <nav className={(isDarkMode ? styles.App_dark : styles.App_light) + " " +  styles.navbar}>
      <div className={styles.container}>
        <button aria-controls="responsive-navbar-nav" type="button" aria-label="Toggle navigation" className={styles.navbarToggler}>
          <GiHamburgerMenu size="24" fill={isDarkMode ? "white" : "black"}/>
        </button>
        <h1 className={styles.brandLogo}>
          <a href="/" className={styles.navbarBrand}>React Shop</a>
        </h1>
        <div className={styles.navbarNav + " " + styles.categoryArea}>
          {Object.entries(CategoryKR).map((category) => (
            <Link to={`${category[0]}`} key={category[0]} className={styles.navLink}>
              {category[1]}
            </Link>
          ))}
        </div>
        <div className={styles.navbarNav}>
          <div className={styles.toggleButton} onClick={toggleMode}>
            <BiSun className={styles.sun + (isDarkMode ? " " + styles.active : "")} size="26" fill="white"/>
            <BiMoon className={styles.moon + (isDarkMode ? "" : " " + styles.active)} size="26" fill="black"/>
          </div>
          <button className={styles.searchBtn} onClick={toggleSearchActive}>
            <AiOutlineSearch size="24" fill={isDarkMode ? "white" : "black"}/>
          </button>
          <form className={styles.searchArea + " " + (isSearchActive ? styles.active : styles.notActive)}>
            <input placeholder="검색" aria-label="Search" type="search" className={styles.searchBox}/>
          </form>
          <Link to={"cart"} key={"cart"} className={styles.cartIcon}>
            <BiShoppingBag size="24" fill={isDarkMode ? "white" : "black"}/>
          </Link>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Header