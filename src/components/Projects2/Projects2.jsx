import React from 'react'

const Projects2 = () => {
  return (
    <div>
        <div className="max-w-sm">
            <Card
                horizontal={false}
                imgSrc="src\assets\shot\nutri.png"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Nutri-Scan
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Nutri-Scan is an application for researching nutritional and environmental facts about food products. It can quickly display helpful nutritional summaries and interpret package information.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Nutri-Scan is a React.js front-end application that calls to the blank.com server for data.
                </p>
            </Card>
        </div>

        <div className="max-w-sm">
            <Card
                horizontal={false}
                imgSrc="src\assets\shot\pokemon.png"
            >
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Pokemon Match!
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Pokemon Match! is a fun memory match game. Players are to find a matching pokemon until all cards are turned over.
                </p>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                Pokemon Match! uses simple HTML/CSS/JavaScript to handle visuals and game logic.
                </p>
            </Card>
        </div>
    </div>
  )
}

export default Projects2