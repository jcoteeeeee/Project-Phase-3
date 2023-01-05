import { React, useEffect, useState, } from "react";
import { Link } from "react-router-dom";

const BookingListPage = () => {

  const [apts, setApts] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("localhost//:3000")
      let res = await req.json()
      setApts(res)
    }
    request()
  }, [])

  return (
    <div>
      <h3>This is a list of all the appts</h3>
      <div>
        {
          res.map((apt) => {
            return(
              <div>apt.{apt_datetime}</div>
            )
          })
        }
      </div>
    </div>
  )

}

export default BookingListPage