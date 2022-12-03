import React from 'react'
import './Home.css'
import Header from '../Components/Header'
import NoteContainer from '../Components/NoteContainer'

const Home = () => {
  return (
    <div id='home'>
        <Header/>
        <NoteContainer/>
        </div>
  )
}

export default Home