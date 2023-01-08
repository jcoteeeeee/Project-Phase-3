import { React, useEffect, useState, } from "react";
// import UpdateForm from './UpdateForm'

const StaffPage = () => {
  const [artists, setArtists] = useState([])
  const [isShown, setIsShown] = useState(true)
  const [artist, setArtist] = useState([])
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")

  //get request 
  useEffect(() => {
    const getArtists = async () => {
      let req = await fetch("http://localhost:3000/artists")
      let res = await req.json()
      
      setArtists(res)
    }
    getArtists()
  }, [])
  //line 17 is so that it updates live 

  //delete request 
  const deleteArtist = async (artist) => {
    //let artistId = artist.id
    let req = await fetch(`http://localhost:3000/artists/${artist.id}`, {
      method: 'DELETE'
    })
  }
  //use prevState so that it deletes immediately does have to be refreshed to see changes 

  //patch request 
  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    console.log('submitted')
    console.log(firstName, lastName, email)
    const updateArtist = async () => {
      let req = await fetch(`http://localhost:3000/artists/${artist.id}`, {
        method: "PATCH",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          first_name: e.target.firstname.value,
          last_name: e.target.lastname.value,
          email: e.target.email.value
        })
      })
    }
    updateArtist()
  }

  return (
    <div>
      <h2>OurStaff</h2>
      <div className="stafflist">
        {
          artists.map((artist) => {
            return(
              <div onMouseOver={() => setArtist(artist)}>
                <ul>
                  <li>Name: {artist.first_name} {artist.last_name}</li>
                  <li>Email: {artist.email}</li>
                  <br/>
                  <button onClick={() => {deleteArtist(artist)}}>Remove employee</button>
                </ul>
                <h3>Update Artist's information: </h3>
                <form onSubmit={handleUpdateSubmit}>
                    <label/>First Name: <label/>
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