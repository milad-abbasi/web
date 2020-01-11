import React, { Component } from "react";

import "./index.scss";
import Modal from '../modal';

class Home extends Component {
  state = { show: false, imageSrc: '' };

  showModal = imageSrc => {
    this.setState({
      show: !this.state.show,
      imageSrc
    });
  };

  renderBoxes() {
    const boxes = [];
    const style = { width: "100%", height: "100%" };

    for (let i = 1; i <= 12; i++) {
      const imageSrc = `./images/demo${i}.jpg`;

      boxes.push(
        <div
          className="col-sm-12 col-lg-3 p-0"
          onClick={() => this.showModal(imageSrc)}
          key={i}
        >
          <div className="sample">
            <img src={require(`./images/demo${i}.jpg`)} style={style} alt="" />
            <div
              className="sample-layer d-flex justify-content-md-center align-items-center"
              style={style}
            >
              <i className="fas fa-eye fa-3x" />
            </div>
          </div>
        </div>
      );
    }

    return boxes;
 }

  render() {
    return (
      <>
        <div className="jumbotron mt-1 mb-0">
          <div className="container text-center">
            <h1>UI/UX & Graphic Designer</h1>
            <p>
              I am a Graphic & Web Designer based in New York, specializing in
              User Interface Design and Development.
            </p>
          </div>
        </div>
        <div className="row m-0">{this.renderBoxes()}</div>
        <Modal onClose={this.showModal} show={this.state.show}>
          <img src={this.state.imageSrc} alt="" width="460px" />
        </Modal>
      </>
    );
  }
}

export default Home;
