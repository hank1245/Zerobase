import './App.css';
import { Routes, Route,} from 'react-router-dom'
import {useRecoilValue} from 'recoil';
import {darkModeState} from './atoms/darkMode';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import CategoryPage from './pages/CategoryPage';
import ErrorPage from './pages/ErrorPage';
import Footer from './components/Footer';

function App() {
  const isDarkMode = useRecoilValue(darkModeState)

  return (
    <>
    <div className={isDarkMode ? 'App_dark' : 'App_light'}>
      <Header/>
      <Routes>
        <Route path ='/' element={<Dashboard/>}/>
        <Route path ='products/:category' element={<CategoryPage/>}/>
        <Route path = '*' element={<ErrorPage/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  );
}

export default App;
