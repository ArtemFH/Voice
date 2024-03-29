import {Navigate} from "react-router-dom";
// import {LayoutComponent, UserComponent} from "./components";

import {
    Feed,
    Jobs,
    Chat,
    // SignUp,
    // SignIn,
    Notices,
    Network
} from "./pages";
import LayoutComponent from "../ui-components/layout.component";
import UserComponent from "../ui-components/user.component";
import SignIn from "../pages/user/signIn.page";
import SignUp from "../pages/user/signUp.page";


export const routes = [
    {
        path: "/",
        element: <LayoutComponent/>,
        children: [
            {
                path: "",
                element: <Navigate to={"feed"}/>
            }, {
                path: "*",
                element: <Navigate to={"feed"}/>
            }, {
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
    }, {
        path: "user/",
        element: <UserComponent/>,
        children: [
            {
                path: "",
                element: <Navigate to={"sign-in"}/>
            }, {
                path: "*",
                element: <Navigate to={"sign-in"}/>
            }, {
                path: "sign-in",
                element: <SignIn/>
            }, {
                path: "sign-up",
                element: <SignUp/>
            }
        ]
    }
]
