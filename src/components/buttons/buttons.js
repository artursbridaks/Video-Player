import React from 'react';
import './buttons.css'

const Buttons = (props) => {
    return (
        <div className="col-xs-2" id="buttons">
            <button onClick={props.togglePlay}>
                {props.isVideoPlaying ? <span className="pause"></span> : <span className="play"></span>}
            </button>
            <button onClick={props.toggleStop}>
                {props.isVideoPlaying}
                <span className="stop"></span>
            </button>
            <button onClick={props.toggleFullScreen}>
                <span class="fullscreen"></span>
            </button>
            <button onClick={props.toggleMute}>
                {props.isVideoMuted ? <span className="volume"></span> : <span className="mute"></span>}
            </button>
            <hr></hr>
            <div className="col-xs-4">
                <input
                    type="range"
                    min="0"
                    max="50"
                    onChange={props.volumeChangeHandler}
                />
            </div>
        </div>
    )
}

export default Buttons
