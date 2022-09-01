import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from './pages/Home';
import Detail from "./pages/Detail";
import Quotes from './pages/Quotes';
import QuotesDetail from './pages/QuotesDetail';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Characters</Link>
            </li>
            <li>
              <Link to="/quotes">Quotes</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/char/:char_id" element={<Detail />}></Route>
          <Route path="/quotes" element={<Quotes />}></Route>
          <Route path="/quotes/:quote_id" element={<QuotesDetail />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
