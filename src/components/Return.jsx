import React from 'react';
import { Link } from 'react-router-dom';
import '../css/return.css';

const Return = ({ to = "/Home", className = "" }) => {
  return (
    <div className={`return ${className}`}>
      <Link to={to}>return</Link>
    </div>
  );
};

export default Return;