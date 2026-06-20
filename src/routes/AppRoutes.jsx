import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Quiz from "../pages/Quiz";
import Categories from "../pages/Categories";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Leaderboard from "../pages/Leaderboard";
import ProtectedRoute from "../components/ProtectedRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
  path="/categories"
  element={
    <ProtectedRoute>
      <Categories />
    </ProtectedRoute>
  }
/>

<Route
  path="/quiz"
  element={
    <ProtectedRoute>
      <Quiz />
    </ProtectedRoute>
  }
/>

<Route
  path="/history"
  element={
    <ProtectedRoute>
      <History />
    </ProtectedRoute>
  }
/>
    <Route
  path="/profile"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>

<Route
  path="/leaderboard"
  element={
    <ProtectedRoute>
      <Leaderboard />
    </ProtectedRoute>
  }
/>
    </Routes>
  );
}

export default AppRoutes;