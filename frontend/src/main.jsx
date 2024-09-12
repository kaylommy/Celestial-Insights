import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from './App.jsx'
import Homepage from './components/home/homepage.jsx';
import Calculator from './components/calculator/calculator.jsx';
// import Login from './components/login/login.jsx';
import Quiz from './components/quiz/quiz.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
  
      children: [
        {
          index: true,
          element: <Homepage />
        },
        // {
        //   path: "login",
        //   element: <Login />
        // },
    //     {
    //       path: "signUp",
    //       element: <SignUpPage />
    //     },
        {
          path: "calculator",
          element: <Calculator />,
        },
        {
          path: "quiz",
          element: <Quiz />
        },
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