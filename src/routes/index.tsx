import {createFileRoute} from '@tanstack/react-router'
import creando from '../assets/creando.mp4'
import FlipWords from "../components/FlipWords.tsx";
import Cards from "../components/FlavourCard.tsx";
import oriental from '../assets/oriental.webp'
import biscuit from '../assets/biscuit.webp'
import citric from '../assets/citric.webp'
import floral from '../assets/floral.webp'
import fruit from '../assets/fruit2.webp'
import madera from '../assets/madera.webp'
import Genres from "../components/GenresCards.tsx";

export const Route = createFileRoute('/')({
    component: () => Home()
})


function Home() {

    const words = ["Descubre", "Crea", "Modifica", "Personaliza", "Comparte"];

    return (
        <>
            <div className="relative min-h-screen grid place-items-center mb-8">
                <video
                    src={creando}
                    autoPlay
                    loop
                    muted
                    className="absolute z-0 w-full h-full object-cover"
                ></video>
                <div
                    className="absolute w-full h-full flex flex-col justify-center items-center gap-[70px] text-center text-white">
                    <div className="h-[40rem] flex justify-center items-center px-4">
                        <div className="text-5xl mx-auto font-bold text-white dark:text-neutral-400">
                            <FlipWords words={words} duration={3000}/> <br/>
                            el arte de la perfumería a tu medida.
                        </div>
                    </div>
                </div>
            </div>
            <div className='container'>
                <Genres/>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <Cards title="oriental" source={oriental} alt="oriental"/>
                    <Cards title="biscuit" source={biscuit} alt="biscuit"/>
                    <Cards title="citric" source={citric} alt="citric"/>
                    <Cards title="floral" source={floral} alt="floral"/>
                    <Cards title="fruit" source={fruit} alt="fruit"/>
                    <Cards title="madera" source={madera} alt="madera"/>
                </div>

            </div>
        </>
    )
}