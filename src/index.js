import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YtSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_details';
import _ from 'lodash';
import './style/style.css'
const API_KEY = 'AIzaSyBTgxZujoZnlUXBd8CgfpSfh9yzSTXdS5I';

// this component will produce a HTML
class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('T-series');
    }

    videoSearch(term)
    {
        YtSearch({key: API_KEY, term: term},(videos) => {
            
            this.setState({videos:videos,
            selectedVideo:videos[0]});
        });
    }

    render() {

        const videoSearch = _.debounce((term) => {this.videoSearch(term)},600);
        return ( 
            <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.2/css/bootstrap.min.css"/>
                <SearchBar onSearchTermChange={videoSearch} />
                
                <VideoDetail video ={this.state.selectedVideo}/>
                <VideoList
                onVideoSelected = {(selectedVideo) => this.setState({selectedVideo})}
                videos = {this.state.videos}/>
            </div>
        );
    }
}

// Take this generated component and put it on the page
ReactDOM.render(<App />,document.getElementById('root'));