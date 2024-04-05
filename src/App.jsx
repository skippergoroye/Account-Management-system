import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  NavLink,
} from "react-router-dom";
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
// import { PrivateRoute } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="reset-new-password" element={<ResetNewPassword />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="verification-mail" element={<VerificationMail />} />
      <Route path="verification-mail" element={<VerificationMail />} />
      <Route path="settings" element={<Settings />}>
        <Route index element={<AccountSettings />} />
        <Route path="security-settings" element={<SecuritySettings />} />
      </Route>
      <Route path="*" element={<NotFound />} />

      
      {/* // Private Route
      <Route
        path="dashboard"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      /> */}
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
