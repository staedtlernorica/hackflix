import {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function MovieDetails(){

    const [individualMovie, setIndividualMovie] = useState({})

    const movieID = useParams()

    useEffect(()=> {
        axios({
            url: `https://api.themoviedb.org/3/movie/${movieID.movieID}`,
            params: {
              api_key: 'f012df5d63927931e82fe659a8aaa3ac'
            }
          }).then((response) => {
            setIndividualMovie(response.data)
        })
    }, [])

    const {original_title, original_tagline, overview, poster_path} = individualMovie;

    return(
        <div className="poster">
            <div className="description">
                <h2>{original_title}</h2>
                <h3>{original_tagline}</h3>
                <p>{overview}</p>
            </div>
            <div className="poster-image">
                
                <img src={`http://image.tmdb.org/t/p/w500/${poster_path}`} 
                alt={`Movie poster for the movie: ${original_title}`} />
            </div>
        </div>
    )
}

export default MovieDetails