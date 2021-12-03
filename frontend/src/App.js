import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from "./Main";
import Login from "./Authenticate/Login";
import Register from "./Authenticate/Register";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import Home from "./Components/Home";
import Logout from "./Components/Logout";
import Friends from "./Components/Friends";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Main/>} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/register" element={<Register/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/profile" element={<Profile/>} />
          <Route exact path="/home" element={<Home/>} />
          <Route exact path="/logout" element={<Logout/>} />
          <Route exact path="/friends" element={<Friends/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
