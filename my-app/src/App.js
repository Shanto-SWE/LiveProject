import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar.jsx'
import {Switch,Route, Redirect} from 'react-router-dom'
import Home from './Component/Home.jsx'
import About from './Component/About.jsx'
import Service from'./Component/Service.jsx'
import Contact from './Component/Contact.jsx'
import Footer from './Component/Footer.jsx'
import Error from'./Component/Error.jsx'

function App() {
  return (
    <div className="App">
  <Navbar/>
      <Switch>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/service" component={Service}/>
        <Route exact path="/contact" component={Contact}/>
       <Redirect to='/'></Redirect>
      </Switch>
      <Footer/>
   
  
    </div>
  );
}

export default App;
