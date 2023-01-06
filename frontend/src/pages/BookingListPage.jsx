import { React, useEffect, useState, } from "react";

const BookingListPage = () => {

  const [apts, setApts] = useState([])

  useEffect(() => {
    const getApts = async () => {
      let req = await fetch("http://localhost:3000/appointments")
      let res = await req.json()
      setApts(res)
    }
    getApts()
  }, [apts])

  const deleteApt = async (appointment) => {
    let req = await fetch(`http://localhost:3000/appointments/${appointment.id}`, {
      method: 'DELETE'
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    let req = await fetch(`http://localhost:3000/appointments/${appointment.id}`, {
      method: 'PATCH', 
      headers: {'Content-Type': 'application-json'}, 
      body: JSON.stringify({
        aptdatetime: e.target.aptdatetime.value,
        artist: e.target.artist.value,
        client: e.target.client.value 
      })
    })
  }

  return (
    <div>
      <h3>This is a list of all the appts</h3>
      <div>
        {
          apts.map((apt) => {
            return(
              <div>
                <ul>
                  <li>Time: {apt.apt_datetime} Artist: {apt.artist_id} Client:{apt.client_id}</li>
                </ul>
                <p>Change appointment:</p>
                <form onSubmit={handleSubmit}>
                  <label>Date and time: </label>
                  <input type="text" name="aptdatetime"/>
                  <br/>
                  <label>Artist:</label>
                  <input type="text" name="artist"/>
                  <br/>
                  <label>Client:</label>
                  <input type="text" name="client"/>
                  <br/>
                  <button type="submit">Submit</button>
                </form>
                <br/>
                <button onClick={() => { deleteApt(apt) }}>Cancel appointment</button> 
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default BookingListPage