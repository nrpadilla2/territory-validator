import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import ErrorPage from './error/ErrorPage';
import HomePage from './home/HomePage';
import EditServicesPage from './services/EditServicesPage';

function App() {
  return (
    <div className='container-fluid'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<EditServicesPage />} />
        <Route path='*' element={<ErrorPage error='Page not found' />} />
      </Routes>
    </div>
  );
}

export default App;
