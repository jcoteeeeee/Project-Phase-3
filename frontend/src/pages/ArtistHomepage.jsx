import { React, useState, } from "react";
import AptCalendar from './AptCalendar';
// import { useNavigate } from "react-router-dom";

const ArtistHomePage = () => {


    return(
        <div>
          <div className='scheduleNewBox'>
            <AptCalendar/>
          </div>
          <div className='viewAllApptsBox'>
            <h3>List of Appointments</h3>
          </div>
        </div>
    )
}

export default ArtistHomePage;