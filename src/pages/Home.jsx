import React, { useEffect } from 'react'


import Hero from '../Components/Hero';
import HomeSec2 from '../Components/HomeSec2';




function Home() {

  return (
    <>
      <div>
        <Hero Where="Home"/>
        <HomeSec2 />

      </div>
    </>
  )
}

export default Home