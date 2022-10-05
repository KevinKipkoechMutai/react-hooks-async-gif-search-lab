import React from 'react';

function GifSearch({onSubmitQuery}) {
    //setting initial search states
    const [querySearch, setQuerySearch] = React.useState("");

    //handling search changes
    function handleSearchChange(event) {
        setQuerySearch(event.target.value);
    }

    //handling the search button
    function handleQuerySearch(event) {
        event.preventDefault();
        onSubmitQuery(querySearch);
    }

    return (
        <div>
            <form onSubmit={handleQuerySearch}>
                <div className='form-group'>
                    <label htmlFor='search'>Search:</label>
                    <input id='search' type='text' value={querySearch} onChange={handleSearchChange} className="form-control"/>
                </div>
                <button type='submit'>Find a Gif</button>
            </form>
        </div>
    );
}

export default GifSearch;