import './App.css';
import Header from './components/Header';
import { Routes, Route,} from 'react-router-dom'
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className='App'>
      <Header/>
      <Routes>
        <Route path ='/' element={<Dashboard/>}/>
        <Route path = '*' element={<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
