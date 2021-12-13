import React, {Fragment} from 'react';
import {useParams} from 'react-router-dom';

import TopNavigation from '../Components/TopNavigation'
import SearchResult from '../Components/SearchResult'


const Search = () =>{
    window.scrollTo(0, 0);

    return(
        <Fragment>
            <TopNavigation />
            <SearchResult useParams={useParams().search}/>
        </Fragment>
    )
};

export default Search;