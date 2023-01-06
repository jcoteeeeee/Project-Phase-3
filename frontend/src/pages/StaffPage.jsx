import { React, useEffect, useState, } from "react";
import UpdateForm from './UpdateForm'

const StaffPage = () => {
  const [artists, setArtists] = useState([])
  const [isShown, setIsShown] = useState(true)

  //get request 
  useEffect(() => {
    const getArtists = async () => {
      let req = await fetch("http://localhost:3000/artists")
      let res = await req.json()
      
      setArtists(res)
    }
    getArtists()
  }, [artists])

  //delete request 
  const deleteArtist = async (artist) => {
    //let artistId = artist.id
    let req = await fetch(`http://localhost:3000/artists/${artist.id}`, {
      method: 'DELETE'
    })
  }

  // const updateArtist = async (artist) => {
  //   let req = await fetch("http://localhost:3000/artists", {
  //     method: 'PATCH', 
  //     header: ,
  //     body: 
  //   })
  // }
  const hideForm = () => {
    setIsShown(!isShown)
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
                  <div>
                    <button onClick={hideForm}>Update artist's info</button>
                    {isShown? null : <UpdateForm/>}
                  </div>
                  <br/>
                  <button onClick={() => {deleteArtist(artist)}}>Remove employee</button>
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