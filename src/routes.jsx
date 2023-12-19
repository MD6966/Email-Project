import { useRoutes } from "react-router"
import Landing from "./Components/Landing"
import Blogs from "./Views/Blogs/Blogs"
import GroupChat from "./Views/GroupChat"
import Purple from "./Views/Email/Purple"
import EmailApp from "./Views/Email/EmailApp"
import Help from "./Views/Help"

export default function Router() {
    let element = useRoutes([
        {
            path: '/',
            element: <Landing />,
        },
        {
            path: '/blogs',
            element: <Blogs />
        },


        {
            path: '/group-chat',
            element: <GroupChat />
        },
        {
            path: 'purple',
            element: <Purple />
        },
        {
            path: 'email-app',
            element: <EmailApp />
        },
        {
            path: 'help',
            element: <Help />
        }

    ])
    return element
}