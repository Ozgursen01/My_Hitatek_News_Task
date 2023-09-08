import React,{lazy, Suspense} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Political from './components/Political';
import Sport from './components/Sport';
import Business from './components/Business';
import General from './components/General';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/political" element={<Political />} />
          <Route path="/sport" element={<Sport />} />
          <Route path="/business" element={<Business />} />
          <Route path="/general" element={<General />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;