import {createBrowserRouter} from "react-router";
import LayoutApp from "@app/layout/layout-app.tsx";
import {Home} from "@pages/home";
import {Staff} from "@pages/staff";
import {Gryffindor} from "@pages/gryffindor";
import {Slytherin} from "@pages/slytherin/ui/slytherin.tsx";
import {Hufflepuff} from "@pages/hufflepuff";
import {Ravenclaw} from "@pages/ravenclaw";


export const routes = createBrowserRouter([
    {
        path: '/',
        Component: LayoutApp,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: '/staff',
                Component: Staff
            },
            {
                path: '/gryffindor',
                Component: Gryffindor
            },
            {
                path: '/slytherin',
                Component: Slytherin
            },
            {
                path: '/hufflepuff',
                Component: Hufflepuff
            },
            {
                path: '/ravenclaw',
                Component: Ravenclaw
            },

        ]
    }

])