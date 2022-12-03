import React from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './about/AboutPage';
import ErrorPage from './error/ErrorPage';
import HomePage from './home/HomePage';
import EditPrioritesPage from './priority/EditPrioritiesPage';
import EditServicesPage from './services/EditServicesPage';

function App() {
  return (
    <Container fluid='md'>
      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/services' element={<EditServicesPage />} />
        <Route path='/priorities' element={<EditPrioritesPage />} />
        <Route path='*' element={<ErrorPage error='Page not found' />} />
      </Routes>
    </Container>
  );
}

export default App;
