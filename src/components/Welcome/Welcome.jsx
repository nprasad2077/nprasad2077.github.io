import React from "react";
import { Card } from "flowbite-react";
import "./welcome.css";

const Welcome = () => {
  return (
    <div className="welcome" id="welcome">
      <Card className="mt-6">
        <img src="/assets/pics/intro.webp" className="picture" alt="introduction gif" width="1632px" height='100%'></img>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Nikhil Prasad
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Full Stack Web Developer
        </p>
      </Card>
    </div>
  );
};

export default Welcome;
