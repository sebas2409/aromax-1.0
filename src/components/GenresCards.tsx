import {Card, CardFooter, Image, Button} from "@nextui-org/react";
import {useNavigate} from "@tanstack/react-router";

export default function Genres() {
    const router = useNavigate();
    return (
        <div className="flex justify-center items-center h-full mt-[40px]">
            {/* Contenedor de tarjetas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {/* Primera tarjeta */}
                <div className="w-full p-4">
                    <Card isFooterBlurred radius="lg" className="border-none h-full">
                        <div className="aspect-w-1 aspect-h-1">
                            <Image
                                alt="Man model"
                                className="object-cover"
                                src="https://assets.lummi.ai/assets/QmVsUvvPXZ5meLLwEXfAybwB9w3UGPDe894UYKgMNBFmps?auto=format&w=400&h=400&fit=crop"
                            />
                        </div>
                        <CardFooter
                            className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
                            <p className="text-big font-bold text-white/80">HOMBRE</p>
                            <Button
                                className="text-big text-white bg-black/20"
                                variant="flat"
                                color="default"
                                radius="lg"
                                size="sm"
                                onClick={() => router({
                                    to: "/productos",
                                    from: "/",
                                    viewTransition: true
                                })}
                            >
                                COMPRAR
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                {/* Segunda tarjeta */}
                <div className="w-full p-4">
                    <Card isFooterBlurred radius="lg" className="border-none h-full">
                        <div className="aspect-w-1 aspect-h-1">
                            <Image
                                alt="Woman model"
                                className="object-cover"
                                src="https://assets.lummi.ai/assets/QmYRhDA3wtaw3FY75gBokGT3684aqbzWd4feo3VgeQm9TF?auto=format&w=400&h=400&fit=crop"
                            />
                        </div>
                        <CardFooter
                            className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
                            <p className="text-big font-bold text-white/80">MUJER</p>
                            <Button
                                className="text-big text-white bg-black/20"
                                variant="flat"
                                color="default"
                                radius="lg"
                                size="sm"
                                onClick={() => router({
                                    to: "/productos",
                                    from: "/",
                                    viewTransition: true
                                })}
                            >
                                COMPRAR
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
                {/* Tercera tarjeta */}
                <div className="w-full p-4">
                    <Card isFooterBlurred radius="lg" className="border-none h-full">
                        <div className="aspect-w-1 aspect-h-1">
                            <Image
                                alt="Unisex parfums"
                                className="object-cover"
                                src="https://assets.lummi.ai/assets/QmQwb1pDcy52cavRjwiqfbqgE16rGnRdzyEfkXjcGUHp6B?auto=format&w=400&h=400&fit=crop"
                            />
                        </div>
                        <CardFooter
                            className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-full shadow-small ml-1 z-10">
                            <p className="text-big font-bold text-white/80">UNISEX</p>
                            <Button
                                className="text-bold text-white bg-black/20"
                                variant="flat"
                                color="default"
                                radius="lg"
                                size="sm"
                                onClick={() => router({
                                    to: "/productos",
                                    from: "/",
                                    viewTransition: true
                                })}
                            >
                                COMPRAR
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
