
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  CreateAccount,
  ResetPassword,
  ResetNewPassword,
  Home,
  Login,
  NotFound,
  VerificationMail,
  Settings,
  Dashboard,
  AccountSettings,
  SecuritySettings,
} from "./pages";
import Users from "./pages/Users";

// import { PrivateRoute } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-new-password" element={<ResetNewPassword />} />
          <Route path="/Users" element={<Users />} />

          <Route path="/create-account" element={<CreateAccount />} />
          <Route path="/verification-mail" element={<VerificationMail />} />
          <Route path="/settings" element={<Settings />}>
            <Route index element={<AccountSettings />} />
            <Route path="security-settings" element={<SecuritySettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
