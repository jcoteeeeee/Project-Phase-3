import { useState } from 'react'
import HomePage from './components/HomePage'

function App() {
  const [photos, setPhotos] = useState([])

  return (
    <div>
      <HomePage photos={photos} setPhotos={setPhotos}/>
    </div>
  )
}

export default App
