import React from 'react';
import './display-time.css'

const convertTime = (s) => {
    return new Date(s * 1000).toISOString().substr(11, 8)
}
    
const DisplayTime = (props) => {
    return (
        <div className="col-xs-4" id="time">
            <span className="video-time">
                {convertTime(props.videoTime)} / {convertTime(props.videoDuration)}
            </span>
        </div>
    )
}

export default DisplayTime
