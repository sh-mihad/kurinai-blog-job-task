import AddBlog from "../Component/AddBlog/AddBlog";
import Login from "../Component/Form/Login";
import SignUp from "../Component/Form/SignUp";
import Home from "../Component/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Layout/Main");

const router = createBrowserRouter([
    {
        path:"/",
        element:<Main/>,
        children:[
            {path:"/",element:<Home/>},
            {path:"/add-blog",element:<AddBlog/>},
            {path:"/login",element:<Login/>},
            {path:"/register",element:<SignUp/>},
            
        ]
    }
])

export default router