import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";
import Register from "./components/auth/Register";
import HomeScreen from "./components/HomeScreen";
import Login from "./components/auth/Login";
import ProductScreen from "./components/ProductScreen";
import ResourcesScreen from "./components/ResourcesScreen";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product" element={<ProductScreen />} />
          <Route path="/resources" element={<ResourcesScreen />} />
        </Routes>
      </Router>
    </>
  );
}
