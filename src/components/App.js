import React from 'react';

import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {

    // onSearchSubmit(term){
    //     axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 
    //             'Client-ID 2kxp-ZXlBbMdaVaiZ704pLN7oa4BnB9qawhBaqOAI2w'
    //         }
    //     })
    //     .then(response => {
    //         console.log(response.data.results);
    //     });
    // }

    state = { images: [] };

    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos', {
            params: {query: term}

        });

        this.setState({ images: response.data.results });
        
    }
    
    // async onSearchSubmit(term){
    //     const response = await axios.get('https://api.unsplash.com/search/photos', {
    //         params: {query: term},
    //         headers: {
    //             Authorization: 
    //             'Client-ID 2kxp-ZXlBbMdaVaiZ704pLN7oa4BnB9qawhBaqOAI2w'
    //         }
    //     })

    //     console.log(response.data.results);
        
    // }

    render(){
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={ this.onSearchSubmit } />
                <ImageList images={ this.state.images }/>
            </div>
        );
    }
}

export default App;