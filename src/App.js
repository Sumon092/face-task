
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import Navbar from './Pages/Shared/Navbar';
import backgroundImage from './assets/home/rm218batch4-ning-34.jpg'
import RequiredAuth from './Pages/Login/RequiredAuth';
import Contact from './Pages/Contact';
import Loading from './Pages/Shared/Loading';
import NotFound from './NotFound';

function App() {
  return (
    <div style={{
      background: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
    }}>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/loading' element={<Loading></Loading>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/contact' element={<RequiredAuth><Contact></Contact></RequiredAuth>}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
