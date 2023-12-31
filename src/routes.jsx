import React, { useState } from 'react';
import { useRoutes } from 'react-router';
import LoadingBar from 'react-top-loading-bar';
import Landing from './Components/Landing';
import Blogs from './Views/Blogs/Blogs';
import GroupChat from './Views/GroupChat';
import SoftwareDevelopment from './Views/SoftwareDevelopment/SoftwareDevelopment';
import GroupAndChat from './Views/GroupAndChat/GroupAndChat';
import Marketing from './Views/Marketing/Marketing';
import CreativeAgencies from './Views/CreativeAgencies/CreativeAgencies';
import ItAndSupport from './Views/ItAndSupport/ItAndSupport';
import Dashboard from './Layouts/dashboard';
import Register from './Views/Auth/Register';
import ProtectedRoutes from './Components/ProtectedRoutes/ProtectedRoutes'
import Login from './Views/Auth/Login';
import { useSelector } from 'react-redux';
import SettingsPage from './Layouts/dashboard/components/TopBar/components/SettingsPage';
export default function Router() {
    const [progress, setProgress] = useState(0);
    const isAuthenticatedUser = useSelector((state)=>state.email.isAuthenticatedUser)
    return (
        <>
            <LoadingBar
                color="#f11946"
                progress={progress}
                onLoaderFinished={() => setProgress(0)}
            />
            {useRoutes([
                {
                    path: '/',
                    element: <Landing setprogress={setProgress} />,
                },
                {
                    path: '/blogs',
                    element: <Blogs setprogress={setProgress} />,
                },
                {
                    path: '/group-chat',
                    element: <GroupChat />,
                },
                {
                    path: '/software-dev',
                    element: <SoftwareDevelopment />,
                },
                {
                    path: '/group-n-chat',
                    element: <GroupAndChat />,
                },
                {
                    path: '/marketing',
                    element: <Marketing />,
                },
                {
                    path: '/agencies',
                    element: <CreativeAgencies />,
                },
                {
                    path: '/it-n-support',
                    element: <ItAndSupport />,
                },
                {
                    element: <ProtectedRoutes isLogged={isAuthenticatedUser} />,
                    children: [
                        {   path:'/dashboard', element: <Dashboard setprogress={setProgress}/>},

                    ]
        
                },
                {
                    path:'/settings-page',
                    element:<SettingsPage/>
                },
                {
                    path:'/login',
                    element:<Login setprogress={setProgress}/>
                },
                {
                    path:'/register',
                    element:<Register setprogress={setProgress}/>
                }
            ])}
        </>
    );
}
