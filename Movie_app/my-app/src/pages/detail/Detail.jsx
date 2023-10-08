import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';

import './detail.scss';
import ActorList from './ActorList'//NEW
import CastList from './CastList';
import VideoList from './VideoList';
import MovieList from '../../components/movie-list/MovieList'
import bg from '../../assets/footer-bg.jpg';


const Detail = () => {

    const { category, id, } = useParams();

    const [item, setItem] = useState(null);

    //const [item_a, setItem2] = useState([]);

    useEffect(() => {
        const getDetail = async () => {
            const response = await tmdbApi.detail(category, id, { params: {} });
            //console.log(response);
            setItem(response);
            window.scrollTo(0, 0);

        }
        getDetail();
    }, [category, id]);

    // useEffect(() => {
    //     const getDetail = async () => {
    //         const response2 = await tmdbApi.movieCr`edits(category, id, {params:{}});
    //         console.log(response2);
    //         setItem2(response2);
    //         window.scrollTo(0,0);

    //     }
    //     getDetail();   
    // }, [category, id]);

    return (
        <>
            {
                item && (
                    <>
                        <div className="banner" style={
                            !item.profile_path ?
                                { backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`} : { backgroundImage: `url(${bg})` }}></div>
                        <div className="mb-3 movie-content container">
                            <div className="movie-content__poster">
                                <div className="movie-content__poster__img" style={
                            item.backdrop_path ?
                                { backgroundImage: `url(${apiConfig.originalImage(item.backdrop_path || item.poster_path)})`} : { backgroundImage: `url(${apiConfig.originalImage(item.profile_path)})` }}></div>
                            </div> 
                            <div className="movie-content__info">
                                <h1 className="title">
                                    {item.title || item.name}
                                </h1>

                                <p className='extra-info'> 
                                    {item.release_date ? 
                                    <span>{`Release date: ${item.release_date.split("-").reverse().join("-")}. Avarage rating: ${item.vote_average.toFixed(1)} / 10`}</span> : ''}

                                    {item.first_air_date ? 
                                    <span>{`Release date: ${item.first_air_date.split("-").reverse().join("-")}. Avarage rating: ${item.vote_average.toFixed(1)} / 10`}</span> : ''}

                                   
                                    {item.birthday || item.place_of_birth ?
                                    <span>{`Was born: ${item.birthday.split("-").reverse().join("-")} in ${item.place_of_birth}.`}</span> : ''}


                                    {/* <span>{`Moviing avarage: ${console.log(item_a.cast[0].title) || ''}`}
                                    // <span>{`Production countries: ${item.production_countries[0].name || ''}`}</span>
                                    // item_a.cast && item_a.cast.slice(0, 5).map((cast, i) => (
                                    //     <span key={i} className='genres__item'>{cast.title}</span>
                                    // ))
                                    }</span> */}
                                </p>



                                 {/*console.log(item.production_countries[0].name, '&', item.production_countries[1].name)*/}


                                <div className="genres">
                                    {
                                        item.genres && item.genres.slice(0, 5).map((genre, i) => (
                                            <span key={i} className='genres__item'>{genre.name}</span>
                                        ))
                                    }
                                </div>
                                <p className="overview">{item.overview || item.biography}</p>
                                <div className="cast">
                                    <div className="section__header">
                                        {!item.biography ? <h2>Casts</h2> : ''}
                                    </div>
                                    {!item.biography ? <CastList id={item.id}/> : ''}
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="section mb-3">
                                {!item.biography ? <VideoList id={item.id} /> : ''}
                            </div>

                            <div className="section mb-3">
                                <div className="section__header mb-2">
                                    {!item.biography ? <h2>Similar</h2> : <h2>Known For</h2>}
                                </div>
                                {!item.biography ? <MovieList category={category} type='similar' id={item.id} /> : <ActorList id={item.id} />}

                            </div>
                        </div>



                    </>

                )
            }


        </>
    );
}

export default Detail;
