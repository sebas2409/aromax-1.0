import ReactDOM from 'react-dom/client'
import './index.css'
import {NextUIProvider} from "@nextui-org/react";
import {createRouter, RouterProvider} from "@tanstack/react-router";

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })


declare module '@tanstack/react-router' {
    interface Register {
        router: typeof router
    }
}


ReactDOM.createRoot(document.getElementById('root')!).render(
    <NextUIProvider>
        <RouterProvider router={router} />
    </NextUIProvider>
)
