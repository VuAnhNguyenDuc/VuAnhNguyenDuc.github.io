import React, { Component } from "react";
import data from "../../data.json";

const about = data.about;

export default class SideBar extends Component {
  render() {
    return (
      <aside
        id="colorlib-aside"
        className="border js-fullheight"
      >
        <div className="text-center">
          <div
            className="author-img"
            style={{
              backgroundImage: `url("${about.image}")`
            }}
          />
          <h1 id="colorlib-logo">
            <a href="index.html" className="disabled-link">{data.name}</a>
          </h1>
          <span
            className="position"
            dangerouslySetInnerHTML={{ __html: data.position }}
          />
        </div>
        <nav id="colorlib-main-menu" role="navigation" className="navbar">
          <div id="navbar" className="collapse" aria-expanded="false">
            <ul>
              <li className="active">
                <a href="/" data-nav-section="home">
                  Home
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="about">
                  About
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="services">
                  Services
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="skills">
                  Skills
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="education">
                  Education
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="experience">
                  Experience
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="work">
                  Work
                </a>
              </li>
              <li className="">
                <a href="/" data-nav-section="contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </aside>
    );
  }
}
