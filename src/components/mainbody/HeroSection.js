import React, { Component } from "react";
import data from "../../data.json";

const carousel = data.carousel;

class HeroSection extends Component {
  render() {
    return (
      <section
        id="colorlib-hero"
        className="js-fullheight"
        data-section="home"
        style={{ height: "257px" }}
      >
        <div className="flexslider js-fullheight" style={{ height: "257px" }}>
          <ul className="slides">
            {carousel.items.map((item, index) => (
              <li
                style={{
                  backgroundImage: `url("${item.image}")`,
                  width: "100%",
                  float: "left",
                  marginRight: "-100%",
                  position: "relative",
                  opacity: "0",
                  display: "block",
                  zIndex: index === 0 ? "2" : "1",
                }}
                className="flex-active-slide"
                key={item.title}
                data-thumb-alt=""
              >
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div
                      className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text animated fadeInUp"
                      style={{ height: "257px" }}
                    >
                      <div
                        className="slider-text-inner js-fullheight"
                        style={{ height: "257px" }}
                      >
                        <div className="desc">
                          <h1 className={`color-${item.color}`}>{item.title}</h1>
                          <h2 className={`color-${item.color}`}>{item.content}</h2>
                          <p>
                            <a
                              href={data.download_file}
                              className={`btn btn-primary btn-learn-${item.color}`}
                              target="_blank"
                            >
                              Download CV <i className="icon-download4" />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }
}

export default HeroSection;