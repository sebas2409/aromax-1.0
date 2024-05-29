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
import {ImagesSlider} from "../components/ImageSlider.tsx";
import Newsletter from "../components/Newsletter.tsx";
import Info from "../components/Info.tsx";

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
                        <div className="text-5xl mx-auto font-bold text-white video">
                            <FlipWords words={words} duration={1500}/> <br/>
                            <span className='title-1 video'>el arte de la perfumería a tu medida.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container flex flex-col gap-5'>
                <div className='grid grid-cols-2 gap-8 items-center justify-center'>
                    <ImagesSlider className='h-[600px]' images={[
                        "https://assets.lummi.ai/assets/QmYhyyWPc5afAMP8vYcKPFB8t8KEkDftsJiDQQt877xfeZ?auto=format&w=1500",
                        "https://assets.lummi.ai/assets/QmZzpXuduf38WUqfEkTuyXAeHBxWAVRJ82q12tYGNUtQq2?auto=format&w=1500",
                        "https://assets.lummi.ai/assets/QmWdTiE58QHXefLcRNKCRi5pHbuUdDdFnujvhpJRfcNbzN?auto=format&w=1500",
                    ]} children={
                        <p></p>
                    }/>
                    <div>
                        <h2 className="text-center my-4 cards-parfum">
                            ¿Por qué Aromax es tan especial?
                        </h2>
                        <p>
                            En nuestra empresa, creemos que la esencia de un perfume va más
                            allá de su aroma; es una experiencia sensorial que cuenta una
                            historia única. Nuestra pasión por la perfumería nos impulsa a
                            buscar las mejores materias primas, combinando tradición y
                            modernidad para crear fragancias que evocan emociones y recuerdos
                            inolvidables.
                        </p>
                        <br/>
                        <p>
                            Nos dedicamos a innovar constantemente, trabajando de la mano con
                            expertos perfumistas y artistas creativos para desarrollar
                            colecciones que reflejen la diversidad y riqueza de nuestras
                            culturas. Cada botella es un reflejo de nuestro compromiso con la
                            calidad y la artesanía, diseñada para ser no solo un accesorio,
                            sino una extensión de la personalidad de quien la lleva.
                        </p>
                    </div>
                </div>
                <h2 className="text-center mt-[100px] cards-parfum">
                    Géneros de fragancias
                </h2>
                <Genres/>
                <h2 className="text-center cards-parfum mt-[100px]">
                    Familias olfativas
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
                    <Cards title="oriental" source={oriental} alt="oriental"/>
                    <Cards title="biscuit" source={biscuit} alt="biscuit"/>
                    <Cards title="citric" source={citric} alt="citric"/>
                    <Cards title="floral" source={floral} alt="floral"/>
                    <Cards title="fruit" source={fruit} alt="fruit"/>
                    <Cards title="madera" source={madera} alt="madera"/>
                </div>
                <Info/>
                <Newsletter/>
            </div>
        </>
    )
}