import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Course from "./components/pages/Course";
import Home from "./components/pages/Home";
import Signup from "./components/pages/Signup.";
import { useAuth } from "./context/AuthProvider";
// import Home from "./components/pages/Home";

export default function App() {
  const [authUser, setAuthUser] = useAuth();

  return (
    <Router>
      <div className="dark:bg-slate-900 dark:text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Course /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
