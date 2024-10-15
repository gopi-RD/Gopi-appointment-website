import { useState } from "react"
import {v4 as uuidv4} from "uuid"
import "./index.css"
const modeSession=[
    {
        id: uuidv4(),
        name:"In-Clinic",
        duration:"45 Mins",
        isSelected:false
    },
    {
        id: uuidv4(),
        name:"Video",
        duration:"45 Mins",
        isSelected:false
    },
    {
        id: uuidv4(),
        name:"Chat",
        duration:"10 Mins",
        isSelected:false
    }
]
const dateSlot=[
    {
        id: uuidv4(),
        day:"Mon",
        date:"10 Oct",
        noOfSlots:10,
        isBooked: false
    },
    {
        id: uuidv4(),
        day:"Tue",
        date:"11 Oct",
        noOfSlots:10,
        isBooked: false
    },
    {
        id: uuidv4(),
        day:"Wed",
        date:"12 Oct",
        noOfSlots:10,
        isBooked: false
    },
    {
        id: uuidv4(),
        day:"Thue",
        date:"13 Oct",
        noOfSlots:10,
        isBooked: false
    },
    {
        id: uuidv4(),
        day:"Fri",
        date:"14 Oct",
        noOfSlots:10,
        isBooked: false
    },
    {
        id: uuidv4(),
        day:"Sat",
        date:"15 Oct",
        noOfSlots:10,
        isBooked: false
    },
    {
        id: uuidv4(),
        day:"Sun",
        date:"16 Oct",
        noOfSlots:10,
        isBooked: false
    },

]

const morningSlot=[
    {
        id: uuidv4(),
        time:"09:00 AM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"9:30 AM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"10:00 AM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"10:15 AM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"10:45 AM",
        isBooked: false
    },{
        id: uuidv4(),
        time:"11:00 AM",
        isBooked: false
    }

]
const eveningSlot=[
    {
        id: uuidv4(),
        time:"04:00 PM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"04:15 PM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"04:30 PM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"04:45 PM",
        isBooked: false
    },
    {
        id: uuidv4(),
        time:"05:15 PM",
        isBooked: false
    }
]

const BookAppointment=(props)=>{
    const [appointmentList, setAppointmentList] = useState([])
    const [sessionList,setSessionList] = useState(modeSession)
    const [selectedDate, setSelectedDate] = useState(dateSlot)
    const [isMorning, setIsMorning] = useState(true)
    const [isEvening, setIsEvening] = useState(false)
    const [selectedMorningSlot, setSelectedMorningSlot] = useState(morningSlot) 
    const [selectedEveningSlot, setSelectedEveningSlot] = useState(eveningSlot)
    const [previousIndex, setPreviousIndex] = useState(0) 
    const [nextIndex, setNextIndex] = useState(3) 
    const [currentList, setCurrentList] = useState()
    const [isBooked, setIsBooked] = useState(false)
    const {book, onUpdateData}=props
   

    const sendDataToHome=()=>{
        onUpdateData(currentList,isBooked) 
    }


    const onBookAppointment=(event)=>{
        event.preventDefault()
        const selectedSession = sessionList.filter(item=>item.isSelected)[0]
        console.log(selectedSession)
        const selectedDateSlot = selectedDate.filter(item=>item.isBooked)[0]
        const selectedSlot = isMorning? selectedMorningSlot.filter(item=>item.isBooked)[0] : selectedEveningSlot.filter(item=>item.isBooked)[0] 
        if(selectedSession && selectedDateSlot && selectedSlot){
            let newList={
                id: uuidv4(),
                session: selectedSession.name,
                date: selectedDateSlot.date,
                time: selectedSlot.time,
                isBooked: true
            }
            setCurrentList(newList)
            setAppointmentList([...appointmentList,newList])
            setIsBooked(true)
            sendDataToHome()
        }else{
            alert("Please select all required Fields")
        }


    }

    const onSelectSessionMode=(id)=>{
        setSessionList(sessionList.map(item=>item.id===id? {...item,isSelected:true}: {...item,isSelected:false}))
    }
  
    const onSelectedDateView=(id)=>{
        setSelectedDate(selectedDate.map(item=>item.id===id? {...item,isBooked:true}: {...item,isBooked:false}))
    }
    const onSelectMorningTiming=(id)=>{
        setIsMorning(true)
        setIsEvening(false)
        setSelectedMorningSlot(selectedMorningSlot.map(item=>item.id===id? {...item,isBooked:true}: {...item,isBooked:false}))
    }
    const onSelectEveningTiming=(id)=>{
        setIsMorning(false)
        setIsEvening(true)
        setSelectedEveningSlot(selectedEveningSlot.map(item=>item.id===id? {...item,isBooked:true}: {...item,isBooked:false}))
    }

    const displayDateViews=(data)=>{
        const {id,date,day,isBooked,noOfSlots} = data

        return (
           isBooked ? (
                <li className="date-item active-session-mode" >
                <p>
                    {day},{date} 
                </p>
                <p>{noOfSlots} slots</p> 

            </li>
            ) :
            (
                <li className="date-item" onClick={()=>onSelectedDateView(id)}>
                <p>
                    {day},{date}
                </p>
                <p>{noOfSlots} slots</p>
               </li>
            )

        )
           
            
    }

    const onleftArrow=()=>{
       if (previousIndex>0){
        setPreviousIndex(previousIndex-1)
        setNextIndex(nextIndex-1)
       }
    }

    const onRightArrow=()=>{
            if (nextIndex<=selectedDate.length-1){
                setPreviousIndex(previousIndex+1)
                setNextIndex(nextIndex+1)

            }
    }

    let onDisplayDateItems=selectedDate.slice(previousIndex, nextIndex) 

    console.log(appointmentList)



    return (
        <div className="page-right-section">
                        <form className="book-appointment-container" onSubmit={onBookAppointment}>
                            <div className="appointment-fee-container">
                                <h2 className="appointment-fee-title">Appointment Fee</h2>
                                <span className="appointment-price">
                                ₹699.00
                                </span>
                            </div>
                            {book && <p className="error-msg">Please select here !</p>}
                            <div className="select-mode-container-text">
                                <h1 className="select-mode-text">Select your mode of session</h1>
                                <p className="line"></p>
                            </div>
                            <ul className="select-mode-session-list-items">
                                {
                                    sessionList.map(eachItem=>(
                                        eachItem.isSelected ? 
                                        (
                                        <li className="mode-session-item active-session-mode"  onClick={()=>onSelectSessionMode(eachItem.id)}>
                                         <div className="session-title-container">
                                         <p className="session-title">{eachItem.name}
                                        </p>
                                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728958521/icons/nufauwcfsetb5t2yv0l4.png" className="selected-mode" alt="selected icon"/>
                                        </div>   
                                        
                                        <span className="session-duration">
                                            {eachItem.duration}
                                        </span>
                                        </li>

                                        ) :
                                        (
                                            <li className="mode-session-item" onClick={()=>onSelectSessionMode(eachItem.id)}>
                                            <p className="session-title">{eachItem.name}</p>
                                            <span className="session-duration">
                                                {eachItem.duration}
                                            </span>
                                            </li>
                                            )
                                       

                                
                                        )
                                        
                                    )
                                }
                            </ul>
                          
                            <div className="select-mode-container-text">
                            <h1 className="select-mode-text">Pick a Time slot</h1>
                            <p className="line time-slot-line"></p> 
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728909695/icons/i47x6oplq5ktl6vpp1nz.png" className="calender-icon" alt="calender"/>
                            </div>
                            <div className="select-date-container">
                                <div className="select-card-container">
                                    <button className="icon-button" type="button" onClick={onleftArrow}  >
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728926047/icons/f4yafzigkl8mxayrag6s.png" className="scroll-left-icon" alt="icon"/>
                                    </button>
                                    <ul className="select-date-list-items">
                                        {
                                            onDisplayDateItems.map(data=>(
                                                displayDateViews(data)
                                            )

                                            )
                                        }
                                    </ul>
                                    
                                    <button className="icon-button" type="button" onClick={onRightArrow}>
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728926047/icons/f4yafzigkl8mxayrag6s.png" className="scroll-right-icon" alt="icon"/>
                                    </button>
                                </div>

                            </div>
                            <div className="time-slot-of-morning-container">
                                    <h2 className="morning-slot">Morning</h2>
                                    <ul className="morning-time-slot-list">
                                        {
                                                     selectedMorningSlot.map(eachSlot=>(
                                                        (eachSlot.isBooked && isMorning )? (
                                                            <li className="morning-time-slot active-timing" >
                                                                    <p className="slot-time active-slot">{eachSlot.time}</p>
                                                            </li>

                                                        ):
                                                        (
                                                            <li className="morning-time-slot" onClick={()=>onSelectMorningTiming(eachSlot.id)} >
                                                                    <p className="slot-time">{eachSlot.time}</p>
                                                            </li>
                                                        )
                                                            
                                                     ))
                                        }
                                       
                                    </ul>
                            </div>
                            <div className="time-slot-of-morning-container">
                                    <h2 className="morning-slot">Evening</h2>
                                    <ul className="morning-time-slot-list">
                                        {
                                                     selectedEveningSlot.map(eachSlot=>(

                                                        (eachSlot.isBooked && isEvening) ? (
                                                            <li className="morning-time-slot active-timing">
                                                                    <p className="slot-time active-slot">{eachSlot.time}</p>
                                                            </li>
                                                        ) :
                                                        (   
                                                            <li className="morning-time-slot" onClick={()=>onSelectEveningTiming(eachSlot.id)}>
                                                                    <p className="slot-time">{eachSlot.time}</p>
                                                            </li>

                                                        )


                                                            
                                                     ))
                                        }
                                       
                                    </ul>
                            </div>
                            
                            <div className="make-appointment-button-container">
                            <button className="make-an-appointment-button" type="submit">
                                    Make An Appointment
                                </button>
                            </div>
                            


                        </form>

                    </div>
    )
}


export default BookAppointment