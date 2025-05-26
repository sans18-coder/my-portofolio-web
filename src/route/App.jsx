import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import NotFound from "../components/NotFound";
import Portofolio from "../pages/Portofolio";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate replace to="/profile" />} />
        <Route path="/:content" element={<Portofolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
