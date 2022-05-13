import './App.css';
import Header from './components/Header';
import { Routes, Route,} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import Fashion from './pages/Fashion';
import ErrorPage from './pages/ErrorPage';
import {useSelector} from "react-redux";

function App() {
  const theme = useSelector(state => state['theme']);

  return (
    <div className={`App ${theme}`}>
      <Header/>
      <Routes>
        <Route path ='/' element={<Dashboard/>}/>
        <Route path =':category' element={<Fashion/>}/>
        <Route path = '*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
