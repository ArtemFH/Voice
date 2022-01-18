import {Feed, Network, Jobs, Chat, Notices} from "./pages";
import {Layout} from "./components";
import {Navigate} from "react-router-dom";

export const routes = [
    {
        path: "*",
        element: <Navigate to={"feed"}/>
    },
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Navigate to={"feed"}/>
            },
            {
                path: "feed",
                element: <Feed/>
            }, {
                path: "network",
                element: <Network/>
            }, {
                path: "jobs",
                element: <Jobs/>
            }, {
                path: "chat",
                element: <Chat/>
            }, {
                path: "notices",
                element: <Notices/>
            }
        ]
    }
]
