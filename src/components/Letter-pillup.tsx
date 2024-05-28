import {MotionValue, motion} from "framer-motion";
import {cn} from "../utils/cn.ts";
import {ReactElement, ReactNode, Key} from "react";

export default function LetterPullup(props: { className: string; words: string; delay: number; }) {
    const className = props.className;
    const words = props.words;
    const delay = props.delay;

    const letters = words.split("");

    const pullupVariant = {
        initial: {y: 100, opacity: 0},
        animate: function (i: number) {
            return {
                y: 0,
                opacity: 1,
                transition: {
                    delay: i * (delay ? delay : 0.02),
                },
            };
        },
    };

    return (
        <div className="flex justify-center">
            {letters.map((letter: string | number | boolean | ReactElement | Iterable<ReactNode> | MotionValue<number> | MotionValue<string> | null | undefined, i: Key | null | undefined) => (
                <motion.h1
                    key={i}
                    variants={pullupVariant}
                    initial="initial"
                    animate="animate"
                    custom={i}
                    className={cn(
                        "text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-4xl md:leading-[5rem]",
                        className
                    )}
                >
                    {letter === " " ? <span>&nbsp;</span> : letter}
                </motion.h1>
            ))}
        </div>
    );
}