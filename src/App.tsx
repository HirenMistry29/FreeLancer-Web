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
import CompanyForm from './pages/company-form/company-form';
import RecruiterLayout from './layout/recruiter-layout';
import PostJob from './pages/recruiter/post-job/post-jobs';
import YourJobs from './pages/recruiter/your-job/your-jobs';

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
          <Route path="/companyform" element={<ProtectedRoute><CompanyForm/></ProtectedRoute>}/>
          <Route path="/jobs" element={<ProtectedRoute><Job/></ProtectedRoute>}/>
          <Route path="/posts" element={<ProtectedRoute><Posts/></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
          {/* <Route path="/post-jobs" element={<PostJob/>}/> */}

        </Routes>
      </Layout>
      {(window.location.pathname==="/post-jobs" || window.location.pathname==="/your-jobs") && 
      <RecruiterLayout>
          <Routes>
            <Route path="/post-jobs" element={<PostJob/>}/>
            <Route path="/your-jobs" element={<YourJobs/>}/>
            
          </Routes>
        </RecruiterLayout>}
    </UserAuthContextProvider>
    </>
    
  );
}

export default App;
