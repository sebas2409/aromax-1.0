import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    Button,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem, Link, Badge, useDisclosure
} from "@nextui-org/react";
import {useNavigate} from "@tanstack/react-router";
import {useState} from "react";
import {useCartStore} from "../state/cartStore.ts";
import ShoppingCartModal from "./ShoppingCartModal.tsx";
import icon from '../assets/icon.webp'

export default function MyNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const router = useNavigate()
    const {perfums} = useCartStore()
    const {onClose, isOpen, onOpen} = useDisclosure()

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
    ]

    return (
        <>
            <Navbar onMenuOpenChange={setIsMenuOpen}>
                <NavbarContent>
                    <NavbarMenuToggle
                        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                        className="sm:hidden"
                    />
                    <NavbarBrand className='flex gap-5'>
                        <svg width={30} height={30} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 323.19 323.19">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g>
                                    <g>
                                        <path
                                            d="M275.431,89.372c-35.025-37.7-92.668-54.635-143.439-56.752c-0.947-2.618-3.436-4.495-6.382-4.495H105.72 C102.59,14.556,93.36,0,82.452,0C68.974,0,58.04,22.227,58.04,37.36c0,10.68,5.499,19.827,13.437,24.35 c-0.181,0.614-0.383,1.225-0.383,1.903v5.064c-8.388,0.784-18.563,2.602-19.874,6.86c-2.268,7.382,22.716,13.06-4.543,40.32 c-27.26,27.26-42.588,53.378,0,116.981c42.59,63.604-13.06,83.477-13.06,83.477v4.542h48.835h48.835v-4.542 c0,0-55.649-19.873-13.059-83.477c42.587-63.603,27.26-89.721,0-116.981s-2.271-32.933-4.544-40.32 c-1.31-4.259-11.485-6.076-19.874-6.86v-5.06c0-0.673-0.202-1.289-0.383-1.903c5.447-3.102,9.699-8.368,11.842-14.853h20.345 c2.768,0,5.142-1.66,6.209-4.029c45.668,1.939,93.597,16.438,128.528,46.264c41.979,35.843,43.646,103.523,3.18,141.354 c-15.482-10.03-43.103-4.914-66.461,13.541c-26.817,21.199-37.845,51.947-24.617,68.683c13.22,16.726,45.682,13.11,72.504-8.089 c25.906-20.479,37.003-49.834,25.813-66.885C312.428,199.161,313.443,130.297,275.431,89.372z"></path>
                                    </g>
                                </g>
                            </g>
                        </svg>
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
                        <Badge color='primary' content={perfums.length}>
                            <Button isIconOnly color="secondary" aria-label="Like" onClick={() => {
                                onOpen()
                            }}>
                                <svg width={22} height={22} viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round"
                                       strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g id="Interface / Shopping_Cart_01">
                                            <path id="Vector"
                                                  d="M17 17C15.8954 17 15 17.8954 15 19C15 20.1046 15.8954 21 17 21C18.1046 21 19 20.1046 19 19C19 17.8954 18.1046 17 17 17ZM17 17H9.29395C8.83288 17 8.60193 17 8.41211 16.918C8.24466 16.8456 8.09938 16.7291 7.99354 16.5805C7.8749 16.414 7.82719 16.1913 7.73274 15.7505L5.27148 4.26465C5.17484 3.81363 5.12587 3.58838 5.00586 3.41992C4.90002 3.27135 4.75477 3.15441 4.58732 3.08205C4.39746 3 4.16779 3 3.70653 3H3M6 6H18.8732C19.595 6 19.9555 6 20.1978 6.15036C20.41 6.28206 20.5653 6.48862 20.633 6.729C20.7104 7.00343 20.611 7.34996 20.411 8.04346L19.0264 12.8435C18.9068 13.2581 18.8469 13.465 18.7256 13.6189C18.6185 13.7547 18.4772 13.861 18.317 13.9263C18.1361 14 17.9211 14 17.4921 14H7.73047M8 21C6.89543 21 6 20.1046 6 19C6 17.8954 6.89543 17 8 17C9.10457 17 10 17.8954 10 19C10 20.1046 9.10457 21 8 21Z"
                                                  stroke="#ffffff" strokeWidth="2" strokeLinecap="round"
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
            <ShoppingCartModal isOpen={isOpen} onOpen={onOpen} onClose={onClose}/>
        </>
    )
}