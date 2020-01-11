import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './index.scss';

class Header extends Component {
  state = { active: '' };

  chnageActive = e => {
    const active = e.target.href.split('/').pop();

    this.setState({ active });
  };

  render() {
    return (
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a href="/" className="navbar-brand">
            <img src={require('./logo.svg')} alt="" />
          </a>
          <div>
            <ul className="navbar-nav">
              <li className="nav-item text-center">
                <Link
                  to="/"
                  className={`nav-link ${
                    this.state.active === '' ? 'active-link' : ''
                  }`}
                  onClick={this.chnageActive}
                >
                  HOME
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link
                  to="/about"
                  className={`nav-link ${
                    this.state.active === 'about' ? 'active-link' : ''
                  }`}
                  onClick={this.chnageActive}
                >
                  ABOUT
                </Link>
              </li>
              <li className="nav-item text-center">
                <Link
                  to="/contact"
                  className={`nav-link ${
                    this.state.active === 'contact' ? 'active-link' : ''
                  }`}
                  onClick={this.chnageActive}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
