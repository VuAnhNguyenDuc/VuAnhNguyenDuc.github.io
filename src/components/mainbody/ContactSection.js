import React, { Component } from "react";
import data from "../../data.json";

const contact = data.contact;

export default class ContactSection extends Component {
  render() {
    return (
      <section
        className="colorlib-contact"
        data-section="contact"
        id="contact-section"
      >
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{contact.title}</span>
              <h2 className="colorlib-heading">{contact.subtitle}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-5">
              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-mail" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href={`mailto:${contact.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.email}
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-skype" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href={`skype:${contact.skype}?chat`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.skype}
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-whatsapp" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href={`https://wa.me/${contact.whatsapp}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.whatsapp}
                    </a>
                  </p>
                </div>
              </div>

              <div
                className="colorlib-feature colorlib-feature-sm animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="colorlib-icon">
                  <i className="icon-linkedin2" />
                </div>
                <div className="colorlib-text">
                  <p>
                    <a
                      href={contact.lindkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {contact.lindkedin}
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
