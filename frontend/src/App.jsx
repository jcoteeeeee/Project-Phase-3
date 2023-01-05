import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import ArtistHomepage from './pages/ArtistHomepage'
import SchedulerPage from './pages/SchedulerPage'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  const [photos, setPhotos] = useState([])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="artisthomepage" element={<ArtistHomepage />} />
            <Route path="artisthomepage/schedulerpage" element={<SchedulerPage />} />
        </Routes>
      </BrowserRouter>
  )
}

// <div>
//   <HomePage/>

  {/* <Routes> */}
    {/* <Route path="/" element={<Home />} /> */}
    {/* <Route path="/HomePage" element={<HomePage photos={photos} setPhotos={setPhotos}/>} /> */}
    {/* <Route path="/artisthomepage" element={<ArtistHomePage />} /> */}
  {/* </Routes> */}
// </div>

