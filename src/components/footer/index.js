import React from 'react';

import './index.scss';

const items = [
  ['Projects', 'About', 'Services', 'Carreer'],
  ['News', 'Events', 'Contact', 'Legals'],
  ['Facebook', 'Twitter', 'Instagram', 'Dribble']
];

function renderItems() {
  return items.map(item => {
    return (
      <div className="col-12 col-sm-12 col-md-4">
        <ul className="p-0">
          <li>
            <a href="/">{item[0]}</a>
          </li>
          <li>
            <a href="/">{item[1]}</a>
          </li>
          <li>
            <a href="/">{item[2]}</a>
          </li>
          <li>
            <a href="/">{item[3]}</a>
          </li>
        </ul>
      </div>
    );
  });
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid p-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-6">
            <div className="row">
              <div className="col-12 col-sm-12 col-md-6">
                <h6>Piroll Design,Inc.</h6>
                <p>
                  &copy; 2017 Piroll All right reserved.
                  <br />
                  Designed by professionals
                </p>
              </div>
              <div className="col-12 col-sm-12 col-md-6">
                <p>professionals@gmail.com</p>
                <p>+44 123 456 789</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6">
            <div className="row">{renderItems()}</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
