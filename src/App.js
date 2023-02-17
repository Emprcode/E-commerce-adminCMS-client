import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/register/Registration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerify from "./pages/verify/EmailVerify";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<Registration />}></Route>
          <Route path="/verify" element={<EmailVerify />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
