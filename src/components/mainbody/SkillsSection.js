import React, { Component } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import data from "../../data.json";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const skills = data.skills;
const labels = skills.labels;
const datasets = skills.datasets;

const chart_data = {
  labels,
  datasets: datasets
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: skills.subtitle,
    },
  },
};

class SkillsChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datasets: chart_data,
      options: options
    };
  }

  render() {
    return (
      <div>
        <Bar
          data={this.state.datasets}
          options={this.state.options}
        />
      </div>
    );
  }
}

class SkillsSection extends Component {
  render() {
    return (
      <section className="colorlib-skills" data-section="skills">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div
              className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <span className="heading-meta">{skills.title}</span>
              <h2 className="colorlib-heading animate-box fadeInUp animated">
                {skills.subtitle}
              </h2>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-12 animate-box fadeInLeft animated"
              data-animate-effect="fadeInLeft"
            >
              <p>{skills.content}</p>
            </div>
            <SkillsChart />
          </div>
        </div>
      </section>
    );
  }
}

export default SkillsSection;