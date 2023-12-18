import { useRoutes } from "react-router"
import Landing from "./Components/Landing"
import Blogs from "./Views/Blogs/Blogs"
import GroupChat from "./Views/GroupChat"

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
       
    
      {
            path: '/group-chat',
            element: <GroupChat />
        }



    ])
    return element
}