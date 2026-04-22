import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import ProtectedRoute from "./components/ProtectedRoute";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import LostItemForm from "./pages/LostItemForm";
import FoundItemForm from "./pages/FoundItemForm";
import BrowseLostItems from "./pages/BrowseLostItems";
import BrowseFoundItems from "./pages/BrowseFoundItems";
import ItemDetails from "./pages/ItemDetails";
import Dashboard from "./pages/Dashboard";
import Matches from "./pages/Matches";
import Notifications from "./pages/Notifications";
import AdminPanel from "./pages/AdminPanel";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/lost-items" element={<BrowseLostItems />} />
        <Route path="/found-items" element={<BrowseFoundItems />} />
        <Route path="/item/:type/:id" element={<ItemDetails />} />

        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/report-lost" element={<LostItemForm />} />
          <Route path="/report-found" element={<FoundItemForm />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/matches" element={<Matches />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;