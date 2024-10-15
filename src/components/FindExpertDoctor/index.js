import {useState,useEffect} from "react"
import {v4 as uuidv4} from "uuid"
import Header from "../Header"
import "./index.css"

const locationList=[
    {
        id:uuidv4(),
        location:"Select location"
    },
    { 
        id:uuidv4(),
        location:"Andhra Pradesh"
    },
    { 
        id:uuidv4(),
        location:"Telangana"
    },
    { 
        id:uuidv4(),
        location:"Tamil nadu"
    },
    { 
        id:uuidv4(),
        location:"Karnataka"
    },
    { 
        id:uuidv4(),
        location:"Maharashtra"
    },
    { 
        id:uuidv4(),
        location:"Gujarat"
    },
    { 
        id:uuidv4(),
        location:"Delhi"
    },
    { 
        id:uuidv4(),
        location:"Rajasthan"
    },
    { 
        id:uuidv4(),
        location:"Uttra Pradesh"
    },
    { 
        id:uuidv4(),
        location:"Kerala"
    },
    
]
const expertiseList=[
    {
        id:uuidv4(),
        expertise:"Expertise"
    },
    {
        id:uuidv4(),
        expertise:"Hair Care",
    },
    {
        id:uuidv4(),
        expertise:"Skin Care",
    },
    {
        id:uuidv4(),
        expertise:"Dental Care",
    },
    {
        id:uuidv4(),
        expertise:"General Practitioner"
    },
    {
        id:uuidv4(),
        expertise:"Cardiologist"
    }
    ,{
        id:uuidv4(),
        expertise:"Male-Female Infertility"
    }
]
const genderData=[
    {
        id:uuidv4(),
        gender:"Gender"
    },
    {
        id:uuidv4(),
        gender:"Male"
    },{
        id:uuidv4(),
        gender:"Female"
    },
    {
        id:uuidv4(),
        gender:"Other"
    }
]
const feeData=[
    {
        id:uuidv4(),
        fee:"Fee"
    },
    {
        id:uuidv4(),
        fee:"0-500"
    },
    {
        id:uuidv4(),
        fee:"501-1000"
    },
    {
        id:uuidv4(),
        fee:"1001-1500"
    },
    {
        id:uuidv4(),
        fee:"1501-2000"
    }

]
const languageData=[
    {
        id:uuidv4(),
        language:"Language"
    },
    {
        id:uuidv4(),
        language:"English"
    },
    {
        id:uuidv4(),
        language:"Hindi"
    },
    {
        id:uuidv4(),
        language:"Marathi"
    },
    {
        id:uuidv4(),
        language:"Tamil"
    },
    {
        id:uuidv4(),
        language:"Telugu"
    }
]

const data=[
    {
        id:uuidv4(),
        name:"Dr. Prerna Narang",
        expertise:"Hair Care",
        location:"Maharashtra",
        gender:"Female",
        rating:4.5,
        experience:7,
        fee:800,
        language:["English ", "Hindi ", "Marathi "],
        imageUrl:"https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDsbKz9DFjjwpDL3XnFinlO2Abm0Mj46bfSBTh3WPAAybe9KauhfPvoTEl7yYc4pjR9W~4tF2lwG3fqfa17y-9z6UG-utUqHsY5DfliHB5K55tS1E4wg6AluYgnx7fOgNwgzxsHHjqGkvBnvD-LzvCsG-Zps3Z47LvV-IwNYwIGRw5BEwfMPjG0JKxzVwrME2RhKdiNbaJwE~gb5YjG7cXsGcYofcIljhVG1ynY5aq9pYM1OBNs8xZLtsfFl6-63fSarvEgBOUXRpqMVxg-xMnPI9yC3wGk5g0YvkvYbwoh00TFxGxcjmhRl7yJU~k7WQPQYRyzRj7Z9nL2iVNCBeQ__"
    },
    {
        id:uuidv4(),
        name:"Dr. Prerna Narang",
        expertise:"Male-Female Infertility",
        location:"Maharashtra",
        gender:"Female",
        rating:4.5,
        experience:7,
        fee:800,
        language:["English ", "Hindi ", "Marathi "],
        imageUrl:"https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDsbKz9DFjjwpDL3XnFinlO2Abm0Mj46bfSBTh3WPAAybe9KauhfPvoTEl7yYc4pjR9W~4tF2lwG3fqfa17y-9z6UG-utUqHsY5DfliHB5K55tS1E4wg6AluYgnx7fOgNwgzxsHHjqGkvBnvD-LzvCsG-Zps3Z47LvV-IwNYwIGRw5BEwfMPjG0JKxzVwrME2RhKdiNbaJwE~gb5YjG7cXsGcYofcIljhVG1ynY5aq9pYM1OBNs8xZLtsfFl6-63fSarvEgBOUXRpqMVxg-xMnPI9yC3wGk5g0YvkvYbwoh00TFxGxcjmhRl7yJU~k7WQPQYRyzRj7Z9nL2iVNCBeQ__"
    },
    {
        id:uuidv4(),
        name:"Dr. Prerna Narang",
        expertise:"Skill Care",
        location:"Maharashtra",
        gender:"Female",
        rating:4.5,
        experience:6,
        fee:800,
        language:["English ", "Hindi ", "Marathi "],
        imageUrl:"https://s3-alpha-sig.figma.com/img/5af8/78e5/09217e175d69b8cfd3da49cb2a8a6437?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gDsbKz9DFjjwpDL3XnFinlO2Abm0Mj46bfSBTh3WPAAybe9KauhfPvoTEl7yYc4pjR9W~4tF2lwG3fqfa17y-9z6UG-utUqHsY5DfliHB5K55tS1E4wg6AluYgnx7fOgNwgzxsHHjqGkvBnvD-LzvCsG-Zps3Z47LvV-IwNYwIGRw5BEwfMPjG0JKxzVwrME2RhKdiNbaJwE~gb5YjG7cXsGcYofcIljhVG1ynY5aq9pYM1OBNs8xZLtsfFl6-63fSarvEgBOUXRpqMVxg-xMnPI9yC3wGk5g0YvkvYbwoh00TFxGxcjmhRl7yJU~k7WQPQYRyzRj7Z9nL2iVNCBeQ__"
    },
    
    {
        id:uuidv4(),
        name:"Dr. Anaya Raj",
        expertise:"Cardiologist",
        location:"Andhra Pradesh",
        gender:"Female",
        rating:4.5,
        experience:10,
        fee:1000,
        language:["English","Telugu","Tamil"],
        imageUrl:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728974202/icons/doctors%20ims/o9hezjlqn0xhms3tlsoc.jpg"
    },
    {
    id:uuidv4(),
    name:"Rashmi Sarkar",
    expertise:"Cardiologist",
    location:"Tamil nadu",
    gender:"Female",
    rating:4.5,
    experience:15,
    fee:600,
    language:"English",
    imageUrl:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728974597/icons/p9ij6f9hp30ydhxtrhgj.jpg"
},
{
    id:uuidv4(),
    name:"Haimabati Sen",
    expertise:"General Practitioner",
    location:"Tamil nadu",
    gender:"Female",
    fee:600,
    rating:4.5,
    experience:10,
    language:"English",
    imageUrl:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728974718/icons/imktqwkk23gmiay2fg4n.jpg"
},
{
    id:uuidv4(),
    name:"Y. Bharath Shetty.",
    expertise:"Cardiologist",
    location:"Karnataka",
    gender:"Female",
    rating:4.7,
    experience:9,
    fee:800,
    language:"English",
    imageUrl:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728974827/icons/pu7wjvow65iazaokxmzp.jpg"
},
{
    id:uuidv4(),
    name:"Suniti Solomon",
    expertise:"Dental Care",
    location:"Kerala",
    gender:"Female",
    rating:4.5,
    experience:6,
    fee:"500",
    language:"English",
    imageUrl:"https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728974827/icons/pu7wjvow65iazaokxmzp.jpg"
},
]

const FindExpertDoctor=()=>{
    const [doctorsData,setDoctorsData] = useState(data)
    const [location, setLocation] = useState('');
    const [expertise, setExpertise] = useState('');
    const [gender, setGender] = useState('');
    const [language, setLanguage] = useState('');
    const [fee, setFee] = useState('');
    const [results, setResults] = useState([]);
    const [onInputSearch,setInputSearch] = useState("")
    const [finalResults, setFinalResults] = useState([])
    const [onFilter,setFilter]=useState("All")


    const onChangeLocation=(event)=>{
        setLocation(event.target.value)
    }
    const onChangeExpertise=(event)=>{
        setExpertise(event.target.value)
    }
    const onChangeGender=(event)=>{
        setGender(event.target.value)
    }
    const onChangeLanguage=(event)=>{
        setLanguage(event.target.value)
    }
    const onChangeFee=(event)=>{
        setFee(event.target.value)
    }

    const onChangeSearchText=(event)=>{
        setInputSearch(event.target.value) 

    }
    const onResultSpecialisation=()=>{
        let filterResults=doctorsData.filter(eachItem=>(
            eachItem.location.toLowerCase().includes(location.toLowerCase()) ||
            eachItem.expertise.toLowerCase().includes(onInputSearch.toLowerCase()) 
        ))
        setResults(filterResults)
    }

    const onChangeFilter=(event)=>{
        setFilter(event.target.value)
    }

    useEffect(()=>{

        if (onFilter==="All"){
            let filterResults=results.filter(eachItem=>(
                eachItem.expertise.toLowerCase().includes(expertise.toLowerCase()) ||
                eachItem.gender.toLowerCase().includes(gender.toLowerCase()) ||
                eachItem.language.includes(language) ||
                eachItem.fee <= fee
            ))
            setFinalResults(filterResults)
    }


        
    },[expertise, gender, language, fee,onFilter,results])
    

    console.log(finalResults)

     





    return(
        <>
        <Header/>
        <div>
            <div className="select-location-and-specialisation-container">
                <div className="location-and-specialisation-container">
                    <h1 className="find-doctors-title">
                    Find expert Doctors for an In-clinic session here  
                    </h1>
                    <div className="location-and-specialisation">
                        <div className="location-container">
                            <div className="location-card-container">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728969882/icons/ksn7cvgln2jxrprlqren.png" className="location-img" alt="Location" />
                            </div>
                            <select className="selector-dropdown option" onChange={onChangeLocation} >
                                {
                                    locationList.map(location=>(
                                        <option className="option" key={location.id} value={location.location}>{location.location}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="search-container">
                            <input type="search" className="specialisation-input" value={onInputSearch} placeholder="eg. Doctor, specialisation, clinic name" onChange={onChangeSearchText} />
                            <button className="search-button" onClick={onResultSpecialisation}>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728969882/icons/fqs55big37igeiio8shj.png" className="search-icon" alt="search" />
                            </button>
                        </div>

                    </div>
                </div>
                <div className="select-features-container">
                    <div className="features-container">
                                <select className="feature-dropdown feature-option" onChange={onChangeExpertise}>
                                    {
                                        expertiseList.map(expertise=>(
                                            <option className="feature-option" key={expertise.id} value={expertise.expertise}>{expertise.expertise}</option>
                                        ))
                                    }
                                </select>

                                <select className="feature-dropdown feature-option" onChange={onChangeGender}>
                                    {
                                        genderData.map(gender=>(
                                            <option className="feature-option" key={gender.id} value={gender.gender}>{gender.gender}</option>
                                        ))
                                    }
                                </select>

                                <select className="feature-dropdown feature-option" onChange={onChangeFee}>
                                    {
                                        feeData.map(fee=>(
                                            <option className="feature-option" key={fee.id} value={fee.fee}>{fee.fee}</option>
                                        ))
                                    }
                                </select>

                                <select className="feature-dropdown feature-option" onChange={onChangeLanguage}>
                                    {
                                        languageData.map(language=>(
                                            <option className="feature-option" key={language.id} value={language.language}>{language.language}</option>
                                        ))
                                    }
                                </select>

                                <select className="feature-dropdown feature-option all-filters" onChange={onChangeFilter}>
                                    <option className="feature-option" value="All">All filters</option>
                                    <option className="feature-option" value="none">None</option>
                                </select>

                                
                    </div>
                </div>
                <div className="">
                    <div>
                        {
                            finalResults.length>0 ? (
                                <ul className="doctors-list-items">
                                {
                                    finalResults.map(item=>(
                                        <li className="doctors-details-container">
                                            <div className="doctor-card">
                                                <img src={item.imageUrl} className="doctor-img" alt="Doctor" />
                                                <div className="find-rating-container">
                                                        <span className="f-rating">
                                                           {item.rating}
                                                        </span>
                                                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="f-rating-star" alt="star"/>
                                                </div>
                                                
                                                <div className="f-card-description-container">
                                                <h1 className="f-name">{item.name}</h1>
                                                <div className="find-logo-text-container">
                                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728969254/icons/sauxbfp0gtdtafirm0f7.png" className="logo-img" alt="expertise" />
                                                    <p className="expertise-text">{item.expertise}</p>
                                                </div>
                                                <div className="find-logo-text-container">
                                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728969256/icons/nvslz1cdcpyung8vhgzw.png" className="logo-img" alt="experience" />
                                                    <p className="expertise-text">{item.experience} years of Experience </p>
                                                </div>
                                                <div className="find-logo-text-container">
                                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728969252/icons/ne7dnyynq8qx0iyc139k.png" className="logo-img" alt="expertise" />
                                                    <p className="expertise-text">{(item.language)}</p>
                                                </div>
                                                </div>
                                                <div className="consult-and-fee-container">
    
                                                    <div className="consultation-container">
                                                        <p className="f-consulted">
                                                        Video Consultation
                                                        </p>
                                                        <span className="f-fee">
                                                            Rs.{item.fee}
                                                        </span>
    
                                                    </div>
                                                    <div className="consultation-container">
                                                        <p className="f-consulted">
                                                        Chat Consultation
                                                        </p>
                                                        <span className="f-fee">
                                                            Fee
                                                        </span>
    
                                                    </div>
                                                </div>
                                                <button className="view-profile-container" onClick={onViewProfile}>
    
                                                            View Profile
    
                                                </button>
                                                <button className="book-consultation">
                                                Book a consultation
                                                </button>
                                                
                                            </div>
                                       
                                        </li>
                                    ))
                                }
                            </ul>
                            ) :
                            (
                                <div className="no-results-found">
                                    No results found. Please try again with different filters.
                                </div>
                            )
                        }
                       
                    </div>





                   

                </div>

            </div>
        </div>
        
        </>

    )
}

export default FindExpertDoctor 

/*
doctor.name.toLowerCase().includes(inputSearch.toLowerCase()) ||
            doctor.expertise.toLowerCase().includes(inputSearch.toLowerCase()) ||
            doctor.location.toLowerCase().includes(inputSearch.toLowerCase()) ||
            doctor.gender.toLowerCase().includes(inputSearch.toLowerCase()) ); */