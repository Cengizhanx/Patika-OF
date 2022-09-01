import './App.css';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import User from "./components/User";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'deactive')} to="/">Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'deactive')} to="/about">About</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => (isActive ? 'active' : 'deactive')} to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />}></Route>

          <Route path="/about" element={<About />}></Route>

          <Route element={<Users />}>
            <Route path='users' />
            <Route path='user/:id' element={<User />} />
          </Route>
          
          <Route path="*" element={<Error />}></Route>


          {/* 
          <Route path="users" element={<Users />}></Route>  
          
          <Route path="user/:id" element={<User />}></Route>     */}

        </Routes>
      </div>
    </Router>
  );
}

export default App;
