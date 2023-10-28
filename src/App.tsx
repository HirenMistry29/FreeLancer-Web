import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup';
import Home from './pages/home/home';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './modules/auth/protectedRoutes';
import UserOption from './pages/userOption';
import ProfileForm from './pages/profile/profile-form';

function App():JSX.Element {
  return (
    <>
    <UserAuthContextProvider>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<SignUp/> } />
        <Route path="/selectuser" element={<ProtectedRoute><UserOption></UserOption></ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute><ProfileForm/></ProtectedRoute>}/>
      </Routes>
    </UserAuthContextProvider>
    </>
    
  );
}

export default App;
