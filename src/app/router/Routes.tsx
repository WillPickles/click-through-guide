import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../layout/App";
import HomePage from "../../pages/Homepage";
import DiagPage1 from "../../pages/diag/Diagpage1";
import DiagPage3 from "../../pages/diag/Diagpage3";
import DiagPage2 from "../../pages/diag/Diagpage2";


export const router = createBrowserRouter([
    {
        path: '/', 
        element: <App />,
        children: [
            {path: '', element: <HomePage />},
            {path: 'diagpage1', element: <DiagPage1 />},
            {path: 'diagpage2', element: <DiagPage2 />},
            {path: 'diagpage3', element: <DiagPage3 />},

        ]
    }
])