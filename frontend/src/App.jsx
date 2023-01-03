import { useState, useEffect } from 'react'
import HomePage from './components/HomePage'

function App() {
  const [photos, setPhotos] = useState([])
  
  useEffect(() => {
    const request = async () => {
      let req = await fetch("")
      let res = await req.json()
      setPhotos(res)
    }
    request()
  }, [])

  return (
    <div>
      <HomePage photos={photos}/>
    </div>
  )
}

export default App
