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

  const deleteArtist = async () => {
    let req = await fetch("http://localhost:3000/artsit/:id", {
      method: 'DELETE'
    })
    deleteArtist()
  }

  return (
    <div>
      <h3>This is a list of all the artists at this studio</h3>
      <div>
        {
          artists.map((artist) => {
            return(
              <div>
                <ul>
                  <li>Name: {artist.first_name} {artist.last_name}</li>
                  <li>Email: {artist.email}</li>
                  <button onClick={() => {}}>Update artist's info</button>
                  <br/>
                  <button onClick={() => {deleteArtist}}>Remove employee</button>
                </ul>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default StaffPage