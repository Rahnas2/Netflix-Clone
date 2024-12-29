
import { useEffect, useState } from "react";
import { createImageUrl, getTrailer } from "../Services/movieServices"

import { AiOutlineClose } from "react-icons/ai";

import Button from "./Button";
import { UserAuth } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";


function MovieDetail({ open, onclose, movie }) {
  console.log(onclose)
  useEffect(() =>{
    if(open){
      document.body.style.overflow = 'hidden'
    }
    return () =>{
      document.body.style.overflow = 'auto'
    }
  })
  const { poster_path, id, backdrop_path, title, overview } = movie
  console.log('movie',movie)
  const { user } = UserAuth()

  const [trailer, setTrailer] = useState(null)
  const navigate = useNavigate()

  const handleTrailer = async() =>{
    console.log('begining')
    const link = getTrailer(id)
    fetch(link)
    .then(response => response.json())
    .then(data =>{
      console.log('the data',data)
      const trailer = data.results.find(video => video.site === 'YouTube' && video.type === 'Trailer')
      if(trailer){
        window.location.href = `https://www.youtube.com/embed/${trailer.key}`
      }
    })
  }
  return (
    <div
      className={`fixed inset-0 flex justify-center items-center transition-all ${open ? "opacity-100 pointer-events-auto z-10" : "opacity-0 pointer-events-none"
        }`}
    >
      {/* <div
        className="fixed inset-0 bg-black bg-opacity-50"
      /> */}

      <div
        className="relative rounded-lg shadow-lg max-w-3xl w-full mx-4 md:mx-0"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >

        <div className="flex flex-col ">

          <img
            src={createImageUrl(backdrop_path, "original")}
            alt={title}
            className="w-full h-full object-contain rounded-lg"
          />

        </div>

        <span onClick={onclose} className="cursor-pointer absolute top-5 right-5 text-3xl hover:text-[rgba(255,255,255,0.3)]">
          <AiOutlineClose />
        </span>

        <div className="flex flex-col absolute bottom-5 px-5">
        <p className=" whitespace-normal break-words mb-3">{overview}</p>
        {user?.email ? <span><Button onClick={handleTrailer} text="Get Trailer"/></span>
        :<Link to="/login"><Button text="Please Login" /></Link>}
        </div>

      </div>
    </div>
  )
}

export default MovieDetail