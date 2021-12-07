import React, { useState } from "react";
import "./styles.css";
import playlist from "./playlist";

export default function App() {
  const songs = Object.keys(playlist);
  const [clickedSong, setClickedSong] = useState("Bands");

  function onClickHandler(song) {
    setClickedSong(song);
  }
  return (
    <div className="App">
      <h1 className="heading">🎵 Songs Recommendation 🎵</h1>
      <main>
        {songs.map((song) => {
          return (
            <button
              key={song}
              onClick={() => onClickHandler(song)}
              className="button"
            >
              {song}
            </button>
          );
        })}
        <hr />
        <div>
          {playlist[clickedSong].map((play) => {
            return (
              <div className="card">
                <h3>Name : {" " + play.Name}</h3>
                <h4>Artist : {play.artist}</h4>
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
}
