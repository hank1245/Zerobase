import "./App.css";
import styles from './components/style/header.module.css';
import { Routes, Route } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { darkModeState } from "./atoms/darkMode";
import {searchListOpen} from './atoms/searchListOpen';
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import CategoryPage from "./pages/CategoryPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";
import ProductPage from "./pages/ProductPage";
import ShoppingCart from "./components/ShoppingCart";
import ScrollToTop from "./components/ScrollRestoration";

function App() {
  const isDarkMode = useRecoilValue(darkModeState);
  const setIsSearchListOpen = useSetRecoilState(searchListOpen);

  const searchListClose = (e) => {
    if (e.target.classList.contains(styles.searchBox) || e.target.classList.contains(styles.searchList)) return;
    setIsSearchListOpen(false);
  }

  return (
    <>
      <div className={isDarkMode ? "App_dark" : "App_light"} onClick={searchListClose} id='app' >
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/:category" element={<CategoryPage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
