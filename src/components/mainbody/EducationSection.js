import React, { Component } from "react";
import data from "../../data.json";

const education = data.education;

export default class EducationSection extends Component {
  render() {
    return (
      <section className="colorlib-education" data-section="education">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{education.title}</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">
                {education.subtitle}
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <div className="fancy-collapse-panel">
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  {education.items.map((item, index) => (
                    <div className="panel panel-default" key={item.key}>
                      <div
                        className="panel-heading"
                        role="tab"
                        id={`heading${item.order}`}
                      >
                        <h4 className="panel-title">
                          <a
                            data-toggle="collapse"
                            data-parent="#accordion"
                            href={`#collapse${item.order}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse${item.order}`}
                            className={index === 0 ? "" : "collapsed"}
                          >
                            {item.key}
                          </a>
                        </h4>
                      </div>
                      <div
                        id={`collapse${item.order}`}
                        className={`panel-collapse collapse ${
                          index === 0 ? "in" : ""
                        }`}
                        role="tabpanel"
                        aria-labelledby={`heading${item.order}`}
                      >
                        <div className="panel-body">
                          <div className="row">
                            <p
                              dangerouslySetInnerHTML={{ __html: `${item.value} <a href="${item.path}" target="_blank">VIEW CERTIFICATE</a>` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
