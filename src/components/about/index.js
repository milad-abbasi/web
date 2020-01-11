import React from 'react';

import './index.scss';

const items = [
  {
    name: 'fa-suitcase',
    number: 548,
    description: 'Projects Completed'
  },
  {
    name: 'fa-clock',
    number: 1465,
    description: 'Working Hours'
  },
  {
    name: 'fa-star',
    number: 612,
    description: 'Positive Feedbacks'
  },
  {
    name: 'fa-heart',
    number: 735,
    description: 'Happy Clients'
  }
];

function renderItems() {
  return items.map(item => {
    return (
      <div className="col-12 col-sm-12 col-md-3 d-flex justify-content-md-center align-items-center p-2 item-hover">
        <div className="about-showcase-icon">
          <i className={`fas ${item.name} fa-4x`}></i>
        </div>
        <div className="ml-lg-4 ml-2">
          <p className="mb-1">{item.number}</p>
          <p className="mb-0">{item.description}</p>
        </div>
      </div>
    );
  });
}

function About() {
  return (
    <>
      <div className="about about-img">
        <div className="about-us text-center">
          <h1>Amelia Woods</h1>
          <p>I am a Graphic and Web Designer based in New York, specializing</p>
          <p>in User Interface Design and Development</p>
        </div>
      </div>
      <div className="about-showcase container-fluid d-flex align-items-center">
        <div className="row flex-fill">{renderItems()}</div>
      </div>
      <div className="about about-me-img">
        <div className="about-me">
          <h1 className="text-left">About me</h1>
          <p>
            Given let waters air sea had you'll, may seed abundantly fish. Were,
            you'll earth forth winged above brought. Own darkness they're him
            can't fourth sea place have.
          </p>
          <p>
            So the above May stars cattle fruitful face shall. Tree it, winged.
            Every signs male firmament us. Morning him.
          </p>
          <img src={require('./images/sig.png')} alt="" />
        </div>
      </div>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 col-sm-12 text-center">
            <h1>Need a Project?</h1>
            <p>
              Let us know what you're looking for in an agency. We'll take a
              look and see if this could be the start of something beautiful.
            </p>
            <button className="btn btn-lg">let's talk</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
