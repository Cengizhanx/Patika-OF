import './App.css';
import Contacts from "./components/Contact";
import Edit from "./components/Edit";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div id='container'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Contacts />}></Route>
            <Route path="/edit/:id" element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
