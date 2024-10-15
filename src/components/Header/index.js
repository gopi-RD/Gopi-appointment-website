
import {Link,withRouter} from "react-router-dom"
import Cookies from "js-cookie"
import "./index.css"


const Header=(props)=>{

    const onLoginButton=()=>{
        const {history}=props
        history.replace("/login")
    }
    const onRegisterButton=()=>{
        const {history}=props
        history.replace("/sign-up")
    }

    const token=Cookies.get("jwt_token") 

    const onLogoutButton=()=>{
        Cookies.remove("jwt_token")
        props.history.replace("/login")
    }

    return (
       
        <div className="header-bg-container">
            <header className="header-container">
                <nav className="navbar-container">
                <img src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1729468800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hr2l-ob-ayGrTEninG5wSSiButtbLxZMeapSNqjWUAu6BSvK5m6aA4T3Sdsiuf7Wvjmu8zzi7mDbMSBvGund4-uw-heIwlwI1XForbCmXEnJYe6ow1MTE6Ek~GkWE01fsiGFq0n41eVNX62xfP1LP5AMIONI4Ckw2uXQK1-EWuvWbS9b98awriHmmnut2ik0UEUMLn0151FLTW0eL-6gg07yQJj-nkuBU6wVATlgVWueOuHkjD12l4wO2xr~zyWPvtykmnvM9WvGK~EyMYoCYY9XM8CQhul1A5qnMKRTl~LRNY9E6js9hfx~srEphtFpxYOakIDC5l224g37MN9fBQ__" className="website-logo" alt="AMRUTAM"/>
                    <ul className="nav-link-items">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                            Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/find-doctors">
                            Find Doctors
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about-us">
                            About Us 
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
                
                    <div className="button-container"> 
                        {
                            token===undefined ? (
                                <>
                                    <button className="login-button" onClick={onLoginButton}>
                                    Login
                                </button> 
                                <button className="sign-up-button" onClick={onRegisterButton}>
                                    Sign-up
                                </button>
                                </>
                            ) :
                            (
                                <button className="sign-up-button" onClick={onLogoutButton}>
                                    Logout
                                </button>
                            )
                        }
                        
                    </div> 
            </header>
        </div>
    )
}


export default withRouter(Header);