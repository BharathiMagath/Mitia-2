import Signup from './Components/Signup';
import Login from './Components/login';
import HomePage from './Components/HomePage';
import Chatbot from './Components/Chatbot';
import Profile from './Components/Profile';
import Location from './Components/Location';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/homepage" element={<HomePage />} />
          <Route path="/chatbot" element={<Chatbot />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/location" element={<Location />} />
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
