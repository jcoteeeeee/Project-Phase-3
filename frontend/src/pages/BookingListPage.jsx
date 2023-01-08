import { React, useEffect, useState, } from "react";

const BookingListPage = () => {

  const [apts, setApts] = useState([])
  const [appointment, setAppointment] = useState([])
  const [artistId, setArtistId] = useState("")
  const [clientId, setClientId] = useState("")
  const [aptDateTime, setAptDateTime] = useState("")

  //get request 
  useEffect(() => {
    const getApts = async () => {
      let req = await fetch("http://localhost:3000/appointments")
      let res = await req.json()
      setApts(res)
    }
    getApts()
  }, [])

  //delete request 
  const deleteApt = async (appointment) => {
    let req = await fetch(`http://localhost:3000/appointments/${appointment.id}`, {
      method: 'DELETE'
    })
  }

  //patch request 
  const handleUpdateSubmit = async (e) => {
    e.preventDefault()
    const updateApt = async (appointment) => {
      let req = await fetch(`http://localhost:3000/appointments/${appointment.id}`, {
        method: 'PATCH', 
        headers: {'Content-Type': 'application-json'}, 
        body: JSON.stringify({
          apt_datetime: e.target.aptdatetime.value,
          artist: e.target.artist.value,
          client: e.target.client.value 
        })
      })
    }
    updateApt()
  }

  //post request
  const handleScheduleSubmit = (e) => {
    e.preventDefault()
    console.log("Submitted") 
    console.log(artistId, clientId, aptDateTime)
    const scheduleApt = async () => {
      let req = await fetch(`http://localhost:3000/appointments/${appointment.id}`, {
        method: 'POST',
        headers: {'Content-Type': 'application-json'}, 
        body: JSON.stringify({
          artist_id: e.target.artist_id.value, 
          client_id: e.target.client_id.value, 
          date_time: e.target.date_time.value
        })
      })
    }
    scheduleApt()
  }

  return (
    <div>
        <div onM  ouseOver={() => {setAppointment(appointment), setArtistId(artistId), setClientId(clientId), setAptDateTime(aptDateTime)}}>
          <form onSubmit={handleScheduleSubmit}> Schedule New Appointment
            <br/>
            <label>Artist ID: </label>
            <input type="number" name="artist_id" placeholder="1-5"/>
            <br/>
            <label>Client ID: </label>
            <input type="number" name="client_id" placeholder="1-10"/>
            <br/>
            <label>Date and Time: </label>
            <input type="datetime-local" name="date_time"/>    
            <br/>      
            <button>Submit</button>
          </form>
        </div>
      <h3>Scheduled Appointments</h3>
      <div className="stafflist">
        {
          apts.map((apt) => {
            return(
              <div>
                <ul>
                  <li>Time: {apt.apt_datetime} Artist: {apt.artist_id} Client:{apt.client_id}</li>
                </ul>
                <p>Change appointment:</p>
                <form onSubmit={handleUpdateSubmit}>
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