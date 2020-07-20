import React from 'react';
import './time-slider.css'

const TimeSlider = (props) => {
    return (
        <div className="col-xs-8 col-xs-offset-2" id="duration">
            <input
                className="timeSlider"
                type="range"
                min="0"
                max={Math.round(props.duration)}
                value={props.time}
                onChange={props.handler}
            ></input>
        </div>
    )
}

export default TimeSlider
