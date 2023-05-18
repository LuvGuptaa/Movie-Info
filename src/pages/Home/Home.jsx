import React, { useEffect, useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import "./Home.css"
import MovieList from '../../components/MovieList/MovieList';

const Home = () => {

    const[popularMovies, setPopularMovies] = useState([])

    useEffect(() => {
        fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US")
        .then(res => res.json())
        .then(data => setPopularMovies(data.results))
    }, [])

    const [windowSize, setWindowSize] = useState(getWindowSize());

    useEffect(() => {
      function handleWindowResize() {
        setWindowSize(getWindowSize());
      }
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    function getWindowSize() {
        const {innerWidth, innerHeight} = window;
        return {innerWidth, innerHeight};
    }

    console.log(windowSize.innerWidth)
  return (
    <div className="poster">
        <Carousel 
            showThumbs={false}
            autoPlay={true}
            transitionTime={3}
            infiniteLoop={true}
            showStatus={false}
            useKeyboardArrows={true}
            showIndicators={windowSize.innerWidth <=528 ? false : true}
        >
            {
                popularMovies.map(movie => (
                    <Link style={{textDecoration:"none",color:"white"}} to={`/movie/${movie.id}`} >
                        <div className="posterImage">
                            <img src={`https://image.tmdb.org/t/p/original${movie && movie.backdrop_path}`} />
                        </div>
                        <div className="posterImage__overlay">
                            <div className="posterImage__title">{movie ? movie.original_title : ""}</div>
                            <div className="posterImage__runtime">
                                {movie ? movie.release_date : ""}
                                <span className='posterImage__rating'>
                                    {movie ? movie.vote_average : ""}
                                    <i className='fas fa-star' /> {" "}
                                </span>
                            </div>
                            <div className="posterImage__description">{windowSize.innerWidth <=528 ? movie.overview.slice(0,158)+"..." : movie.overview}</div>
                        </div>
                    </Link>
                ))
            }
        </Carousel>
            <MovieList></MovieList>
    </div>
  )
}

export default Home