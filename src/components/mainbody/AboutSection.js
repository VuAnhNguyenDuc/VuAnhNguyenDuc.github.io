import React, { Component } from "react";
import data from "../../data.json";

const about = data.about;
const numberOfSpecialties = about.specialties.length;

export default class AboutSection extends Component {
  render() {
    return (
      <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-12">
              <div
                className="row row-bottom-padded-sm animate-box fadeInLeft animated"
                data-animate-effect="fadeInLeft"
              >
                <div className="col-md-12">
                  <div className="about-desc">
                    <span className="heading-meta">{about.title}</span>
                    <h2 className="colorlib-heading">{about.subtitle}</h2>
                    <div dangerouslySetInnerHTML={{ __html: about.content }} />
                  </div>
                </div>
              </div>
              <div className="row">
                {about.specialties.map((item, index) => (
                  <div
                    className={`col-md-${Math.round(
                      12 / numberOfSpecialties
                    )} animate-box ${item.fade_in} animated`}
                    data-animate-effect={item.fade_in}
                    key={item.title}
                  >
                    <div className={`services color-${index + 1}`}>
                      <span className="icon2">
                        <i className={item.icon} />
                      </span>
                      <h3>{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="row">
                <div
                  className="col-md-12 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="hire">
                    <h2>{about.quote}</h2>
                    <a href={data.download_file} className="btn-hire" target="_blank" rel="noopener noreferrer">
                      VIEW CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
