
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import backgroundImage from './assets/home/rm218batch4-ning-34.jpg'
import RequiredAuth from './Pages/Login/RequiredAuth';

function App() {
  return (
    <div style={{
      background: `url(${backgroundImage})`,
      backgroundSize: 'cover'
    }}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<RequiredAuth><Home></Home></RequiredAuth>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
