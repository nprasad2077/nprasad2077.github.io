import React from "react";
import { Card } from "flowbite-react";
import "./projects.css";

const Projects = () => {
  const navigateTo = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="projects-container" id="project">
      {/* Title bar */}
      <div className="projects-title">
        <Card
        // imgSrc="/assets/bob/bob.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            My Projects.
          </h5>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://nba-stats-beryl.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/nbaStats.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            NBA Stats Explorer
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            NBA Stats Explorer is a data modeling application that displays
            interactive charts, allowing the user to explore NBA player data by
            season.
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
          onClick={() => navigateTo("https://proshop-nikhil.herokuapp.com/")}
          horizontal={false}
          imgSrc="assets/shot/proshop.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
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
          onClick={() =>
            navigateTo("https://nasa-capstone.vercel.app/")
          }
          horizontal={false}
          imgSrc="assets/shot/planetarium.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Planetarium
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Planetarium is an application used to display information about the
            planets in our Solar System.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            React front-end application that displays NASA data and imagery to
            users. Users are able to interact with 3-D models, view Mars rover
            images, watch videos from the NASA image and video library, and view
            information about incoming asteroids. In addition, a Django back-end
            server handles user data, blog and forum posts, and image storage.
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() =>
            navigateTo("https://nprasad2077.github.io/storeAngular/home/")
          }
          horizontal={false}
          imgSrc="assets/shot/store.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            WebStore
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Webstore is a simple e-commerce frontend site that uses the Fake
            Store API.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            E-Commerce/Webshop online store built using Angular/TypeScript,
            Express.js, and Stripe for payment processing.
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://apple-iphone-gui.netlify.app/")}
          horizontal={false}
          imgSrc="assets/shot/iphone.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            iPhone 3-D Animation
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            This is a React 3D Animation website using ThreeJS (WebGi) & GSAP
            technologies.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            This is an iPhone 14 website clone that incorporates a live 3D model
            obtained from Sketchfab. WebGi allows the user to view and
            manipulate the 3D iphone model in realtime. This website was built
            on the React framework.
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://front-end-travel-app.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/travel.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Travel Base
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Travel Base is an application used to view and create memories about
            travel destinations.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            React front-end application that allows users to search, store, and
            update travel information about vacation destinations. This
            application has full CRUD functionality using RESTful architecture
            with an Express/Mongoose/Node.js back-end.
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() => navigateTo("https://project-2-teal.vercel.app/")}
          horizontal={false}
          imgSrc="assets/shot/nutri.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nutri-Scan
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Nutri-Scan is an application for researching nutritional and
            environmental facts about food products. It can quickly display
            helpful nutritional summaries and interpret package information.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Web-based application developed for the European market that allows
            users to quickly search for health and nutrition information by food
            product. Users are shown a calculated nutrition score and warnings
            about allergens or ingredients. Data is derived from the Open Food
            Facts database and the application is built in React.js.
          </p>
        </Card>
      </div>

      <div className="card-container">
        <Card
          onClick={() =>
            navigateTo("https://nprasad2077.github.io/project-1/lib/index.html")
          }
          horizontal={false}
          imgSrc="assets/shot/pokemon.webp"
          className="rounded overflow-hidden shadow-lg cursor-pointer project-card"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Pokémon Match!
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Pokemon Match! is a fun memory match game. Players are to find a
            matching pokemon until all cards are turned over.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Memory match game using Pokémon themed cards. Game logic uses
            vanilla JavaScript, while visual effects are handled with custom
            CSS. The game is fully responsive and can be played on mobile
            devices.
          </p>
        </Card>
      </div>

      {/* ... other cards ... */}
    </div>
  );
};

export default Projects;
