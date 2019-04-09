import React from 'react';

function Search(props){

    return (
        <form onSubmit={props.handleSearch} onChange={props.handleCity} className='form'>
            <input name='city' type='text'  className='input--form'/>
            <button className='search--form'>search</button>
        </form>
    )
}

export default Search;