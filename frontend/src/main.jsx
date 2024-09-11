import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Homepage from './components/home/homepage.jsx';
import Calculator from './components/calculator/calculator.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
  
      children: [
        {
          index: true,
          element: <Homepage />
        },
    //     {
    //       path: "login",
    //       element: <LoginPage />
    //     },
    //     {
    //       path: "signUp",
    //       element: <SignUpPage />
    //     },
        {
          path: "calculator",
          element: <Calculator />,
        },
    //     {
    //       path: "about-us",
    //       element: <AboutUs />
    //     },
    //     {
    //       path: "settings",
    //       element: <SettingsPage />
    //     },
    //     {
    //       path: "fit-ai",
    //       element: <AIHelperPage />
    //     },
    //     {
    //       path: "workout",
    //       element: <WorkoutPage />
    //     }
      ],
    },
  ]);
  
  ReactDOM.createRoot(document.getElementById('root')).render(
        <RouterProvider router={router} />
  );