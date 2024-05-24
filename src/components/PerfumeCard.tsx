import {Button, Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import {Perfume} from "../interfaces/perfume.ts";
import {motion} from "framer-motion";
import {useCartStore} from "../state/cartStore.ts";

const PerfumeCard = ({perfumes}: { perfumes: Perfume[] }) => {
    const {addPerfume} = useCartStore()
    return (
        <>
            <div className="gap-8 grid grid-cols-2 sm:grid-cols-4">
                {perfumes.map((item, index) => (
                    <div key={index}>
                        <Card
                            shadow="sm"
                            className='w-[200px]'
                        >
                            <CardBody className="p-1">
                                <div className="flex items-center justify-between px-1.5 py-1">
                                    <b>{item.brand}</b>
                                    <motion.div whileHover={{
                                        scale: 1.1,
                                    }}>
                                        <Button isIconOnly color="default" aria-label="Like" variant='light' onClick={() => {
                                            addPerfume(item)
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
                                                              stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                                              strokeLinejoin="round"></path>
                                                    </g>
                                                </g>
                                            </svg>
                                        </Button>
                                    </motion.div>
                                </div>
                                <div className="flex justify-center items-center p-1">
                                    <Image
                                        isZoomed
                                        src={item.imageSrc}
                                        alt={item.name}
                                        className="object-cover h-[200px] z-[0]"
                                    />
                                </div>
                            </CardBody>
                            <CardFooter className="text-small text-left">
                                <div className="flex flex-col gap-2">
                                    <b>{item.name}</b>
                                    <p className="text-default-500">${item.price}</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </div>
                ))}
            </div>
        </>
    );
};

export default PerfumeCard;
