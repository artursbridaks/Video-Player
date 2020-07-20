import React from 'react';
import './video.css'

const Video = (props) => {
    return (
        <div className="row">

            <div className="col-xs-8 col-xs-offset-2">
                <div>
                </div>
                <video
                    id="fullscreen"
                    ref={props.videoElement}
                    className="video"
                    onTimeUpdate={props.TimeChangeHandler}
                    onLoadedMetadata={props.metadataLoaded}
                    poster={props.poster}
                    max-width="auto"
                    height="420"
                >
                    <source
                        src="https://mazwai.com/videvo_files/video/free/2015-05/small_watermarked/mediagl--dogsledding_in_greenland_preview.webm"
                        type="video/mp4"
                        allowfullscreen="true">
                    </source>
                </video>
            </div>
        </div>
    )
}

export default Video
