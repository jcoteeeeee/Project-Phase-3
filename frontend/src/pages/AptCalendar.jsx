import DayTimePicker from '@mooncake-dev/react-day-time-picker'


const AptCalendar = () => {
    
    const handleScheduled = dateTime => {
        console.log('scheduled: ', dateTime);
    };

    const timeSlotValidator = (slotTime) => {
        const eveningTime = new Date(
            slotTime.getFullYear(),
            slotTime.getMonth(),
            slotTime.getDate(),
            9,
            0,
            0
        );
        const isValid = slotTime.getTime() > eveningTime.getTime();
        return isValid;
    }

    return (
        <div>
            <DayTimePicker timeSlotSizeMinutes={60} timeSlotValidator={timeSlotValidator} onConfirm={handleScheduled} />
        </div>
    )
}

export default AptCalendar