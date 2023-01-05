import { React, useEffect, useState, } from "react";

const StaffPage = () => {

  const [artists, setArtists] = useState([])

  useEffect(() => {
    const getArtists = async () => {
      let req = await fetch("http://localhost:3000/artists")
      let res = await req.json()
      
      setArtists(res)
    }
    getArtists()
  }, [])

  return (
    <div>
      <h3>This is a list of all the artists at this studio</h3>
      <div>
        {
          artists.map((artist) => {
            return(
              <div>
                <div>{artist.first_name} {artist.last_name}</div>
                <div>{artist.email}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default StaffPage