import { React, useState, } from "react";
// import AptCalendar from './AptCalendar';
import { Link } from "react-router-dom";

const ArtistHomePage = () => {

function Box({ children, ...props }) {
return <div {...props}>{children}</div>
}
    return(
        <div>
          <div className='scheduleNewBox'>
            <Box
            style={{
                backgroundColor: '#f54272',
                borderRadius: 4,
                color: '#eee',
                minHeight: 200,
                padding: 12,
                width: 300,
                }}>
                <Link to="schedulerpage">Schedule New</Link>
            </Box>
             
          </div>
          <div className='viewAllApptsBox'>
            <h3>List of Appointments</h3>
            <h3>Staff</h3>
          </div>
        </div>
    )
}

export default ArtistHomePage;