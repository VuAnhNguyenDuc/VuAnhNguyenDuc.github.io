import React, { Component } from "react";
import data from "../../data.json";
import { Button, Modal } from "react-bootstrap";

const my_work = data.my_work;

class ProjectInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };

    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleClose() {
    this.setState({
      show: false
    });
  }

  handleShow() {
    this.setState({
      show: true
    });
  }

  render() {
    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Read more
        </Button>

        <Modal
          show={this.state.show}
          style={{ opacity: 1 }}
          onHide={this.handleClose}
          dialogClassName="modal-90w"
        >
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              {" "}
              <strong>Duration:</strong> {this.props.data.duration}
            </p>
            <p>
              {" "}
              <strong>Description:</strong> {this.props.data.description}
            </p>
            <p>
              {" "}
              <strong>Website:</strong>{" "}
              {this.props.data.website ? (
                <a
                  href={this.props.data.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {this.props.data.website}
                </a>
              ) : (
                "No Website available"
              )}
            </p>
            <p>
              {" "}
              <strong>Team Size:</strong> {this.props.data.team_size}
            </p>
            <p>
              {" "}
              <strong>My Position:</strong> {this.props.data.position}
            </p>
            <p>
              {" "}
              <strong>Responsibilities:</strong>{" "}
            </p>
            <ul>
              {this.props.data.responsibilities.map((item, index) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              {" "}
              <strong>Technologies Used:</strong>{" "}
            </p>
            <ul>
              {this.props.data.technologies.map((item, index) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

class WorkSection extends Component {
  render() {
    return (
      <section className="colorlib-work" data-section="work">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{my_work.title}</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">
                {my_work.subtitle}
              </h2>
            </div>
          </div>
          <div className="row">
            {my_work.projects.reverse().map((item, index) => (
              <div
                className={`col-md-6 animate-box ${item.fade_in} animated`}
                data-animate-effect={item.fade_in}
                key={index}
              >
                <div
                  className="project"
                  style={{
                    backgroundImage: `url("${item.image}")`
                  }}
                >
                  <div className="desc">
                    <div className="con">
                      <h3>
                        <a href="/">{item.title}</a>
                      </h3>
                      <span>{item.duration}</span>
                      <span>{item.description}</span>
                      <ProjectInfo data={item} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default WorkSection;