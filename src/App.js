import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';





function App() {
  return (
    <div className="App">

      {/* <React.Fragment>
        <NavBar />
      </React.Fragment> */}

    <React.StrictMode>
        <Router>
            <NavBar />
          <Routes>
            <Route path='/Home' element={<Home />} />
            <Route path='PageOne' element={<PageOne />} />
            <Route path='PageTwo' element={<PageTwo />} />
            <Route path='PageThree' element={<PageThree />} />
          </Routes>
        </Router>
     </React.StrictMode>
     

    </div>
  )
}

export default App
