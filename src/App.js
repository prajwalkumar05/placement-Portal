import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Jobs from "./pages/Jobs";
import Home from "./pages/Home";
import Setting from "./pages/Setting";
import Result from "./pages/Result";
import Login from "./auth/Login";
import CompanyDetails from "./pages/CompanyDetails";
import Dashboard from "./pages/Dashboard";

function App() {
  const Layout = () => {

    let user=false

    return (
      <div>
        {user ? <Login /> :<>
          <Navbar />
          <Hero />
          <div className="mt-[20px] mx-28 border h-full">
            <Outlet />
          </div>
        </>}
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/home",
          element: <Home />,
        },
        {
          path: "/setting",
          element: <Setting />,
        },
        {
          path: "/result",
          element: <Result />,
        },
        {
          path: "/jobs",
          element: <Jobs />,
        },
        {
          path: "/cd",
          element: <CompanyDetails />,
        },
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
