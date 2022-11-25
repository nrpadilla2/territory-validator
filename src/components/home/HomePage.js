import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='jumbotron'>
    <h1>Territory Validator</h1>
    <p>Please create or import your configuration file.</p>
    <Link to='services' className='btn btn-primary btn-lg'>
      Create Configuration
    </Link>
  </div>
);

export default HomePage;
