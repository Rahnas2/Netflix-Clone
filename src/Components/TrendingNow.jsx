import { useEffect, useState } from "react"
import Button from "./Button"
import axios from "axios"
import MovieList from "./MovieList"
 

import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";



function TrendingNow({url}) {

    const [trendingMovies, setTrendingMovies] = useState([])

    useEffect(() =>{
        axios.get(url)
        .then(response => setTrendingMovies(response.data.results))
    },[])
    console.log('trending movies',trendingMovies)

   function slide (offset){
    const slider = document.getElementById('slider')
    slider.scrollLeft = slider.scrollLeft + offset
   }
    
  return (
    <div>
        <h1 className="text-2xl mb-4">Trending Now</h1>

        <Button text="India" type="Select" className="mr-5 "/>
        <Button text="Movies" type="Select"/>

        <div className="flex items-center mt-2">
          <div onClick={() => slide(-300)} className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] py-11 rounded-lg cursor-pointer"><IoIosArrowBack className="text-2xl" /></div>

          <div id={`slider`} className="flex w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide">
            {trendingMovies.map((movie) => (
                <MovieList key={movie.id} movie={movie}/>
            ))}
          </div>

          <div onClick={() => slide(300)} className="bg-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.3)] py-11 rounded-lg ml-2 cursor-pointer"><IoIosArrowForward className="text-2xl" /></div>

        </div>
    </div>
  )
}

export default TrendingNow