import React from 'react';
import GifList from './GifList';
import GifSearch from './GifSearch';

function GifListContainer() {
    //setting initial states
    const [gif, setGif] = React.useState([]);
    const [search, setSearch] = React.useState("dolphins");

    //api key
    const apiCode = '1iwYJT1yONNHCIeXGdp7ZHi5KcGBZKYx';

    //setting effects to fetch data
    React.useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=${apiCode}&rating=g`)
            .then(res => res.json())
            .then(({data}) => {
                const gifs = data.slice(0, 3).map(gif => ({url: gif.images.original.url}));
                //setting new state
                setGif(gifs)
            })
    }, [search])

    return (
        <div style={{display: 'flex', justifyContent: 'space-around'}}>
            <GifList gif={gif}/>
            <GifSearch onSubmitQuery={setSearch}/>
        </div>
    )

}

export default GifListContainer;