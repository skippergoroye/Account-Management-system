import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateAccount, ResetPassword, ResetNewPassword, Home, Login, NotFound, VerificationMail } from "./pages";
// import { PrivateRoute } from "./components";




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/reset-password"
            element={
              <ResetPassword />
            }
          />
          <Route
            path="/reset-new-password"
            element={
              <ResetNewPassword />
            }
          />

          {/* Private Route  */}
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
