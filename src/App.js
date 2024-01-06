import { BrowserRouter as Router, Routes, Route,Navigate } from "react-router-dom";
import Rootlayout from "./layout/Rootlayout";
import CompanyCard from "./components/CompanyCard";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Hero from "./components/Hero";
import Result from "./pages/Result";
import Profile from "./pages/Profile";
import Company from "./components/Company";
import CompnayDetails from "./pages/CompanyDetails";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./auth/Login";
import Test from "./pages/Test";
import Signup from "./auth/Signup";
import PrivateRoutes from "./layout/PrivateRoutes";
import { ToastContainer } from "react-toastify";
import Resume from "./pages/Resume";

function App() {
  const { user, authIsReady } = useAuthContext();

  console.log(user);

  console.log(authIsReady);

  return (
    <div className="App">
  
      <Router>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {/* <Route path="/" element={<Hero {...user} />} /> */}
            <Route path="/" element={authIsReady ? <Hero {...user} />: <Navigate to="/" /> } />
            <Route path="/jobs" element={<Jobs />} />
            <Route
              path="/profile"
              element={authIsReady ? <Profile /> : <Navigate to="/login" />}
            />
            <Route path="/rules" element={<Result />} />
            <Route path="/jobs/:id" element={<CompnayDetails />} />
            <Route path="/test" element={<Test />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
          <Route element={<Login />} path="/login" />
          <Route element={<Signup />} path="/signup" />
        </Routes>
      </Router>
    </div>
  );
}

// router and routes

export default App;

// {/* <Route path="/" element={<PrivateRoutes  />}>
//         {/* <Route path="/" element={authIsReady ? <Hero /> : <Navigate to="/login" />} /> */}
//         <Route path="/" element={<Hero {...user} /> } />
//         <Route path="/login" element={ <Login />} />
//          {/* <Route path="/login" element={!user ? <Login /> : <Navigate to="/" />} /> */}

//         <Route path="/jobs" element={<Jobs />} />
//         <Route path="/profile" element={authIsReady ? <Profile   /> : <Navigate to="/login" />} />
//         <Route path="/rules" element={<Result />} />
//         <Route path="/jobs/:id" element={<CompnayDetails />} />
//         <Route path="/test" element={<Test />} />
//         <Route path="/signup" element={ <Signup />} />
//       </Route> */}
