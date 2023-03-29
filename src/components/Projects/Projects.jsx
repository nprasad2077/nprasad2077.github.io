import React from 'react'
import { Card } from 'flowbite-react'
import './projects.css'

const Projects = () => {
  return (
    <div class='flex flex-row flex-wrap' id='project'>

      <div className="child-1 mt-2">
        <Card
          horizontal={true}
          imgSrc="/assets/bob/bob.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Projects.
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are some of my creations.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Click on the images to view the deployed applications.
          </p>
        </Card>

      </div>
      <a href='https://capstone-front-end-seven.vercel.app/' className='child-2'><div className="child-2">
          <Card
            horizontal={false}
            imgSrc="assets\shot\planetarium.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Planetarium
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            Planetarium is an application used to display information about the planets in our Solar System.
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            React.js front-end application that displays NASA data and imagery to users. Users are able to interact with 3-D models, view Mars rover images, watch videos from the NASA image and video library, and view information about incoming asteroids. In addition, a Django back-end server handles user data, blog and forum posts, and image storage.
            </p>
          </Card>
      </div></a>

      <a href='https://github.com/nprasad2077/ecommerce' className='child-2'><div className="child-2">
          <Card
            horizontal={false}
            imgSrc="assets\shot\proshop.png"
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              ProShop
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            ProShop is a completely customized E-Commerce/Shopping Cart application built from scratch using Django & React.
            </p>
            <p className="font-normal text-gray-700 dark:text-gray-400">
            ProShop comes bundled with a full featured shopping cart, product reviews and ratings, top products carousel, product search, product pagination, user profile with orders, admin product management, admin user management, mark orders as delivered, checkout process{'(shipping, payment method, etc...)'}, and PayPal/credit card integration.
            </p>
          </Card>
      </div></a>


      <a href='https://front-end-travel-app.vercel.app/' className='child-3'><div className="child-3" id='project-target'>
        <Card
          horizontal={false}
          imgSrc="\assets\shot\travel.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Travel Base
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          Travel Base is an application used to view and create memories about travel destinations.
          </p>
          <p className="font-normal text-gray-700 dark:text-gray-400">
          React.js front-end application that allows users to search, store, and update travel information about vacation destinations. This application has full CRUD functionality using RESTful architecture with an Express/Mongoose/Node.js back-end.
          </p>
        </Card>
      </div></a>

<a href='https://project-2-teal.vercel.app/' className='child-3'><div className="child-3">
  <Card
    horizontal={false}
    imgSrc="\assets\shot\nutri.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Nutri-Scan
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Nutri-Scan is an application for researching nutritional and environmental facts about food products. It can quickly display helpful nutritional summaries and interpret package information.
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Web-based application developed for the European market that allows users to quickly search for health and nutrition information by food product. Users are shown a calculated nutrition score and warnings about allergens or ingredients. Data is derived from the Open Food Facts database and the application is built in React.js.
    </p>
  </Card>
</div></a>

<a href='https://nprasad2077.github.io/project-1/lib/index.html' className='child-4'><div className="child-4">
  <Card
    horizontal={false}
    imgSrc="\assets\shot\pokemon.png"
  >
    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      Pokemon Match!
    </h5>
    <p className="font-normal text-gray-700 dark:text-gray-400">
      Pokemon Match! is a fun memory match game. Players are to find a matching pokemon until all cards are turned over.
    </p>
    <p className="font-normal text-gray-700 dark:text-gray-400">
    Memory match game using Pokémon themed cards. Game logic uses vanilla JavaScript, while visual effects are handled with custom CSS. The game is fully responsive and can be played on mobile devices.
    </p>
  </Card>
</div></a>

    </div>
  )
}

export default Projects