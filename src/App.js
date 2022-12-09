import './App.css';
// import Header from './Component/Header';
import Login from './Pages/Login';
import Dashboard from './Pages/Dashboard';
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={< Login />} />
          <Route exact path="/dash" element={< Dashboard />} />
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
