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

  const handleSubmit = (e) => {
    e.preventDefault()
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
                  <li>Time: {apt.apt_datetime} Client: {apt.client_id} Artist:{apt.artist_id}</li>
                  <button onClick={() => {}}>Change appointment info</button>
                  <br/>
                  <button onClick={() => {deleteApt(apt)}}>Cancel appointment</button> 
                </ul>
                <form>
                  <label/>
                  <input/>
                  <label/>
                  <input/>
                  <label/>
                  <input/>
                </form>
              </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default BookingListPage