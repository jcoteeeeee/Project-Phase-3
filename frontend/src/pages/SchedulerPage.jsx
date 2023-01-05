import { React, useState, } from "react";
import AptCalendar from './AptCalendar';

const SchedulerPage = () => {

  return (
    <div>
      <AptCalendar />
      <button>Click to Schedule?</button>
    </div>
  )

}

export default SchedulerPage