import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateAccount, Home, Login, NotFound, VerificationMail} from "./pages";
// import { PrivateRoute } from "./components";




function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

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
          {/* <Route 
            path="/createaccount-form"
            element={
              <CreateAccountForm />
            }
          /> */}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
