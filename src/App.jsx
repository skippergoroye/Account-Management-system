import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
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
import Users from "./pages/Users";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminLayout from "./layout/AdminLayout";
import ProtectedAdminLayout from "./layout/ProtectedAdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import Transactions from "./pages/Transactions";
import AdminTransactions from "./pages/admin/Transactions";
import { PrivateRoute } from "./components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />

      {/* Private Route */}
      <Route path="" element={<PrivateRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
      </Route>
      <Route path="reset-password" element={<ResetPassword />} />
      <Route path="reset-new-password" element={<ResetNewPassword />} />
      <Route path="transactions" element={<Transactions />} />
      <Route path="create-account" element={<CreateAccount />} />
      <Route path="verification-mail" element={<VerificationMail />} />
      <Route path="settings" element={<Settings />}>
        <Route index element={<AccountSettings />} />
        <Route path="security-settings" element={<SecuritySettings />} />
      </Route>
      <Route path="/backoffice" element={<AdminLayout />}>
        <Route index element={<AdminLogin />} />
        <Route path="dashboard" element={<ProtectedAdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="transactions" element={<AdminTransactions />} />

          <Route path="settings" element={<Settings />}>
            <Route index element={<AccountSettings />} />
            <Route path="security-settings" element={<SecuritySettings />} />
          </Route>
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
