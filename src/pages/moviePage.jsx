import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import { IMAGE_URL,Youtube_URL } from '../api/movies';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlay, faPlus, faThumbsUp, faThumbsDown, faVolumeMute, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons';
import { fetchMovieDetails, fetchMovieSimilar, fetchMovieVideos } from '../Redux/moviesSlice';
import MovieSimilarCarousel from '../components/movieSimilarCarousel';

function MoviePage() {
    let { id } = useParams();


    const movieDetails = useSelector((state) => state.movies.movieDetails)
    const movieSimilar = useSelector(state => state.movies.movieSimilar)
    const movieVideos = useSelector(state => state.movies.movieVideos)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchMovieDetails(id))
        dispatch(fetchMovieSimilar(id))
        dispatch(fetchMovieVideos(id))
    }, [])

const trailer = movieVideos[0]?.key;
    console.log(trailer)
    return (
        <>
            <div className="w-screen bgGray ">
                <div className="w-screen h-screen bg-no-repeat bg-cover bg-top mr-auto" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.poster_path})` }}>
                    <div className="w-11/12 h-full mx-auto">
                        <div className="h-3/5 w-11/12 pt-2">
                            <Link to="/home">
                                <FontAwesomeIcon icon={faArrowLeft} size="2x" className="white-to-gray" />
                            </Link>
                        </div>
                        <div className="w-11/12 h-2/5 text-white flex flex-col justify-center">
                            <h1 className="text-4xl font-bold ">{movieDetails?.title}</h1>
                            <div className="flex flex-row mt-6 items-center ">
                                <button className="py-2 px-10 bg-white text-black font-xs font-bold rounded-lg w-max hover:bg-gray-200 flex items-center">
                                    <FontAwesomeIcon icon={faPlay} size="2x" />
                                    <h1 className="ml-4 text-xl">Play</h1>
                                </button>
                                <FontAwesomeIcon icon={faPlus} size="2x" className="ml-4 cursor-pointer" />
                                <FontAwesomeIcon icon={faThumbsUp} size="2x" className="ml-4 cursor-pointer" />
                                <FontAwesomeIcon icon={faThumbsDown} size="2x" className="ml-4 cursor-pointer" />
                                <FontAwesomeIcon icon={faVolumeMute} size="2x" className="ml-auto mr-6 cursor-pointer" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-screen h-60 bgGray text-white">
                    <div className="w-11/12 h-full mx-auto flex ">
                        <section className="w-3/6 mt-4">
                            <p className="text-blue-500 font-bold inline text-3xl">{movieDetails?.release_date?.slice(0, 4)}</p>
                            <p className="text-blue-500 font-bold inline pl-6 text-3xl">{`${movieDetails?.runtime} m`}</p>
                            <p className="text-xl h-full overflow-clip overflow-hidden">{movieDetails?.overview}</p>
                        </section>
                        <section className="w-3/6 mt-4">
                            <ul className="text-xl ">
                                <li className="inline text-gray-400 ">Cast:&nbsp;</li>
                                <li className="inline">{movieDetails?.credits?.cast.slice(0, 3)?.map((item) => `${item.name}, `)}</li>
                                <a href="#cast">more</a>
                            </ul>
                            <ul className="text-xl pt-6">
                                <li className="inline text-gray-400">Genres:&nbsp;</li>
                                <li className="inline">{movieDetails?.genres?.map((item) => ` ${item.name}, `)}</li>
                                <li className="inline"> more</li>
                            </ul>
                        </section>
                    </div>
                </div>
                <div className="w-screen h-max pb-10 bg-black">
                    <div className="w-11/12  mx-auto flex flex-wrap" >
                        <MovieSimilarCarousel
                            data={movieSimilar}
                        />
                    </div>
                    <div className="w-screen h-64 text-white mt-10">
                        <div className="w-11/12 h-full mx-auto  ">
                            <h1 className="text-3xl">Acerca de <strong>{movieDetails?.title}</strong></h1>
                            <ul className="text-xl mt-4" id="cast">
                                <li className="inline text-gray-400 ">Cast:&nbsp;</li>
                                <li className="inline">{movieDetails?.credits?.cast.slice(0,6).map((item) => `${item.name}, `)}</li>
                            </ul>
                            <ul className="text-xl mt-2">
                                <li className="inline text-gray-400 ">Crew:&nbsp;</li>
                                <li className="inline">{movieDetails?.credits?.crew.slice(0,6).map((item) => `${item.name}, `)}</li>
                            </ul>
                            <ul className="text-xl mt-2">
                                <li className="inline text-gray-400 ">Genres:&nbsp;</li>
                                <li className="inline">{movieDetails?.genres?.map((item) => `${item.name}, `)}</li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-screen h-screen">
                    {/* <video className="w-full h-full" src={Youtube_URL +trailer}></video> */}
                        
                    </div>
                </div>
            </div>

    </>
    )
}
export default MoviePage;
