import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList'
import VideoDetails from './VideoDetails'
const KEY = 'AIzaSyBki6mlFvCAeCXgU_NHzxaUdpyi1cxUKwk';


class App extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount() {
        // to have a default search
        this.onTermSubmit('all')
    }

    onTermSubmit = async inputSearch => {
        const response = await youtube.get('/search', {
            params: {
                key: KEY,
                part: 'snippet',
                q: inputSearch,
                maxResults: Math.min(150, 50),
            }
        });

        console.log(response);

        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        });
    };

    onVideoSelect = video => {
        this.setState({
            selectedVideo: video
        })
    }

    render() {
        return (
            <div className="">
                <SearchBar onFormSubmit={this.onTermSubmit} />
                <div className="banner">
                    <div style={{display: 'flex'}} className="">
                        <div className="banner_left">
                            <VideoDetails video={this.state.selectedVideo} />
                        </div>
                        <div className="banner_right">
                            <VideoList onVideoSelect={this.onVideoSelect}
                                videos={this.state.videos} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
