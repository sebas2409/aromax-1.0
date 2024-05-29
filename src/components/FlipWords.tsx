import {useEffect, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

let interval: number | undefined;

export const FlipWords = ({words, duration = 3000}: { words: string[], duration: number }) => {
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        startAnimation();

        return () => {
            clearInterval(interval);
        };
    }, []);

    const startAnimation = () => {
        let i = 0;
        interval = setInterval(() => {
            i++;
            if (i === words.length) {
                i = 0;
            }
            const word = words[i];
            setCurrentWord(word);
        }, duration);
    };

    return (
        <AnimatePresence>
            <motion.div
                initial={{
                    opacity: 0,
                    y: 10,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                    type: "spring",
                    stiffness: 100,
                    damping: 10,
                }}
                exit={{
                    opacity: 0,
                    y: -40,
                    x: 40,
                    filter: "blur(8px)",
                    scale: 2,
                    position: "absolute",
                }}
                className={'z-10 inline-block relative text-left text-white title-1 px-2 my-6 video'}
                key={currentWord}
            >
                {currentWord.split("").map((letter, index) => (
                    <motion.span
                        key={currentWord + index}
                        initial={{opacity: 0, y: 10, filter: "blur(8px)"}}
                        animate={{opacity: 1, y: 0, filter: "blur(0px)"}}
                        transition={{
                            delay: index * 0.08,
                            duration: 0.4,
                        }}
                        className="inline-block title-1 text-8xl video"
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>
        </AnimatePresence>
    );
};

export default FlipWords;
