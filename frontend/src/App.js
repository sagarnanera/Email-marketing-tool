import "./App.css";
import Loginpage from "./pages/Loginpage";
import Registerpage from "./pages/Registerpage";
import Home from './pages/Home';
import Error from './components/Error';
import IndexPage from "./pages/IndexPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import EmailEditor from "./pages/EmailEditor";

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/email-builder" element={<EmailEditor />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>

    </>
  );
}

export default App;
