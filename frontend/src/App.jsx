import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/HomePage'
import StudioHomepage from './pages/StudioHomepage'
import SchedulerPage from './pages/SchedulerPage'
import BookingListPage from './pages/BookingListPage'
import StaffPage from './pages/StaffPage'
// import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

export default function App() {
  const [photos, setPhotos] = useState([])

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}/>
            <Route path="studiohomepage" element={<StudioHomepage />} />
            <Route path="studiohomepage/schedulerpage" element={<SchedulerPage />} />
            <Route path="studiohomepage/bookinglistpage" element={<BookingListPage />} />
            <Route path="studiohomepage/staffpage" element={<StaffPage />} />
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

