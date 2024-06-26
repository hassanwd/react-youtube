import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
    const renderedList = videos.map((video) => {
        return <VideoItem key={video.id.videoId}
            video={video}
            onVideoSelect={onVideoSelect} />
    });
    return <div style={{color: 'white'}} className="ui relaxed divided list">{renderedList}</div>
}

export default VideoList;
