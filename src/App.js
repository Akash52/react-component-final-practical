import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Register from "./components/auth/Register";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}
