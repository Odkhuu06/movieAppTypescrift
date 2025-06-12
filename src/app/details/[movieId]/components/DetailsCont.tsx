import {MovieDetailProps } from "@/types/movie"

export const DetailsCont=({movie}:{movie:MovieDetailProps})=>{ 
    
    return(
<div className="max-w-[1080]">
    <div>
        {movie?.genres?.map((genre,index)=>{
            <p key={index}
            className="text-black"
            >{genre.name}</p>
        })}
    </div>
    {/* <p>{ movie.genres}</p> */}
    <p>{movie.overview}</p>
</div>
    )
}