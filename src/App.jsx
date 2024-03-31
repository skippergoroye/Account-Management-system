import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CreateAccount, Home, Login } from "./pages";
import { PrivateRoute } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account"element={
              <PrivateRoute>
                <CreateAccount />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
