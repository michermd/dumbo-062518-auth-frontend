import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = props => {
  return (
    <div className="ui top fixed inverted menu">
      <Link to="/" className="item">
        <h2 className="ui header white">
          <i className='user secret icon'/>
          <div className="content"> Auth App </div>
          <div className="sub header white">You need a crime (identity theft), a detective (you), and the solution (this app).</div>
        </h2>
      </Link>
      <div className="right menu">
          <h5 className='item'>Welcome [insert username here]</h5>
          <a className="item">
            <div className="ui button">
              Logout
            </div>
          </a>
      </div>
    </div>
  );
};

export default NavBar
