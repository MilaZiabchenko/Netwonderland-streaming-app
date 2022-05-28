import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shows from './pages/Shows';
import ShowDetails from './pages/ShowDetails';
import Favorites from './pages/Favorites';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <>
      {/* <AuthProvider> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shows' element={<Shows />} />
          <Route path='/shows/:showId' element={<ShowDetails />} />
          <Route path='/favorites' element={<Favorites />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
      </BrowserRouter>
      {/* </AuthProvider> */}
    </>
  );
}

export default App;
