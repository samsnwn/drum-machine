import React from 'react'
import { Link } from 'react-router-dom'
import PadPlayer from './PadPlayer/PadPlayer'

export default function Home() {
  return (
    <div>
        {/* <h1>Welcome to my drum machine</h1>
        <h3>Select which player you can to play</h3>
        <Link to="/pads">Pad Player</Link>
        <Link to="/sequencer">Sequencer</Link> */}
        <PadPlayer/>
    </div>
  )
}
