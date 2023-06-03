import React from "react";
import { Card } from "flowbite-react";
import "./about.css";

const About = () => {
  return (
    <div className="flex" id="about">
      <div className="profile">
        <Card
          imgSrc="/assets/pics/profile.png"
          alt="nikhil-prasad-profile-picture"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Me.
          </h5>
        </Card>
      </div>

      <div className="about p-2">
        <Card>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white mb-5">
            Nikhil Prasad
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400 mb-10">
            I am a software developer based in Houston, TX with experience in
            web development, JavaScript, and Python. I have a passion for
            creating dynamic and user-friendly websites and am skilled in both
            front-end and back-end development. I have experience working with a
            variety of technologies such as React, Angular, Node.js, and Django,
            and I am always looking to stay up-to-date with the latest
            advancements in the industry. My experience in Python and JavaScript
            also allows me to work on a range of projects, from web applications
            to data analysis and automation tasks. I am a strong collaborator
            and able to work in a fast-paced environment, always focused on
            delivering high-quality work on-time and on-budget.
          </p>
          <div>
            <div class="flex flex-row justify-center items-center">
              <img src="/assets/icons/html-5-144.png" alt="html5"></img>
              <img src="/assets/icons/css3-144.png" alt="css3"></img>
              <img
                src="/assets/icons/javascript-144.png"
                alt="javascript"
              ></img>
            </div>
            <div class="flex flex-row justify-center items-center">
              <img src="/assets/icons/react-144.png" alt="react"></img>
              <img src="/assets/icons/node-js-144.png" alt="node.js"></img>
              <img
                src="/assets/icons/typescript-144.png"
                alt="typescript"
              ></img>
            </div>
            <div class="flex flex-row justify-center items-center">
              <img src="/assets/icons/python-144.png" alt="python"></img>
              <img src="/assets/icons/django-144.png" alt="django"></img>
              <img
                src="/assets/icons/postgresql-144.png"
                alt="postgresSQL"
              ></img>
            </div>
            <div class="flex flex-row justify-center items-center">
              <img src="/assets/icons/java-144.png" alt="java"></img>
              <img src="/assets/icons/angularjs-144.png" alt="angular"></img>
              <img
                src="/assets/icons/sql-file.png"
                alt="SQL"
                class="w-36 h-36 ml-4"
              ></img>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default About;
