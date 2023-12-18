import { useRoutes } from "react-router"
import Landing from "./Components/Landing"
import GroupChat from "./Views/GroupChat"

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '/group-chat',
            element: <GroupChat />
        }



    ])
    return element
}