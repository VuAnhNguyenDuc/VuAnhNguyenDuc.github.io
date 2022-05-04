import React, { Component } from "react";
import "./App.css";
import "./index.css";
import SideBar from "./components/sidebar/SideBar";
import MainBody from "./components/mainbody/MainBody";

export default class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div className="container-wrap>">
          <a
            href="/"
            className="js-colorlib-nav-toggle colorlib-nav-toggle"
            data-toggle="collapse"
            data-target="#navbar"
            aria-expanded="false"
            aria-controls="navbar"
          >
            <i />
          </a>
          <SideBar />
          <MainBody />
        </div>
      </div>
    );
  }
}
