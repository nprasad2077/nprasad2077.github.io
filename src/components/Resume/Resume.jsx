import React from 'react'
import Docs from '../Docs/Docs'
import { Card } from 'flowbite-react'
import './resume.css'

const Resume = () => {
  return (
    <div class='cont text-white'>

      <div className='child-1'>
        <Card
          horizontal={true}
          imgSrc="/assets/pics/clippy.png"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Resume.
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            View my resume.
          </p>
        </Card>
      </div>

      <a href='https://drive.google.com/uc?export=download&id=1wdkN-gGhxK58JBCma8clQEp99fsniTp6' className='child-2'><div id='resume'>
        <Card>
          <Docs />
        </Card>
      </div></a>



    </div>
  )
}

export default Resume