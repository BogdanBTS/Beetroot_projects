import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import tmdbApi from '../../api/tmdbApi';
import apiConfig from '../../api/apiConfig';
import noImage from '../../assets/no-image.jpg';




const CastList = props => {
    
    const {category} = useParams();

    const [casts, setCasts] = useState([]);

    useEffect(() => {
        const getCredits = async () => {
            const res = await tmdbApi.credits(category, props.id);
            setCasts(res.cast.slice(0, 6));
        }
        getCredits();
    }, [category, props.id]);
    return (
        <div className='casts'>
            {
                casts.map((item, i) => (
                    <div key={i} className="casts__item">
                        <div className="casts__item__img" style={item.profile_path ? {backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`} : {backgroundImage: `url(${noImage})`}}></div>
                        <p className="casts__item__name">{item.name}</p>
                    </div>
                ))
            }
            
        </div>
    );
}

export default CastList;
