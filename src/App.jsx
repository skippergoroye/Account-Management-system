import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateAccount, Home, Login, NotFound, VerificationMail, Settings, AccountSettings, SecuritySettings } from "./pages";
// import { PrivateRoute } from "./components";




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/create-account"
            element={
              <CreateAccount />
            }
          />
          <Route
            path="/verification-mail"
            element={
              <VerificationMail />
            }
          />
          <Route
            path="/settings"
            element={
              <Settings />
            }
          >
            <Route index path="account-settings" element={<AccountSettings />} />
            <Route path="security-settings" element={<SecuritySettings />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
