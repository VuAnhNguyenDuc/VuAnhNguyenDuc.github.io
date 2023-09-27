import React, { Component } from "react";
import data from "../../data.json";

const workExperience = data.work_experience;

function getRandomInteger(min, max) {
  return Math.floor(Math.random())
}

export default class ExperienceSection extends Component {
  render() {
    return (
      <section className="colorlib-experience" data-section="experience">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{workExperience.title}</span>
              <h2 className="colorlib-heading animate-box">
                {workExperience.subtitle}
              </h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                {workExperience.items.map((item, index) => (
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect={item.fade_in}
                    key={index}
                  >
                    <div className="timeline-entry-inner">
                      <div className={`timeline-icon color-${index%5}`}>
                        <i className={item.icon} />
                      </div>

                      <div className="timeline-label">
                        <h2>
                          <p
                            href="/"
                            dangerouslySetInnerHTML={{ __html: item.title }}
                          />{" "}
                          <span>{item.period}</span>
                        </h2>
                        <p dangerouslySetInnerHTML={{ __html: item.content }} />
                      </div>
                    </div>
                  </article>
                ))}
                <article
                  className="timeline-entry begin animate-box"
                  data-animate-effect="fadeInBottom"
                >
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none" />
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
