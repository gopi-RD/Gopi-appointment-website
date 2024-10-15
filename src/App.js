
import { BrowserRouter,Route,Switch } from "react-router-dom"
import Home from "./components/Home"
import './App.css';
import FindExpertDoctor from "./components/FindExpertDoctor";
import RegisterRoute from "./components/RegisterRoute";
import LoginRoute from "./components/LoginRoute";
import ProtectedRoute from "./components/ProtectedRoute";
import AboutUs from "./components/AboutUs";


function App() {
 

  return (
   
    <BrowserRouter>
    <Switch>
        <Route exact  path="/sign-up" component={RegisterRoute} />
        <Route exact path="/login" component={LoginRoute} />
       <ProtectedRoute exact path="/" component={Home} />
       <ProtectedRoute exact path="/find-doctors" component={FindExpertDoctor}/>
       <ProtectedRoute exact path="/about-us" component={AboutUs}/>
    </Switch>
    </BrowserRouter>
  
    
    
  );
}

export default App;
