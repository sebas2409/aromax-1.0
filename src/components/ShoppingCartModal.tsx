import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    Button,
} from "@nextui-org/react";
import {useCartStore} from "../state/cartStore.ts";

export default function ShoppingCartModal({isOpen, onOpen, onClose}: {
    isOpen: boolean,
    onOpen: () => void,
    onClose: () => void
}) {

    const {perfums, removePerfume} = useCartStore()
    const totalAmount = perfums.reduce((acc, item) => acc + item.price, 0)
    return (
        <>
            <Modal
                size={"full"}
                isOpen={isOpen}
                onClose={onClose}
                className="flex items-center justify-center min-h-screen"
            >
                <ModalContent className="w-full max-w-3xl">
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                <div className="p-3 py-4 bg-black text-white">
                                    <div className="container mx-auto">
                                        <div className="flex flex-col lg:flex-row items-center justify-between">
                                            <h2 className="text-center text-lg tracking-tighter ">
                                                <br className="sm:hidden"/>
                                                Cada perfume incluye una muestra para probarla primero
                                                🙂
                                            </h2>
                                            <div className="space-x-2 text-center py-2 lg:py-0">
                                                <span>envío gratis con este código:</span>
                                                <span className="font-bold text-lg">MARIPURI</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10">
                                    <h2 className="text-xl font-semibold">Tu carrito</h2>
                                    <ul className="flex flex-col divide-y dark:divide-gray-300">
                                        {
                                            perfums.map((item, index) => {
                                                return (
                                                    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
                                                    <div className="flex w-full space-x-2 sm:space-x-4">
                                                        <img
                                                            className="flex-shrink-0 object-cover h-[200px] outline-none"
                                                            src={item.imageSrc}
                                                            alt="Polaroid camera"
                                                        />
                                                        <div className="flex flex-col justify-between w-full pb-4">
                                                            <div className="flex justify-between w-full pb-2 space-x-2">
                                                                <div className="space-y-1">
                                                                    <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                                                                        {item.brand}
                                                                    </h3>
                                                                    <p className="text-sm dark:text-gray-600">
                                                                        {item.name}
                                                                    </p>
                                                                </div>
                                                                <div className="text-right">
                                                                    <p className="text-lg font-semibold">{item.price}€</p>
                                                                    {/*<p className="text-sm line-through dark:text-gray-400">*/}
                                                                    {/*    75.50€*/}
                                                                    {/*</p>*/}
                                                                </div>
                                                            </div>
                                                            <div className="flex text-sm divide-x">
                                                                <button
                                                                    type="button"
                                                                    className="flex items-center px-2 py-1 pl-0 space-x-1"
                                                                    onClick={() => removePerfume(item)}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 512 512"
                                                                        className="w-4 h-4 fill-current"
                                                                    >
                                                                        <path
                                                                            d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                                                        <rect
                                                                            width="32"
                                                                            height="200"
                                                                            x="168"
                                                                            y="216"
                                                                        ></rect>
                                                                        <rect
                                                                            width="32"
                                                                            height="200"
                                                                            x="240"
                                                                            y="216"
                                                                        ></rect>
                                                                        <rect
                                                                            width="32"
                                                                            height="200"
                                                                            x="312"
                                                                            y="216"
                                                                        ></rect>
                                                                        <path
                                                                            d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                                                                    </svg>
                                                                    <span>Remove</span>
                                                                </button>
                                                                {/*<button*/}
                                                                {/*    type="button"*/}
                                                                {/*    className="flex items-center px-2 py-1 space-x-1"*/}
                                                                {/*>*/}
                                                                {/*    <svg*/}
                                                                {/*        xmlns="http://www.w3.org/2000/svg"*/}
                                                                {/*        viewBox="0 0 512 512"*/}
                                                                {/*        className="w-4 h-4 fill-current"*/}
                                                                {/*    >*/}
                                                                {/*        <path*/}
                                                                {/*            d="M453.122,79.012a128,128,0,0,0-181.087.068l-15.511,15.7L241.142,79.114l-.1-.1a128,128,0,0,0-181.02,0l-6.91,6.91a128,128,0,0,0,0,181.019L235.485,449.314l20.595,21.578.491-.492.533.533L276.4,450.574,460.032,266.94a128.147,128.147,0,0,0,0-181.019ZM437.4,244.313,256.571,425.146,75.738,244.313a96,96,0,0,1,0-135.764l6.911-6.91a96,96,0,0,1,135.713-.051l38.093,38.787,38.274-38.736a96,96,0,0,1,135.765,0l6.91,6.909A96.11,96.11,0,0,1,437.4,244.313Z"></path>*/}
                                                                {/*    </svg>*/}
                                                                {/*    <span>Add to favorites</span>*/}
                                                                {/*</button>*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                                )
                                            })
                                        }
                                    </ul>
                                    <div className="space-y-1 text-right">
                                        <p>
                                            Total:
                                            <span className="font-semibold">{totalAmount}€</span>
                                        </p>
                                        <p className="text-sm dark:text-gray-600">
                                            Envío gratis con el código: <span className="font-semibold">MARIPURI</span>
                                        </p>
                                    </div>
                                    <div className="flex justify-center space-x-4">
                                        <Button
                                            radius="full"
                                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                                            onClick={() => onClose()}
                                        >
                                            Volver a la tienda
                                        </Button>
                                        <Button
                                            radius="full"
                                            className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
                                            onClick={() => onClose()}
                                        >
                      <span className="sr-only sm:not-sr-only">
                        Continuar con el
                      </span>
                                            pago
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}