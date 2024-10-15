import { useState } from "react";
import BookAppointment from "../BookAppointment"
import Header from "../Header";
import "./index.css"
const aboutMeText="Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat. love to work with all my hospital staff and seniour doctors. Completed my graduation in Gynaecologist Medicine from the S.V.M.college.With a passion for women’s health and well-being, I strive to provide compassionate care and contribute to the health of the community."
const Home=()=>{
const [readMore,setReadMore]=useState(false) 
const [bookAppointment,setBookAppointment]=useState(false) 
const [isPopup,setIsPopup]=useState(false) 
const [isData,setIsData]=useState() 

const onCancelPopup=()=>{
    setIsPopup(false)
}

const onBookAppointment=()=>{
    setBookAppointment(true) 
    setTimeout(()=>{
        setBookAppointment(false)
    },5000)
}

const onChangeContext=()=>{
    setReadMore(!readMore)
}

const onUpdateData=(data,id)=>{
    setIsPopup(id) 
    setIsData(data)
}


    return (
        <>
        <Header/>
        <div className="home-container">
            <div className="responsive-container">
                <div className="profile-container">
                    <img src="https://s3-alpha-sig.figma.com/img/2620/7166/a35e1a20facdf3d56db655152bcc6d78?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Yk160mpZ3unlL~zrj1qa8wPQKhT~7x~mUQSwJMi2V0gpHBVf8qZ0uVz4Ur-rTI3jrOmHgQBPM7BvzNo2-qvH306GRQ1UaRuM9QEFSQknGpOrjao39Szl6lUYBKQEJsQJMOEzn3QNmvUBsAB2D18Ul00H0ksU0lPb4fMGDR2GGpo2wqF1il9uoxrTrb7QcaIZyBPHjRvi1ndArSbqkHaeDScNOYEfV5e7vXyPTjWaFgkuQztnSUhnllRsx7200eqCeJGgtvpJ2hntMGbAJ7RwDYGf7CSFqOYY4KO2HIF79AgX9ae3p2ubCrXyvjRBsJzO5Xu6MpZQJ4dHRXX1THNRpA__" className="img-top" alt="profile"/>
                    <div className="profile-info">
                        <div className="profile-card-info" >
                            <img src="https://s3-alpha-sig.figma.com/img/f22c/f4c0/74534b8f8298fd03b834e8d171bab784?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RrLX4R-nDIPcjjE-3g6Bzl8gaQPO3GMKFa5mM7DqPOJsb2ge1or9~iWqmfkNNikhHlvDavLoACmYf9cSBOMHXAo3RYUC0ZLW87xTYFAL8Ozpr2YocUu3B0SEzGxTgjs4eJf06J~L~M-qZnEpw0h3nmwxC~KFLdGWJtl5H6XhdWP7R6NnXWo1zwV8hjhJr47iTAxFdqcfrvCakHxJsbT3Hdvw8LN13ntrcpc9u3v~TbT~owVuYBUVDOSFak-rATIL-iBNnptSj801N5Z6V4Ckgsdm3r3OlOvs5lbb8-jz7PUItgYZOcRQbEnn-g83yeRGAYFZDJvadZ~jIURgtq4XZQ__" className="profile-logo" alt="profile"/>
                            <div className="profile-description">
                                <div className="profile-name-container">
                                <h2 className="profile-name">Dr. Bruce Willis</h2> 
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783297/ffa7rwswmzq4gyugbkjg.png" className="profile-name-check" alt="name"/>
                                </div>
                                <h3 className="profile-role">Gynecologist</h3>
                                <div className="rating-container">
                                    <span className="rating">
                                        4.2
                                    </span>
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="rating-star" alt="star" />
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="rating-star" alt="star" />
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="rating-star" alt="star" />
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="rating-star" alt="star" />
                                    <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="rating-star" alt="star" />
                                </div>
                            </div>
                            <div className="profile-social-media">
                                <div className="social-media-follower">
                                    <p className="follow-text">Followers</p>
                                    <span className="follow-numbers">850</span>
                                </div>
                                <div className="social-media-follower">
                                    <p className="follow-text">Following</p>
                                    <span className="follow-numbers">18K</span>
                                </div>
                                <div className="social-media-follower">
                                    <p className="follow-text">Posts</p>
                                    <span className="follow-numbers">250</span>
                                </div>

                            </div>
                            <button className="appointment-button" onClick={onBookAppointment}>
                            Book an Appointment
                            </button>
                        </div>


                    </div>
                </div>
                <div className="page-section-container">
                    <div className="page-left-section">
                <div className="about-me-container">
                    <div className="about-me-title-container">
                            <h2 className="title">A Little About me</h2>
                            <button className="follow-button">
                                Follow  +
                            </button>
                    </div>
                    <div className="about-me-description">
                    <p className="about-me-text">{readMore ? aboutMeText : aboutMeText.slice(0,206)}</p>
                    <div className="separator-and-read-more">
                        <hr className="separeator"/> 
                        <button className="read-more-link" onClick={onChangeContext} >
                            {readMore?"Read Less":"Read More"}
                        </button>
                    </div>

                    </div>
                    <ul className="language-spoken-container">
                        <li className="language-spoken-text">Language Spoken </li>
                        <li className="language">English </li>
                        <li className="language">Hindi</li>
                        <li className="language">Telugu</li>
                    </ul>
                    <div className="contact-info-container">
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728809916/icons/lbs7a6rbagieepqifntn.png" className="contact-icon" alt="icons" /> 
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728809916/icons/yxqfbhy6wcvpwa81ly3o.png" className="contact-icon" alt="icons" />         
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728809915/icons/ikxwin0axedjrufnknir.png" className="contact-icon" alt="icons" />     
                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728809915/icons/bpkzpmheovtjye9rffmj.png" className="contact-icon" alt="icons" />     
                        
                    </div>
                </div>
                <div className="specialization-container">
                    <div className="specialization-title">
                        <h2 className="title">I Specialize In</h2>
                    </div>
                    <ul className="specialization-card-items">
                        <li className="card-item-container">
                            <div className="card-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728811393/icons/kcj0izeuv7ckejtavioi.png" className="card-img" alt="women"/> 
                            </div>
                            <h3 className="card-title">Women’s Health</h3>
                        </li>
                        <li className="card-item-container">
                            <div className="card-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728811393/icons/gngkfoowncjwbduttzcb.png" className="card-img" alt="women"/> 
                            </div>
                            <h3 className="card-title">Skin Care</h3>
                        </li>
                        <li className="card-item-container">
                            <div className="card-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728811392/icons/beqxwbwlx1rgwpsvkbho.png" className="card-img" alt="women"/> 
                            </div>
                            <h3 className="card-title">Immunity</h3>
                        </li>
                        <li className="card-item-container">
                            <div className="card-item">
                            <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728811392/icons/hzbjxwbkeev9at9nnzdw.png" className="card-img" alt="women"/> 
                            </div>
                            <h3 className="card-title">Hair care</h3>
                        </li>
                    </ul>
                </div>
                <div className="concerns-treat-container">
                <div className="specialization-title">
                        <h2 className="title">The Concerns I Treat</h2>
                    </div>
                    <ul className="concerns-treatment-items">
                        <li className="treatment-item">
                            
                            Skin Treatment
                          
                        </li>
                        <li className="treatment-item">
                        Pregnancy
                        </li>
                        <li className="treatment-item">
                        Period Doubts
                        </li>
                        <li className="treatment-item">
                        Endometriosis
                        </li>
                        <li className="treatment-item">
                        Pelvic Pain
                        </li>
                        <li className="treatment-item">
                        Ovarian Cysts
                        </li>
                        <li className="treatment-more-item">
                        + 5 More
                        </li>
                    </ul>

                </div>

                <div className="experience-container">
                <div className="specialization-title">
                        <h2 className="title">My Work Experience</h2>
                </div>
                <div className="experience-card-items"> 
                        <h1 className="experience-title">
                              I HAVE BEEN IN PRATICE FOR : 7+ YEARS
                        </h1>
                        <ul className="experience-list-items">
                                <li className="experience-card-item">
                                    <div className="home-image-container">
                                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728874424/icons/c0gsjkdlcvtae3lwhhvy.png" className="experience-home-img" alt="home" />
                                    </div>
                                    <div className="experience-description">
                                        <div className="experience-description-card">
                                        <h2 className="experience-description-title">
                                        Midtown Medical Clinic
                                        </h2>

                                        <p className="experience-description-text">Senior doctor</p>
                                        </div>
                                        <p className="woking-date">2016-PRESENT</p>
                                    </div>
                                    

                                </li>
                                <li className="experience-card-item">
                                    <div className="home-image-container">
                                        <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728874424/icons/c0gsjkdlcvtae3lwhhvy.png" className="experience-home-img" alt="home" />
                                    </div>
                                    <div className="experience-description">
                                        <div className="experience-description-card">
                                        <h2 className="experience-description-title">
                                        Midtown Medical Clinic
                                        </h2>

                                        <p className="experience-description-text">Senior doctor</p>
                                        </div>
                                        <p className="woking-date">2010-2015</p>
                                    </div>
                                    

                                </li>
                        </ul>
                </div>
                </div>

                <div className="review-container">
                <div className="specialization-title">
                        <h2 className="title">Featured Reviews (102)</h2>
                    </div>
                  <ul className="review-list-items">

                    <li className="review-card-item">
                        <div className="review-card-profile" >
                            <div className="review-profile-description-container">
                                <img src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0zCWkUQmXmswgHf~dSzcYvvaU0CrPkZ~8QMu~jdskXwqIaoX6hIm9iu33pa50srCNNTinAs3s6JpSoF1LRLrh7b3cvPFE6Xsjq3JguDkzrXyPhbcSlFPT12otS~KyImhB5ptIkulnIEVI19ylmGwNyTyqBvM8owNSuM5bSLRf9bZ~h0C5205NC3nHRnBrb2rBHOIRlSgwm9POm~4RGeh04LJ0Nlb-hfx0BQFqUtAQhCTPySrl9cmBqC4JoJsgpl4f5CslDL-CpqZ3RhncTete3eH9xpEYSecCAnRh7w04yrrRMdwYBxP-HJq3hE6JXUjV2AC9azG5M9Rd7tp1oTzg__" className="review-profile" alt="review profile"/>
                                <div className="review-profile-description">
                                    <h1 className="review-profile-heading">Alicent Hightower</h1>
                                    <p className="review-profile-text">Consulted for Skin care</p>
                                    </div>
                             </div>   
                                <p className="review-posted-date">
                                20 January 2023
                                </p>
                           
                        </div>
                        <div className="review-card-content">
                            <div className="review-rating-container">
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                            </div>
                            <p className="review-content">
                            Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                            </p>
                        </div>

                    </li>
                    <li className="review-card-item">
                        <div className="review-card-profile" >
                            <div className="review-profile-description-container">
                                <img src="https://s3-alpha-sig.figma.com/img/682e/889c/026a53f2577835188ce397e0a36f4bb8?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=q0zCWkUQmXmswgHf~dSzcYvvaU0CrPkZ~8QMu~jdskXwqIaoX6hIm9iu33pa50srCNNTinAs3s6JpSoF1LRLrh7b3cvPFE6Xsjq3JguDkzrXyPhbcSlFPT12otS~KyImhB5ptIkulnIEVI19ylmGwNyTyqBvM8owNSuM5bSLRf9bZ~h0C5205NC3nHRnBrb2rBHOIRlSgwm9POm~4RGeh04LJ0Nlb-hfx0BQFqUtAQhCTPySrl9cmBqC4JoJsgpl4f5CslDL-CpqZ3RhncTete3eH9xpEYSecCAnRh7w04yrrRMdwYBxP-HJq3hE6JXUjV2AC9azG5M9Rd7tp1oTzg__" className="review-profile" alt="review profile"/>
                                <div className="review-profile-description">
                                    <h1 className="review-profile-heading">Alicent Hightower</h1>
                                    <p className="review-profile-text">Consulted for Pregnancy</p>
                                    </div>
                             </div>   
                                <p className="review-posted-date">
                                20 January 2023
                                </p>
                           
                        </div>
                        <div className="review-card-content">
                            <div className="review-rating-container">
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                                <img src="https://res.cloudinary.com/dzcpsxjuv/image/upload/v1728783309/r1m7ipeeiruu1ci6kj01.png" className="review-rating" alt="star"/>
                            </div>
                            <p className="review-content">
                            Might be bit early to confirm but yes I can see noticeable difference in my hairfall. will write again after using it for longer periods
                            </p>
                        </div>

                    </li>
                    
                </ul>  
                </div>
                    </div>
                    <BookAppointment book={bookAppointment}  onUpdateData={ onUpdateData}/>
                </div>
            </div>

        </div>
        {
            isPopup && (
                <div className="popup-container">
                    <div className="popup-card-container">
                    <div className="card-container">
                        <h1 className="heading">Booked Your Appointment</h1>
                    </div>
                    <div className="cross-container" onClick={onCancelPopup}>
                        X
                    </div>
                    </div>
                </div>
            )
        }
        
        </>
    )
}

export default Home;