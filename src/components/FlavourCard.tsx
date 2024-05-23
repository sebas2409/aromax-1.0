import {motion} from "framer-motion";
import {ReactNode, useState} from "react";


export const Image = ({alt, source}: { alt: string, source: string }) => {
    return (
        <img
            src={source}
            alt={alt}
            className="object-cover w-full h-full rounded-xl"
        />
    );
};

const Card = ({title, children}: { title: string, children: ReactNode }) => {
    const [hovered, setHovered] = useState(false);
    return (
        <div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border rounded-xl border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[30rem] relative"
        >
            <motion.div
                initial={{opacity: 0.5}}
                animate={{opacity: hovered ? 1 : 0.5}}
                className="h-full w-full absolute inset-0"
            >
                {children}
            </motion.div>

            <div className="relative z-20">
                <h2 className="dark:text-white text-3xl opacity-100 group-hover/canvas-card:opacity-100 relative z-10 text-black  mt-  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
                    {title}
                </h2>
            </div>
        </div>
    );
};

function Cards({title, source, alt}: { title: string, source: string, alt: string }) {
    return (
        <>
            <div
                className="py-20 flex flex-col lg:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
                <Card title={title}>
                    <Image source={source} alt={alt}/>
                </Card>
            </div>
        </>
    );
}

export default Cards;
