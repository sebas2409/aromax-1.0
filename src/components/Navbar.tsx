import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem, Link, Badge
} from "@nextui-org/react";
import {useNavigate} from "@tanstack/react-router";
import {useState} from "react";

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useNavigate()

    const paths = [
        {
            path: "/",
            name: "Home",
        },
        {
            path: "/productos",
            name: "Productos",
        },
        {
            path: "/personalizar",
            name: "Personaliza el tuyo",
        },
        {
            path: "/club",
            name: "Aromax club",
        },
        {
            path: "/sobre-nosotros",
            name: "Sobre nosotros",
        }
    ]

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden"
                />
                <NavbarBrand>
                    <p className="font-bold text-inherit">Aromax</p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                {
                    paths.map((item, index) => {
                        return (
                            <NavbarItem key={index}>
                                <Link
                                    isBlock
                                    color='foreground'
                                    title={item.name}
                                    className="w-full text-black font-bold"
                                    onClick={() => {
                                        router({
                                            to: item.path,
                                            viewTransition: true,
                                            from: window.location.pathname
                                        }).then(() => {
                                            setIsMenuOpen(!isMenuOpen)
                                        })
                                    }}
                                >
                                    {item.name}
                                </Link>
                            </NavbarItem>
                        )
                    })
                }
            </NavbarContent>
            <NavbarContent justify="end">
                <NavbarItem className="hidden lg:flex">
                    <Link href="#" className='text-black'>Login</Link>
                </NavbarItem>
                <NavbarItem>
                    <Badge color='danger' content={0}>
                        <Button isIconOnly color="default" aria-label="Like">
                            <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                   strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g id="Interface / Shopping_Cart_01">
                                        <path id="Vector"
                                              d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z"
                                              stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                              strokeLinejoin="round"></path>
                                    </g>
                                </g>
                            </svg>
                        </Button>
                    </Badge>
                </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
                {paths.map((item, index) => (
                    <NavbarMenuItem key={index} className='flex flex-col gap-8'>
                        <Link
                            isBlock
                            color='foreground'
                            className="w-full text-black font-bold"
                            onClick={() => {
                                router({
                                    to: item.path,
                                    viewTransition: true,
                                    from: window.location.pathname
                                }).then(() => {
                                    setIsMenuOpen(!isMenuOpen)
                                })
                            }}
                        >
                            {item.name}
                        </Link>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    )
}