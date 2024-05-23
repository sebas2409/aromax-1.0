import {Accordion, AccordionItem} from "@nextui-org/react";
import {CheckboxGroup, Checkbox} from "@nextui-org/react";
import {Slider} from "@nextui-org/react";
import {Input} from "@nextui-org/react";

export default function Sidebar() {
    return (
        <div className="fixed top-15 left-0 w-80 h-full z-50">
            <Accordion showDivider={false} variant='light'>
                <AccordionItem key="1" aria-label="Accordion 1" title="Género">
                    <CheckboxGroup
                        label="Select cities"
                        defaultValue={["buenos-aires", "london"]}
                    >
                        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                        <Checkbox value="sydney">Sydney</Checkbox>
                        <Checkbox value="san-francisco">San Francisco</Checkbox>
                        <Checkbox value="london">London</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem
                    key="2"
                    aria-label="Accordion 2"
                    title="Tipo de Fagancia"
                >
                    <CheckboxGroup
                        label="Select cities"
                        defaultValue={["buenos-aires", "london"]}
                    >
                        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                        <Checkbox value="sydney">Sydney</Checkbox>
                        <Checkbox value="san-francisco">San Francisco</Checkbox>
                        <Checkbox value="london">London</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="3" aria-label="Accordion 3" title="Nota corazón">
                    <CheckboxGroup
                        label="Select cities"
                        defaultValue={["buenos-aires", "london"]}
                    >
                        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                        <Checkbox value="sydney">Sydney</Checkbox>
                        <Checkbox value="san-francisco">San Francisco</Checkbox>
                        <Checkbox value="london">London</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="4" aria-label="Accordion 4" title="Nota de salida">
                    <CheckboxGroup
                        label="Select cities"
                        defaultValue={["buenos-aires", "london"]}
                    >
                        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                        <Checkbox value="sydney">Sydney</Checkbox>
                        <Checkbox value="san-francisco">San Francisco</Checkbox>
                        <Checkbox value="london">London</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
                <AccordionItem key="5" aria-label="Accordion 5" title="Nota de base">
                    <CheckboxGroup
                        label="Select cities"
                        defaultValue={["buenos-aires", "london"]}
                    >
                        <Checkbox value="buenos-aires">Buenos Aires</Checkbox>
                        <Checkbox value="sydney">Sydney</Checkbox>
                        <Checkbox value="san-francisco">San Francisco</Checkbox>
                        <Checkbox value="london">London</Checkbox>
                        <Checkbox value="tokyo">Tokyo</Checkbox>
                    </CheckboxGroup>
                </AccordionItem>
            </Accordion>
            <Slider
                label="Price Range"
                step={50}
                minValue={0}
                maxValue={1000}
                defaultValue={[100, 500]}
                formatOptions={{style: "currency", currency: "USD"}}
                className="max-w-md py-3 px-2"
            />

            <Input
                isClearable
                radius="lg"
                classNames={{
                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",
                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [
                        "shadow-xl",
                        "bg-default-200/50",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
                placeholder="Escribe qué buscas..."
            />
        </div>
    );
}