import { React, useEffect, useState, } from "react";

const StaffPage = () => {

  const [artists, setArtists] = useState([])

  useEffect(() => {
    const request = async () => {
      let req = await fetch("localhost//:3000")
      let res = await req.json()
      setArtists(res)
    }
    request()
  }, [])

  return (
    <div>
      <h3>This is a list of all the artists at this studio</h3>
      <div>
        {
          res.map((artist) => {
            return(
              <div>
                <div>artist.{first_name} + artist.{last_name}</div>
                <div>artist.{email}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default StaffPage