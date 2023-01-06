import { React, useState, } from "react";
// import AptCalendar from './AptCalendar';
import { Link } from "react-router-dom";
import Header from "./Header"

const StudioHomePage = () => {

function Box({ children, ...props }) {
return <div {...props}>{children}</div>
}
    return(
        <div>
          <Header/>
          <div className='scheduleNewBox'>
            <Box
            style={{
                backgroundColor: '#99b6df',
                borderRadius: 10,
                color: '#eee',
                minHeight: 200,
                padding: 12,
                width: 300,
                }}>
                <Link className="linktext" to="schedulerpage">Schedule New Appt</Link><br/>
                <Link className="linktext" to="staffpage">View All Artists</Link><br/>
                <Link className="linktext" to="bookinglistpage">View Your Appts</Link>
            </Box>
          </div>
          
        </div>
    )
}

export default StudioHomePage;