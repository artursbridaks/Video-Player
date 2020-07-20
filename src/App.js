import React, { useState, useRef, useEffect } from 'react';
import './flexboxgrid.css';
import './App.css';
import poster from './poster.svg';
import TimeSlider from './components/time-slider/time-slider'
import CommentForm from './components/comment-form/comment-form'
import Buttons from './components/buttons/buttons';
import Video from './components/video/video'
import DisplayTime from './components/display-time/display-time';

function App() {
  const [loading, setLoading] = useState(true)
  const [videoTime, setVideoTime] = useState(0)
  const [videoDuration, setVideoDuration] = useState(0)
  const [volume, setVolume] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const videoElement = useRef(null);
  const [isVideoMuted, setVideoMuted] = useState(false)

  useEffect(() => {
    setLoading(false)
  }, []);

  if (loading) {
    return (
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-8 col-xs-2">
            Loading...
          </div>
        </div>
      </div>
    )
  }

  const togglePlay = () => {
    if (isVideoPlaying) {
      videoElement.current.pause()
    } else {
      videoElement.current.play()
    }
    setIsVideoPlaying(!isVideoPlaying)
  }

  const toggleStop = () => {
    videoElement.current.load();
  }

  const toggleFullScreen = () => {
    var el = document.getElementById("fullscreen");
    if (el.requestFullscreen) {
      el.requestFullscreen();
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen();
    } else if (el.mozRequestFullScreen) {
      el.mozRequestFullScreen();
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen();
    }
  };

  const toggleMute = () => {
    var vid = document.getElementById("fullscreen");

    if (vid.volume >= 1.0 || vid.volume >= 0.1) {
      vid.volume = 0;
    } else if (vid.volume < 1.0) {
      vid.volume = 0.2
    }

    setVideoMuted(!isVideoMuted)
  }

  const TimeChangeHandler = () => {
    const videoCurrentTime = videoElement.current.currentTime
    setVideoTime(Math.round(videoCurrentTime))
  }

  const metadataLoaded = () => {
    const videoCurrentDuration = videoElement.current.duration;
    setVideoDuration(Math.round(videoCurrentDuration));
  };

  const volumeChangeHandler = (e) => {
    const newVolume = e.target.value / 100
    setVolume(newVolume)

    if (!newVolume) {
      videoElement.current.muted = true
      return
    }

    videoElement.current.muted = false
    videoElement.current.volume = newVolume
  };

  const durationSlider = (e) => {
    const time = e.target.value
    videoElement.current.currentTime = time
  }

  return (
    <div className="container">
      <Video
        videoElement={videoElement}
        TimeChangeHandler={TimeChangeHandler}
        metadataLoaded={metadataLoaded}
        poster={poster}
      />
      <TimeSlider
        duration={videoDuration}
        time={videoTime}
        handler={durationSlider}
      />
      <div className="row">
        <Buttons
          togglePlay={togglePlay}
          toggleStop={toggleStop}
          isVideoPlaying={isVideoPlaying}
          toggleFullScreen={toggleFullScreen}
          toggleMute={toggleMute}
          isVideoMuted={isVideoMuted}
          volumeChangeHandler={volumeChangeHandler}
        />
        <DisplayTime
          videoTime={videoTime}
          videoDuration={videoDuration}
        />
        <CommentForm />
      </div>
    </div >
  );
}

export default App;