import { React, useEffect, useState, } from "react";
import { Link } from "react-router-dom";

const BookingListPage = () => {

  const [apts, setApts] = useState([])

  useEffect(() => {
    const getApts = async () => {
      let req = await fetch("http://localhost:3000/appointments")
      let res = await req.json()
      setApts(res)
    }
    getApts()
  }, [])

  return (
    <div>
      <h3>This is a list of all the appts</h3>
      <div>
        {
          apts.map((apt) => {
            return(
              <div>Time: {apt.apt_datetime} Client: {apt.client_id} Artist:{apt.artist_id} </div>
            )
          })
        }
      </div>
    </div>
  )

}

export default BookingListPage