import { useRoutes } from "react-router"
import Landing from "./Components/Landing"
import Blogs from "./Views/Blogs/Blogs"
export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path:'/blogs',
            element: <Blogs />
        },
       
    
      

    ])
    return element
}