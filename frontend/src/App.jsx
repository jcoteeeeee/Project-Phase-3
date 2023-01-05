import { useState } from 'react'
import HomePage from './components/HomePage'
import { Route, Routes } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import ArtistHomePage from './components/ArtistHomepage'
// import './App.css'

function App() {
  const [photos, setPhotos] = useState([])

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HomePage" element={<HomePage photos={photos} setPhotos={setPhotos}/>} />
        <Route path="/artisthomepage" element={<ArtistHomePage />} />
      </Routes>
    </div>
  )
}

export default App
