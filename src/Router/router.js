import AddBlog from "../Component/AddBlog/AddBlog";
import Login from "../Component/Form/Login";
import SignUp from "../Component/Form/SignUp";
import Home from "../Component/Home/Home";
import PrivetRoute from "../Component/PrivetRoute/PrivetRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/add-blog",element:<PrivetRoute><AddBlog/></PrivetRoute>},
            {path:"/login",element:<Login/>},
            {path:"/register",element:<SignUp/>},
            
        ]
    }
])

export default router