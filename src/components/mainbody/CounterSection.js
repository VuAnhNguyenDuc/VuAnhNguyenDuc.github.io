import React, { Component } from "react";
import data from "../../data.json";

const counter = data.counter;

export default class CounterSection extends Component {
  render() {
    return (
      <div
        id="colorlib-counter"
        className="colorlib-counters animated"
        style={{ backgroundImage: `url("${counter.background}")` }}
        data-stellar-background-ratio="0.5"
      >
        <div className="overlay" />
        <div className="colorlib-narrow-content">
          <div className="row" />
          <div className="row">
            {counter.items.map((item, index) => (
              <div
                className="col-md-3 text-center animate-box fadeInUp animated"
                key={item.title}
              >
                <span
                  className="colorlib-counter js-counter"
                  data-from="0"
                  data-to={item.value}
                  data-speed="5000"
                  data-refresh-interval="50"
                >
                  {item.value}
                </span>
                <span className="colorlib-counter-label">{item.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
