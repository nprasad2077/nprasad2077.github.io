import React from "react";

// Components
import About from "../About/About";
import Projects from "../Projects/Projects";
import Resume from "../Resume/Resume";
import NavHeader from "../NavHeader/NavHeader";
import Welcome from "../Welcome/Welcome";
import Tail from "../Tail/Tail";

const Home = () => {
  return (
    <div>
      <div className="mb-4">
        <NavHeader />
      </div>
      <div>
        <Welcome />
      </div>
      <div>
        <About />
      </div>
      <div className="mb-4">
        <Projects />
      </div>
      <div>
        {/* <Resume /> */}
      </div>
      <div>
        <Tail />
      </div>
    </div>
  );
};

export default Home;
