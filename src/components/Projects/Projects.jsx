import React from "react";
import { Card } from "flowbite-react";
import "./projects.css";

const Projects = () => {
  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects-container" id="project">
      {/* ... other cards ... */}

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://proshop-nikhil.herokuapp.com/")}
          horizontal={false}
          imgSrc="assets/shot/nbaStats.png"
          className="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            NBA Stats Explorer
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            NBA Stats Explorer is a data modeling application that displays interactive charts, allowing the user to explore NBA player data by season.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            NBA stats explorer is a fullstack application that displays advanced
            basketball statistics to the user using interactive charts and
            graphs. Users are able to explore data for any season they desire,
            and interact with the plot charts to remove and highlight data
            points most important to the user. The backend for this application
            that stores league-wide data and performs the calculations to serve
            up data to the charts efficiently, was developed from the ground up
            in parallel . The database will continue to be updated adding the
            latest NBA playoff data, and legacy seasons for even deeper
            analysis. {"(React Frontend and Django Backend)."}
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://nba-stats-beryl.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/proshop.png"
          className="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProShop
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ProShop is a completely customized E-Commerce/Shopping Cart
            application built from scratch using Django & React.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            ProShop comes bundled with a full featured shopping cart, product
            reviews and ratings, top products carousel, product search, product
            pagination, user profile with orders, admin product management,
            admin user management, mark orders as delivered, checkout process
            {"(shipping, payment method, etc...)"}, and PayPal/credit card
            integration.
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://nba-stats-beryl.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/proshop.png"
          className="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProShop
          </h5>
          <p className="text-gray-900 dark:text-white">card content</p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://nba-stats-beryl.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/proshop.png"
          className="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProShop
          </h5>
          <p className="text-gray-900 dark:text-white">card content</p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://nba-stats-beryl.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/proshop.png"
          className="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProShop
          </h5>
          <p className="text-gray-900 dark:text-white">card content</p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://nba-stats-beryl.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/proshop.png"
          className="rounded overflow-hidden shadow-lg cursor-pointer"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            ProShop
          </h5>
          <p className="text-gray-900 dark:text-white">card content</p>
        </Card>
      </div>

      {/* ... other cards ... */}
    </div>
  );
};

export default Projects;
