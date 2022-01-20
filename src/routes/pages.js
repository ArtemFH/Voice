import {Suspense, lazy} from "react";

const Loader = (Component) => (props) => (
    <Suspense fallback={<></>}>
        <Component {...props}/>
    </Suspense>
)

export const Feed = Loader(lazy(() => import('../pages/feed.page')));
export const Network = Loader(lazy(() => import('../pages/network.page')));
export const Jobs = Loader(lazy(() => import('../pages/jobs.page')));
export const Chat = Loader(lazy(() => import('../pages/chat.page')));
export const Notices = Loader(lazy(() => import('../pages/notices.page')));
export const SignIn = Loader(lazy(() => import('../pages/user/signIn.page')));
export const SignUp = Loader(lazy(() => import('../pages/user/signUp.page')));