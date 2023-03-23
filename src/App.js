import React from 'react'; //Importing React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //Importing BrowserRouter to navigate through the navigations

//Importing components within the folder to be used.
import NavBar from './components/NavBar';
import Home from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Footer from './pages/Footer';



//The App.js file is the head/parent page for other files and where other components are running

function App() {
  return (
    <div className="App" >

    
    <React.StrictMode>
        <Router>
          {/* This allows the Navbar to always be displayed regardless of which page the user is on */}
            <NavBar /> 
          <Routes>
            {/* Having the pages as a seperate route for user to navigate through */}
            <Route path='/Home' element={<Home />} />
            <Route path='PageOne' element={<PageOne />} />
            <Route path='PageTwo' element={<PageTwo />} />
            <Route path='PageThree' element={<PageThree />} />
          </Routes>
          {/* This allows the Footer to always be displayed regardless of which page the user is on */}
            <Footer />
        </Router>
     </React.StrictMode>
     

    </div>
  )
}

export default App
