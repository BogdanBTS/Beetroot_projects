import React from 'react';
import PropTypes from 'prop-types';
import './movie-card.scss';

import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { category } from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import noImage from '../../assets/no-image.jpg';


const MovieCard = props => {

    const item = props.item;

    const link = '/' + category[props.category] + '/' + item.id;

    const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path || item.profile_path);

    return (    
        <Link to={link}>
            <div className='movie-card' style={item.profile_path || item.poster_path ? {backgroundImage: `url(${bg})`} : {backgroundImage: `url(${noImage})`} }>
                <Button>
                    <i className='bx bx-play'></i>
                </Button>
            </div>
            <h3>{item.title || item.name}</h3>
        </Link>
    );
}

MovieCard.propTypes = {

}

export default MovieCard;
