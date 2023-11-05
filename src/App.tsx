import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/auth/login'
import SignUp from './pages/auth/signup';
import Home from './pages/home/home';
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from './modules/auth/protectedRoutes';
import UserOption from './pages/userOption';
import ProfileForm from './pages/profile/profile-form';
import Layout from './layout/layout';
import Job from './pages/dashboard/job';
import Posts from './pages/dashboard/posts';
import Profile from './pages/dashboard/profile';
import ResumeBuilder from './modules/resume-builder/page';

function App():JSX.Element {
  return (
    <>
    <UserAuthContextProvider>
      <Layout>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<SignUp/> } />
          <Route path='/resume-builder' element={<ResumeBuilder/> } />
          <Route path="/selectuser" element={<ProtectedRoute><UserOption></UserOption></ProtectedRoute>}/>
          <Route path="/profileform" element={<ProtectedRoute><ProfileForm/></ProtectedRoute>}/>
          <Route path="/jobs" element={<ProtectedRoute><Job/></ProtectedRoute>}/>
          <Route path="/posts" element={<ProtectedRoute><Posts/></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        </Routes>
      </Layout>
    </UserAuthContextProvider>
    </>
    
  );
}

export default App;
