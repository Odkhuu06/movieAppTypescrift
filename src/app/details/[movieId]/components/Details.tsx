import { MovieDetails } from "@/types/movie";
import { DetailsCont } from "./DetailsCont"
import { DetailsHeader } from "./DetailsHeader"
import { DetailsImg } from "./DetailsImg"

export const Details=({movie}:{movie:MovieDetails})=>{
    console.log(movie);
    
    return (
        <div>
            <DetailsHeader movie={movie}/>
            <DetailsImg movie={movie}/>
            <DetailsCont movie={movie} />
        </div>
    )
}