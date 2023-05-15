import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route  } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";


import "./App.css";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import PhoneSignUp from "./components/PhoneSignUp";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";

function App() {
  return (
    <Router>
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/phonesignup" element={<PhoneSignUp />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
    </Router>
  );
}

export default App;
