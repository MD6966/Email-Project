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

export default function Router() {
    const [progress, setProgress] = useState(0);

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
            ])}
        </>
    );
}
