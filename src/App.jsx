import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import InterviewQuestions from './components/InterveiwQuestions/InterviewQuestions';
import Placement from './components/Placement/Placement';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Save from './components/Save/Save';
import SignUp from './components/SignUp/SignUp'

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/interviewquestions' element={<InterviewQuestions />} />
          <Route path='/placement' element={<Placement />} />
          <Route path='/about' element={<About />} />
          <Route path='/save' element={<Save />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  )
}

export default App