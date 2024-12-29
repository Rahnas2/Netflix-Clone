import { useState } from "react"
import { createImageUrl } from "../Services/movieServices"

import MovieDetail from "./MovieDetail"


function MovieList({movie}) {

    const {title, backdrop_path, poster_path} = movie

    const [open , setOpen] = useState(false)

  return (
    <>
    <div onClick={() => setOpen(true)} className="aspect-w-2 aspect-h-3 transform duration-500  hover:scale-105 min-w-40 max-h-60 bg-slate-50 rounded-lg overflow-hidden m-2 cursor-pointer">
        <img className="object-contain w-full h-full" src={createImageUrl(poster_path, 'w200')} alt={title} />
    </div>
    <MovieDetail open={open} onclose={() => setOpen(false)} movie={movie} />
    </>
  )
}

export default MovieList