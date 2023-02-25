import "./App.css";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import Registration from "./pages/register/Registration";
import LoginPage from "./pages/login/LoginPage";
import EmailVerify from "./pages/verify/EmailVerify";
import { ToastContainer } from "react-toastify";
import Dashboard from "./pages/dashboard/Dashboard";
import ResetPassword from "./pages/reset-password/ResetPassword";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public routes */}
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<Registration />} />
          <Route path="/verify" element={<EmailVerify />} />
          <Route path="/reset-password" element={<ResetPassword />} />

          {/* private routs */}
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
