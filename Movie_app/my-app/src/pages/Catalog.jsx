import React from 'react';
import { useParams } from 'react-router';
import PageHeader from '../components/page-header/PageHeader';
import { category as catry } from '../api/tmdbApi';
import MovieGrid from '../components/movie-grid/MovieGrid'

const Catalog = () => {
    const { category } = useParams();
    //console.log(category);
    return (
        <>
           <PageHeader>
               {category === catry.movie ? 'Movies' : '' || category === catry.tv ? 'TV Series' : '' || category === catry.person ? 'Actors' : ''}
           </PageHeader>    
           <div className="container">
               <div className="section mb-3">
                   <MovieGrid category={category}/>
               </div>
           </div>
        </>
    );
}

export default Catalog;
