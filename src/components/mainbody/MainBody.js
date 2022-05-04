import React, { Component } from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import CounterSection from "./CounterSection";
import SkillsSection from "./SkillsSection";
import EducationSection from "./EducationSection";
import ExperienceSection from "./ExperienceSection";
import WorkSection from "./WorkSection";
import ContactSection from "./ContactSection";

export default class MainBody extends Component {
  render() {
    return (
      <div id="colorlib-main">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CounterSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <WorkSection />
        <ContactSection />
      </div>
    );
  }
}
