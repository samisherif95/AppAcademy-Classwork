import React from 'react';
import BenchMap from './bench_map'
import BenchIndex from './bench_index'
import BenchIndexItem from './bench_index_item';



const Search = ({ benches, FetchBenches})=>{
    return(
        <div>
            <BenchMap benches={benches}/>
            <BenchIndex benches={benches} FetchBenches={FetchBenches}/>
        </div>
    )
}

export default Search;