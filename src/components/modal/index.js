import React, { Component } from 'react';
import './index.scss';

class Modal extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };
  render() {
    console.log(this.props.show);
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal-wraper">
        <div className="custom-modal" id="modal">
          <h2>Modal Window</h2>
          <div className="content">{this.props.children}</div>
          <div className="actions">
            <button className="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
