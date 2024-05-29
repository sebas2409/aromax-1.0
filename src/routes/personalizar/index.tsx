import {createFileRoute} from '@tanstack/react-router'
import {useEffect, useState} from "react";
import {Button, Card, Input, Progress, Select, SelectItem, Switch, Tooltip} from "@nextui-org/react";
import Spotlight from "../../components/Spotlight.tsx";
import LetterPullup from "../../components/Letter-pillup.tsx";
import Confetti from "react-confetti";
import pipetero from "../../assets/pipetero.png";
import spray from "../../assets/frasco_spray.png";
import perfumes from "../../assets/final.json";
import {useCartStore} from "../../state/cartStore.ts";
import PerfumeCard from "../../components/PerfumeCard.tsx";

export const Route = createFileRoute('/personalizar/')({
    component: () => PersonalizarPage()
})

interface Step1DataProps {
    headNote: string[];
    heartNote: string[];
    baseNote: string[];
}

function Step1({onNext}: { onNext: (data: Step1DataProps) => void }) {
    const [headNote, setHeadNote] = useState<string[]>([]);
    const [heartNote, setHeartNote] = useState<string[]>([]);
    const [baseNote, setBaseNote] = useState<string[]>([]);

    const [notes, setNotes] = useState<string[]>([]);

    useEffect(() => {
        const n = new Set(perfumes.map((perfume) => perfume.headNotes)
            .map((notes) => notes)
            .flat()
            .map((note) => note)
            .map((note) => note.trim())
            .filter((note) => note !== '')
            .slice(0, 30)
            .sort((a, b) => a.localeCompare(b)));
        setNotes(Array.from(n))
    }, [])

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">Paso 1: Selección de Notas</h2>
            <div className="w-full max-w-md">
                <Select
                    placeholder="Selecciona una nota de cabeza"
                    selectionMode="multiple"
                    className="mt-4"
                    onSelectionChange={(el) => {
                        const selected = Object.entries(el)[0][1];
                        setHeadNote([...(headNote), selected]);
                    }}
                >
                    {
                        notes.map((note) => (
                            <SelectItem key={note} value={note}>
                                {note}
                            </SelectItem>
                        ))
                    }
                </Select>
                <Select
                    placeholder="Selecciona una nota de corazón"
                    selectionMode="multiple"
                    className="mt-4"
                    onSelectionChange={(el) => {
                        const selected = Object.entries(el)[0][1];
                        setHeartNote([...(heartNote), selected]);
                    }}
                >
                    {
                        notes.map((note) => (
                            <SelectItem key={note} value={note}>
                                {note}
                            </SelectItem>
                        ))
                    }
                </Select>
                <Select
                    placeholder="Selecciona una nota de base"
                    selectionMode="multiple"
                    className="mt-4"
                    onSelectionChange={(el) => {
                        const selected = Object.entries(el)[0][1];
                        setBaseNote([...(baseNote), selected]);
                    }}
                >
                    {
                        notes.map((note) => (
                            <SelectItem key={note} value={note}>
                                {note}
                            </SelectItem>
                        ))
                    }
                </Select>
            </div>
            <Tooltip content="Recuerda haber elegido bien!">
                <Button
                    onClick={() => {
                        onNext({headNote, heartNote, baseNote})
                    }}
                    className="mt-4"
                >
                    Siguiente
                </Button>
            </Tooltip>
        </>
    );
}

interface Step2DataProps {
    selectedBottle: string;
    size: string;
    name: string;
    refillable: boolean;
}

// Componente de personalización del perfume
function Step2({onCustomize}: { onCustomize: (data: Step2DataProps) => void }) {
    const [selectedBottle, setSelectedBottle] = useState("");
    const [size, setSize] = useState("");
    const [name, setName] = useState("");
    const [refillable, setRefillable] = useState(false);

    const handleBottleSelection = (bottle) => {
        setSelectedBottle(bottle);
    };

    const sizes = [
        {label: "30ml", value: "30ml"},
        {label: "50ml", value: "50ml"},
        {label: "100ml", value: "100ml"},
    ]

    return (
        <>
            <h2 className="text-xl font-semibold mb-4">
                Paso 2: Personalización del Perfume
            </h2>
            <div className="w-full max-w-md">
                <div className="flex justify-between mt-4">
                    <div className='flex flex-col'>
                        <p className='font-bold text-lg text-center'>Gotero</p>
                        <div
                            className={`p-4 cursor-pointer border-2 ${
                                selectedBottle === "frasco1"
                                    ? "border-blue-500"
                                    : "border-gray-300"
                            }`}
                            onClick={() => handleBottleSelection("frasco1")}
                        >
                            <img src={pipetero} alt="Frasco 1" className='w-[220px] h-[303px]'/>
                        </div>
                    </div>
                    <div>
                        <p className='font-bold text-lg text-center'>Spray</p>
                        <div
                            className={`p-4 cursor-pointer border-2 ${
                                selectedBottle === "frasco2"
                                    ? "border-blue-500"
                                    : "border-gray-300"
                            }`}
                            onClick={() => handleBottleSelection("frasco2")}
                        >
                            <img src={spray} alt="Frasco 2" className='w-[220px] h-[303px]'/>
                        </div>
                    </div>
                </div>
                <Select
                    value={size}
                    className="mt-4"
                    onSelectionChange={(el) => setSize(Object.entries(el)[0][1])}
                    placeholder="Seleccione el tamaño"
                >
                    {
                        sizes.map((item) => (
                            <SelectItem key={item.value} value={item.value}>
                                {item.label}
                            </SelectItem>
                        ))
                    }
                </Select>
                <Input
                    value={name}
                    className="mt-4"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Ingrese el nombre para grabar"
                />
                <div className="mt-4 flex items-center">
                    <Switch
                        checked={refillable}
                        onChange={() => setRefillable(!refillable)}
                    />
                    <label className="ml-2">Recargable</label>
                </div>
            </div>
            <Button
                onClick={() => {
                    onCustomize({selectedBottle, size, name, refillable})
                }}
                className="mt-4"
            >
                Siguiente
            </Button>
        </>
    );
}

function PersonalizarPage() {
    const [step, setStep] = useState(1);
    const [selectedNotes, setSelectedNotes] = useState<Step1DataProps>({} as Step1DataProps);
    const [customizationData, setCustomizationData] = useState<Step2DataProps>({} as Step2DataProps);
    const [visibility, setVisibility] = useState(false)

    const {addPerfume} = useCartStore()
    const only2 = perfumes.slice(12, 14);

    const handleNextStep = (data: Step1DataProps) => {
        setSelectedNotes(data);
        setStep(step + 1);
    };

    const handleCustomize = (data: Step2DataProps) => {
        setCustomizationData(data);
        setStep(step + 1);
    };

    return (
        <>
            <div
                className="h-[20rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="white"
                />
                <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
                    <LetterPullup
                        className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50"
                        words="Crea tu propio perfume"
                        delay={0.05}
                    />
                    <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
                        Crea en tan solo unos pasos un perfume a tu medida, con tus acordes
                        favoritos.
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
                <Progress
                    aria-label="Loading..."
                    value={step === 1 ? 33 : step === 2 ? 66 : 100}
                    className="max-w-md my-4"
                />
                <div>
                    {step === 1 && <Step1 onNext={handleNextStep}/>}
                    {step === 2 && <Step2 onCustomize={handleCustomize}/>}
                    {step === 3 && (
                        <div className='flex flex-col items-center justify-center'>
                            {visibility && <Confetti width={window.innerWidth} height={window.innerHeight}/>}
                            <h2 className="text-xl font-semibold mb-4">¡Perfume Creado!</h2>
                            <Button
                                className="mt-4"
                                onClick={() => {
                                    // Lógica para añadir al carrito
                                    console.log(
                                        "Añadido al carrito:",
                                        selectedNotes,
                                        customizationData
                                    );
                                    setVisibility(true);
                                    const price = customizationData.size === "30ml" ? 20.99 : customizationData.size === "50ml" ? 30.99 : 50.99;
                                    addPerfume({
                                        name: customizationData.name,
                                        price: price,
                                        imageSrc: customizationData.selectedBottle === "frasco1" ? pipetero : spray,
                                        headNotes: selectedNotes.headNote,
                                        heartNotes: selectedNotes.heartNote,
                                        baseNotes: selectedNotes.baseNote,
                                        brand: "Aromax",
                                        description: "Perfume personalizado",
                                        link: "/personalizar",
                                        fraganceType: [],
                                    });
                                }}
                            >
                                Añadir al Carrito
                            </Button>
                            <Button
                                className="mt-4"
                                onClick={() => {
                                    setStep(1);
                                    setSelectedNotes({} as Step1DataProps);
                                    setCustomizationData({} as Step2DataProps);
                                }}
                            >
                                Crear Otro Perfume
                            </Button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}
