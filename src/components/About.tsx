
const About = () => {
    return (
        <>
            <div className="min-h-screen flex flex-col items-center justify-center lg:px-32 bg-backgroundColor">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    <div
                        id="custom-controls-gallery"
                        className="relative w-full lg:w-2/4"
                        data-carousel="slide"
                    >
                        <div className="relative overflow-hidden rounded-lg h-96">
                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <img
                                    src="https://assets.lummi.ai/assets/QmYhyyWPc5afAMP8vYcKPFB8t8KEkDftsJiDQQt877xfeZ?auto=format&w=1500"
                                    className="absolute block w-full h-full object-cover"
                                    alt=""
                                />
                            </div>

                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item="active"
                            >
                                <img
                                    src="https://assets.lummi.ai/assets/QmZzpXuduf38WUqfEkTuyXAeHBxWAVRJ82q12tYGNUtQq2?auto=format&w=1500"
                                    className="absolute block w-full h-full object-cover"
                                    alt=""
                                />
                            </div>

                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <img
                                    src="https://assets.lummi.ai/assets/QmWdTiE58QHXefLcRNKCRi5pHbuUdDdFnujvhpJRfcNbzN?auto=format&w=1500"
                                    className="absolute block w-full h-full object-cover"
                                    alt=""
                                />
                            </div>

                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <img
                                    src="https://assets.lummi.ai/assets/QmW4iWuKbAPjD8XwrGe9fHncfxeqakDmyBaiApv7E9d824?auto=format&w=1500"
                                    className="absolute block w-full h-full object-cover"
                                    alt=""
                                />
                            </div>

                            <div
                                className="hidden duration-700 ease-in-out"
                                data-carousel-item
                            >
                                <img
                                    src="https://assets.lummi.ai/assets/QmP11RrtBSHpmdKTNVbLFayTZHzDoSbby8HV1d8rqmedEh?auto=format&w=1500"
                                    className="absolute block w-full h-full object-cover"
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-center pt-4">
                            <button
                                type="button"
                                className="flex justify-center items-center me-4 h-full cursor-pointer group focus:outline-none"
                                data-carousel-prev
                            >
                <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                  <svg
                      className="rtl:rotate-180 w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                  >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
                            </button>
                            <button
                                type="button"
                                className="flex justify-center items-center h-full cursor-pointer group focus:outline-none"
                                data-carousel-next
                            >
                <span className="text-gray-400 hover:text-gray-900 dark:hover:text-white group-focus:text-gray-900 dark:group-focus:text-white">
                  <svg
                      className="rtl:rotate-180 w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                  >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
                            </button>
                        </div>
                    </div>

                    <div className="w-full lg:w-2/4 p-4 space-y-3">
                        <h2 className="text-center my-4 cards-parfum">
                            ¿Qué hace nuestra marca tan especial?
                        </h2>
                        <p>
                            En nuestra empresa, creemos que la esencia de un perfume va más
                            allá de su aroma; es una experiencia sensorial que cuenta una
                            historia única. Nuestra pasión por la perfumería nos impulsa a
                            buscar las mejores materias primas, combinando tradición y
                            modernidad para crear fragancias que evocan emociones y recuerdos
                            inolvidables.
                        </p>
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
            </div>
        </>
    );
};

export default About;
