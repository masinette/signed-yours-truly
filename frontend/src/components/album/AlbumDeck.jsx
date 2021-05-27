import React from 'react';
import AlbumCard from "./AlbumCard"

export default function AlbumDeck() {
  // map over current albums in collection
  return (
    <div class="AlbumDeckContainer">

      <AlbumCard/>
      <AlbumCard/>
      <AlbumCard/>

    </div>
  )
}

