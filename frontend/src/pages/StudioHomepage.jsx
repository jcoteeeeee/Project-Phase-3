import { React, useState, } from "react";
// import AptCalendar from './AptCalendar';
import { Link } from "react-router-dom";

const StudioHomePage = () => {

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
                <Link to="schedulerpage">Schedule New</Link><br/>
                <Link to="staffpage">View All Artists</Link><br/>
                <Link to="bookinglistpage">View Your Appts</Link>
            </Box>
          </div>
          
        </div>
    )
}

export default StudioHomePage;