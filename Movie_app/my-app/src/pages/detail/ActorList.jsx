import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import noImage from '../../assets/no-image.jpg';

const ActorList = props => {

    //const {category} = useParams();
    const { category } = useParams();
    const [item_a, setIitem_a] = useState([]);
    //const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            //const res = await tmdbApi.credits(category, props.id);
            const response2 = await tmdbApi.movieCredits(category, props.id, { params: {} });
            //console.log(response2.cast);
            //setCasts(res.cast.slice(0, 6));
            setIitem_a(response2.cast.slice(0, 12));//.slice(0, 6)
        }
        getCredits();
    }, //[category, props.id]
        [category, props.id]);
    return (
        <div className='casts'>

            {
                item_a.map((item_a, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={item_a.poster_path ? { backgroundImage: `url(${apiConfig.w500Image(item_a.poster_path/*profile_path*/)})` } : {backgroundImage: `url(${noImage})`}}></div>
                        <p className="casts__item__name">{item_a.original_title}</p>
                    </div>
                ))
            }

        </div>
    );
}

export default ActorList;
