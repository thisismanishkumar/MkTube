import React from 'react';

const VideoDetails = ({video}) => {

    if(!video)
    return <div>Loading......</div>
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return(
        <div className = " video-details col-md-8">
            <div className = "embed-responsive embed-responsive-16by9" >
                <iframe class="embed-responsive-item" src = {url} allowFullScreen>
                </iframe>
            </div>
            <div className = "details">
            <b><div ><font size="5" color="Black">{video.snippet.title}</font></div></b>
            <div ><font size="3" color="Grey">{video.snippet.description}</font></div>
            </div>
            
        </div>
    );
};

export default VideoDetails;
// className = "embed-responsive-item-21by9"