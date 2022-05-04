import React, { Component } from "react";
import data from "../../data.json";

const services = data.services;

export default class ServicesSection extends Component {
  render() {
    return (
      <section className="colorlib-services" data-section="services">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{services.title}</span>
              <h2 className="colorlib-heading">{services.subtitle}</h2>
            </div>
          </div>
          <div className="row row-pt-md">
            {services.experties.map((item, index) => (
              <div
                className="col-md-4 text-center animate-box"
                key={item.title}
              >
                <div className={`services color-${index + 1}`}>
                  <span className="icon">
                    <i className={item.icon} />
                  </span>
                  <div className="desc">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
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
