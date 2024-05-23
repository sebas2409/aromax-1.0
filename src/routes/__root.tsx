import {createRootRoute, Outlet} from "@tanstack/react-router";
import MyNavbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";

export const Route = createRootRoute({
    component: () => {
        return (
            <>
                <MyNavbar/>
                <Outlet/>
                <Footer/>
            </>
        )
    }
})