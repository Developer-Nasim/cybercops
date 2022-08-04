import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Errorpage from "./pages/Errorpage";
import Vuln from "./pages/Vulnerability";
import Login from "./pages/LoginPage";
import RenderOnAnonymous from "./components/RenderOnAnonymous";
import RenderOnAuthenticated from "./components/RenderOnAuthenticated";
import { BrowserRouter as Router } from "react-router-dom";
import Challengedetails from "./pages/Challengedetails";
import Vulnerabilitydetails from "./pages/Vulnerabilitydetails";


import Header from "./components/helper/header";

import "./default.css"


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Container maxWidth="xl">
          <RenderOnAnonymous>
            <Routes>
              <Route path="/" element={<Homepage />} />
            </Routes>
          </RenderOnAnonymous>
          <RenderOnAuthenticated>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route
                path="/challengeDetails/:key"
                element={<Challengedetails />}
              />
              <Route path="/vuln/:title" element={<Vuln />} />
              <Route
                path="/vulndetails/:id/:key"
                element={<Vulnerabilitydetails />}
              />
            </Routes>
          </RenderOnAuthenticated>

          {/* <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Errorpage />} />
        </Routes> */}
        </Container>
      </div>
    </Router>
  );
}

export default App;
