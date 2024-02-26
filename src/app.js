import React, { useContext } from "react";
import ReactDOM from "react-dom/client";
import "../index.css";
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/About";
import Contact from "./component/Contact";
import RoutingError from "./component/RoutingError";
import RestaurantDetail from "./component/RestaurantDetail";
import UserContext from "./utils/UserContext"
// const heading = React.createElement("h1", {id:"heading2", xyz:"cewe"}, "hello Mr Rajeev");

const AppLayout = () => {
 
  return (
    <UserContext.Provider value={{loginUser: "Raj"}}>
    <div >
      <UserContext.Provider value={{loginUser: "Rajeev"}}>
      <Header />
      </UserContext.Provider>
      <Outlet />      {/* It gets filled up with component in that path */}
      
      
    </div>
    </UserContext.Provider>
    
  );
};

const AppRouter = createBrowserRouter(
  [
    {
      path:'/',
      element: <AppLayout/>,
      errorElement: <RoutingError /> ,  // If you want to handle that page is not found in that path
      children: [
        {
            path:'/',
            element:<Body/>
        },
        {
          path: '/about',
          element: <About/>
        },
        {
          path: '/contact',
          element: <Contact/>
        },
        {
          path: '/restaurantDetail/:resId',
          element: <RestaurantDetail />
        }
      ]
    },
   
  ]
)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);
