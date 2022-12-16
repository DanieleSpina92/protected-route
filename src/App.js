import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import MyTask from "./components/Mytask";
import Setup from "./components/Setup";
import Admin from "./components/Admin";

function App() {
  const isLoggedUser = useSelector((state) => state.loggedInUser);

  return (
      <Router>
        <Navbar isLoggedUser={isLoggedUser}/>
        <Routes>
          <Route path="/" element={<Login/>} /> 
          <Route
            path="/Home"
            element={
              <Protected isLoggedIn={isLoggedUser}>
                <Home />
              </Protected>
            }
          />
          <Route
            path="/mytask"
            element={
              <Protected isLoggedIn={isLoggedUser}>
                <MyTask />
              </Protected>
            }
          />
        <Route
            path="/setup"
            element={
              <Protected isLoggedIn={isLoggedUser}>
                <Setup />
              </Protected>
            }
          />
        <Route
            path="/admin"
            element={
              <Protected isLoggedIn={isLoggedUser}>
                <Admin />
              </Protected>
            }
          />
        </Routes>
      </Router>

  );
}

export default App;
