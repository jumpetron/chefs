import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Login from "../components/Login";
import Signup from "../components/Signup";
import DashboardLayout from "../layout/DashboardLayout";
import Main from "../layout/Main";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import Dashboard from "../pages/dashboard/admin/Dashboard";
import ManageBookings from "../pages/dashboard/admin/ManageBookings";
import ManageItems from "../pages/dashboard/admin/ManageItems";
import UpdateMenu from "../pages/dashboard/admin/UpdateMenu";
import Users from "../pages/dashboard/admin/Users";
import Order from "../pages/dashboard/user/Order";
import UserProfile from "../pages/dashboard/user/UserProfile";
import Home from "../pages/home/Home";
import CartPage from "../pages/menuPage/CartPage";
import Menu from "../pages/menuPage/Menu";
import Payment from "../pages/menuPage/Payment";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order",
        element: (
          <PrivateRoute>
            <Order />
          </PrivateRoute>
        ),
      },
      {
        path: "/update-profile",
        element: <UserProfile />,
      },
      {
        path: "/cart-page",
        element: <CartPage />,
      },
      {
        path: "/process-checkout",
        element: <Payment />,
      },
    ],
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "add-menu",
        element: <AddMenu />,
      },
      {
        path: "manage-items",
        element: <ManageItems />,
      },
      {
        path: "update-menu/:id",
        element: <UpdateMenu />,
        loader: ({ params }) =>
          fetch(`https://chefs.onrender.com/menu/${params.id}`),
      },
      {
        path: "bookings",
        element: <ManageBookings />,
      },
    ],
  },
]);

export default router;
