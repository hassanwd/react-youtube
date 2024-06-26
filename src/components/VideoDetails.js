import React from 'react';

const VideoDetails = ({ video }) => {
    if (!video) return <div>Loading....! </div>;

    const videoEmbedURL = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className='main_video'>
            <div className="main_video_left">
                <iframe src={videoEmbedURL} title="Video Player"></iframe>
            </div>
            <div className="main_video_left_comment">
                <h2 className="comment_heading"> {video.snippet.title} </h2>
                <p> {video.snippet.description} </p>
            </div>
        </div>
    );
}

export default VideoDetails;
