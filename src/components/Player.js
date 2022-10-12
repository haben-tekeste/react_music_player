import React, { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause,
} from "@fortawesome/free-solid-svg-icons";
const Player = ({
  setCurrentSong,
  songs,
  currentSong,
  isPlaying,
  setIsPlaying,
  audioRef,
}) => {
  // state
  const [songInfo, setSongInfo] = useState({
    current: 0,
    duration: 0,
    animationPercentage: 0,
  });
  // event handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const timeControlHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const roundedAnimationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );
    setSongInfo({
      current,
      duration,
      animationPercentage: roundedAnimationPercentage,
    });
  };
  const timeFormatter = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };
  const drageHandler = (e) => {
    setSongInfo({ current: e.target.value, duration: songInfo.duration });
    audioRef.current.currentTime = e.target.value;
  };
  const songEndHandler = async () => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    currentIndex++;
    await setCurrentSong(songs[(currentIndex) % songs.length]);
    if (isPlaying) audioRef.current.play();
  };
  const skipAudioHandler = async (direction) => {
    const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
    if (direction === "forward") {
      await setCurrentSong(songs[(currentIndex + 1) % songs.length]);
    }
    if (direction === "backward") {
      if (currentIndex === 0) {
        await setCurrentSong(songs[songs.length - 1]);
        if (isPlaying) audioRef.current.play();
        return;
      }
      await setCurrentSong(songs[(currentIndex - 1) % songs.length]);
    }
    if (isPlaying) audioRef.current.play();
  };

  const animationTrackPercentage = {transform:`translateX(${songInfo.animationPercentage}%)`}
  return (
    <div className="player">
      <div className="time-control">
        <p>{timeFormatter(songInfo.current)}</p>
        <div className="track" style={{background:`linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`}}>
          <input
            type="range"
            name=""
            id=""
            onChange={drageHandler}
            min="0"
            max={songInfo.duration}
            value={songInfo.current}
          />
          <div className="animation-track" style={animationTrackPercentage}></div>
        </div>

        <p>{ songInfo.duration ? timeFormatter(songInfo.duration):"0:00"}</p>
      </div>
      <div className="player-controls">
        <FontAwesomeIcon
          size="2x"
          icon={faAngleLeft}
          onClick={() => skipAudioHandler("backward")}
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          size="2x"
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          size="2x"
          icon={faAngleRight}
          onClick={() => skipAudioHandler("forward")}
        />
      </div>
      <audio
        onTimeUpdate={timeControlHandler}
        onLoadedMetadata={timeControlHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={songEndHandler}
      ></audio>
    </div>
  );
};

export default Player;
