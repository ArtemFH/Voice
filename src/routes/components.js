import {Suspense, lazy} from "react";

const Loader = (Component) => (props) => (
    <Suspense fallback={<></>}>
        <Component {...props}/>
    </Suspense>
)

export const LayoutComponent = Loader(lazy(() => import('../ui-components/layout.component')));
export const UserComponent = Loader(lazy(() => import('../ui-components/user.component')));