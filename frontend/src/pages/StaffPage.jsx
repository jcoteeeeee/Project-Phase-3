import { React, useEffect, useState, } from "react";
// import UpdateForm from './UpdateForm'

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

  //makes UpdateForm show or not 
  // const hideForm = () => {
  //   setIsShown(!isShown)
  // }

  //patch request 
  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/artists/${artist.id}`, {
      method: "PATCH",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstname: e.target.firstname.value,
        lastname: e.target.lastname.value,
        email: e.target.email.value
      })
    })
  }

  return (
    <div>
      <h2>This is a list of all the artists at this studio</h2>
      <div>
        {
          artists.map((artist) => {
            return(
              <div>
                <ul>
                  <li>Name: {artist.first_name} {artist.last_name}</li>
                  <li>Email: {artist.email}</li>
                  <div>
                    {/* <button onClick={handleSubmit(artist)}>Update artist's info</button> */}
                    {/* {isShown? null : <UpdateForm/>} */} {/* Don't need this boolean now */}
                  </div>
                  <br/>
                  <button onClick={() => {deleteArtist(artist)}}>Remove employee</button>
                </ul>
                <h3>Update Artist's information</h3>
                <form onSubmit={handleSubmit}>
                    <label />First Name: <label />
                    <input type="text" name="firstname" />
                    <br/>
                    <label>Last Name: </label>
                    <input type="text" name="lastname" />
                    <br/>
                    <label>Email: </label>
                    <input type="email" name="email" />
                    <button type="submit">Submit</button>
                </form>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}


export default StaffPage