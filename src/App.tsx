import { Routes, Route } from "react-router-dom"
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Patients from "./pages/patients/Patients";
import Messages from "./pages/message/Message";
import Appointment from "./pages/appointment/Appointment";
import History from "./pages/history/History";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Register/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/dashboard" element={ <Dashboard/> } />
        <Route path="/patients" element={ <Patients/> } />
        <Route path="/messages" element={ <Messages/> } />
        <Route path="/appointment" element={ <Appointment/> } />
        <Route path="/medical-history" element={ <History/> } />
      </Routes>
    </div>
  );
}

export default App;
