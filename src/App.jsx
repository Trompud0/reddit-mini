import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header.jsx';
import Posts from './components/Posts/Posts.jsx';
import SubReddits from './components/SubReddits/SubReddits.jsx';

function App() {

  return (
    <div> 
      <Header />
      <main>
        <Posts />
      </main>
      <SubReddits />
    </div>
  )
}

export default App
