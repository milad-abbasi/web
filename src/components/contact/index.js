import React, { Component } from 'react';
import axios from 'axios';

import './index.scss';
import Map from '../map';
import values from './sample';

class Contact extends Component {
  state = { values, name: '', email: '', title: '', msg: '' };

  submit = (e) => {
    e.preventDefault();

    console.log({ name: this.state.name, email: this.state.email, title: this.state.title, msg:this.state.msg });

    axios.post('http://localhost:8000', {
      name: this.state.name, email: this.state.email, title: this.state.title, msg:this.state.msg
    }).then(res => {
      console.log(res.data);
    })
  }

  onName = e => {
    this.setState({ name: e.target.value });
  }

  onEmail = e => {
    this.setState({ email: e.target.value });
  }

  onTitle = e => {
    this.setState({ title: e.target.value });
  }

  onMsg = e => {
    this.setState({ msg: e.target.value });
  }

  render() {
    return (
      <div className="jumbotron mt-1 mb-0 pt-5">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5 pr-3">
            <h4>Contact Info:</h4>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus
              necessitatibus illum earum vel repellat, tempora dignissimos tempore
              maiores temporibus perspiciatis?
            </p>
  
            <h6>
              Address: <span>Iran, Tehran</span>
            </h6>
            <h6>
              Phone: <span>+44 123 456 789</span>
            </h6>
            <h6>
              Email: <span>professionals@gmail.com</span>
            </h6>
            <h6>
              Fax: <span>+44 123 456 789</span>
            </h6>
          </div>
          <div className="col-12 col-sm-12 col-md-7">
            <form onSubmit={this.submit}>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="border-0 form-control"
                      name="name"
                      value={this.state.name}
                      onChange={this.onName}
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="border-0 form-control"
                      name="email"
                      value={this.state.email}
                      onChange={this.onEmail}
                    />
                  </div>
                </div>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Your Title"
                  className="form-control border-0"
                  name="title"
                  value={this.state.title}
                  onChange={this.onTitle}
                />
              </div>
              <div className="form-group">
                <textarea
                  className="form-control border-0"
                  rows="6"
                  placeholder="Message"
                  name="msg"
                  value={this.state.msg}
                  onChange={this.onMsg}
                />
              </div>
              <button className="btn btn-lg btn-primary">SEND MESSAGE</button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <Map />
        </div>
      </div>
    );
  }
}

export default Contact;
