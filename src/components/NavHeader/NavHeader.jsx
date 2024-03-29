import React, { useEffect, useState } from "react";
import "./navheader.css";

// Components
import Switcher from "../Switcher/Switcher";

const NavHeader = () => {
  const handleWelcomeScroll = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  const handleAboutScroll = () => {
    let about = document.getElementById("about");
    let offset = about.offsetTop - 80;
    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleProjectsScroll = () => {
    let bob = document.getElementById("project");
    let offset = bob.offsetTop - 80;
    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  };
  const handleResumeScroll = () => {
    let resume = document.getElementById("resume-scroll");
    let offset = resume.offsetTop - 80;
    window.scrollTo({
      top: offset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <nav class="bg-white px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
        <div>
          <Switcher />
        </div>
        <div class="container flex flex-wrap items-center justify-between mx-auto">
          <a href="/" class="flex items-center">
            <img
              src="/assets/icons8-google-code-color/icons8-google-code-96.svg"
              class="h-6 mr-3 sm:h-9"
              alt="Logo"
            />
            <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Nikhil Prasad
            </span>
          </a>
          <div class="flex md:order-2"></div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={handleWelcomeScroll}
                  class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  onClick={handleAboutScroll}
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  onClick={handleProjectsScroll}
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Projects
                </a>
              </li>
              {/* <li>
                <a
                  onClick={handleResumeScroll}
                  class="block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Resume
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavHeader;
