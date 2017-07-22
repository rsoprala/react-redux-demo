import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>React Redux Simple Demo!</h1>
      <Link to="about" className="btn btn-primary btn-lg">About</Link>
    </div>
  );
};

export default HomePage;
