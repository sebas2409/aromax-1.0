import {createFileRoute} from '@tanstack/react-router'
import PerfumeCard from "../../components/PerfumeCard.tsx";
import perfumes from '../../assets/final.json';
import {Autocomplete, AutocompleteItem, Input, Pagination} from "@nextui-org/react";
import {Key, useCallback, useEffect, useMemo, useState} from "react";
import Banner from "../../components/Banner.tsx";

export const Route = createFileRoute('/productos/')({
    component: () => ProductsPage()
})


function ProductsPage() {
    const only6 = perfumes.slice(12, 20);
    const [page, setPage] = useState(1);

    const [brands, setBrands] = useState<string[]>([])
    const [fraganceTypes, setFraganceTypes] = useState<string[]>([])
    const [notes, setNotes] = useState<string[]>([])

    const [filterValue, setFilterValue] = useState("");
    const [brandValue, setBrandValue] = useState("")
    const [fraganceValue, setFraganceValue] = useState("")
    const [notesValue, setNotesValue] = useState("")
    const [totalPages, setTotalPages] = useState(Math.ceil(perfumes.length / 24))

    useEffect(() => {
        const b = new Set(perfumes.map((perfume) => perfume.brand)
            .sort(
                (a, b) => a.localeCompare(b)
            ));
        setBrands(Array.from(b))


        const ft = new Set(perfumes.map((perfume) => perfume.fraganceType)
            .map((fraganceType) => fraganceType)
            .flat()
            .map((fraganceType) => fraganceType)
            .map((fraganceType) => fraganceType.trim())
            .filter((fraganceType) => fraganceType !== '')
            .sort((a, b) => a.localeCompare(b)));
        setFraganceTypes(Array.from(ft))

        const n = new Set(perfumes.map((perfume) => perfume.headNotes)
            .map((notes) => notes)
            .flat()
            .map((note) => note)
            .map((note) => note.trim())
            .filter((note) => note !== '')
            .sort((a, b) => a.localeCompare(b)));

        setNotes(Array.from(n))
    }, []);


    const items = useMemo(() => {
        const start = (page - 1) * 24;
        const end = start + 24;

        if (filterValue) {
            const filteredPerfumes = perfumes.filter((perfume) => {
                return perfume.name.toLowerCase().includes(filterValue.toLowerCase())
            })
            setTotalPages(Math.ceil(filteredPerfumes.length / 24))
            return filteredPerfumes.slice(start, end);
        }

        if (brandValue) {
            const filteredPerfumes = perfumes.filter((perfume) => {
                return perfume.brand.toLowerCase().includes(brandValue.toLowerCase())
            })
            setTotalPages(Math.ceil(filteredPerfumes.length / 24))
            return filteredPerfumes.slice(start, end);
        }

        if (fraganceValue) {
            const filteredPerfumes = perfumes.filter((perfume) => {
                return perfume.fraganceType.map((fraganceType) => fraganceType.toLowerCase().trim()).includes(fraganceValue.toLowerCase().trim())
            })
            setTotalPages(Math.ceil(filteredPerfumes.length / 24))
            return filteredPerfumes.slice(start, end);
        }

        if (notesValue) {
            const filteredPerfumes = perfumes.filter((perfume) => {
                return perfume.headNotes.map((note) => note.toLowerCase().trim()).includes(notesValue.toLowerCase().trim())
            })
            setTotalPages(Math.ceil(filteredPerfumes.length / 24))
            return filteredPerfumes.slice(start, end);
        }

        setTotalPages(Math.ceil(perfumes.length / 24))
        return perfumes.slice(start, end);
    }, [page, filterValue, brandValue, fraganceValue, notesValue]);

    const onSearchChange = useCallback((value: string) => {
        if (value) {
            setFilterValue(value);
            setPage(1);
        } else {
            setFilterValue("");
        }
    }, []);

    const handleBrandChange = useCallback((key: Key | null) => {
        if (key) {
            setBrandValue(key as string);
            setPage(1);
        } else {
            setBrandValue("");
        }
    }, [])

    const handleFraganceTypeChange = useCallback((key: Key | null) => {
        if (key) {
            setFraganceValue(key as string);
            setPage(1);
        } else {
            setFraganceValue("");
        }
    }, [])

    const handleNotesChange = useCallback((key: Key | null) => {
        if (key) {
            setNotesValue(key as string);
            setPage(1);
        } else {
            setNotesValue("");
        }
    }, [])

    return (
        <>
            <Banner/>
            <div className='container'>

                <div className="flex flex-col items-center justify-center">
                    <h1 className="my-4 cards-parfum">LOS MEJORES PERFUMES</h1>
                    <PerfumeCard perfumes={only6}/>

                    <h2 className='my-8 cards-parfum'>CATÁLOGO</h2>
                    <div className='flex gap-12 mb-8'>
                        <Input
                            type="text"
                            size='lg'
                            placeholder="Euphoria"
                            value={filterValue}
                            onValueChange={onSearchChange}
                            onClear={() => setFilterValue("")}
                            startContent={
                                <svg width={24} height={24} viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                                            stroke="#000000" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round"></path>
                                    </g>
                                </svg>
                            }
                        />
                        <Autocomplete
                            label="Marca"
                            className="max-w-xs"
                            onSelectionChange={handleBrandChange}
                            onClear={() => setBrandValue("")}
                        >
                            {
                                Array.from(brands).map((brand) => (
                                    <AutocompleteItem key={brand} value={brand}>
                                        {brand}
                                    </AutocompleteItem>
                                ))
                            }
                        </Autocomplete>
                        <Autocomplete
                            label="Tipo de fragancia"
                            className="max-w-xs"
                            onSelectionChange={handleFraganceTypeChange}
                        >
                            {
                                Array.from(fraganceTypes).map((brand) => (
                                    <AutocompleteItem key={brand} value={brand}>
                                        {brand}
                                    </AutocompleteItem>
                                ))
                            }
                        </Autocomplete>
                        <Autocomplete
                            label="Notas"
                            className="max-w-xs"
                            onSelectionChange={handleNotesChange}
                        >
                            {
                                Array.from(notes).map((brand) => (
                                    <AutocompleteItem key={brand} value={brand}>
                                        {brand}
                                    </AutocompleteItem>
                                ))
                            }
                        </Autocomplete>
                    </div>
                    <div className='flex gap-8 justify-center items-center my-12'>
                        <Pagination color='secondary' total={totalPages} page={page}
                                    onChange={page1 => setPage(page1)}/>
                    </div>
                    <PerfumeCard perfumes={items}/>
                </div>
                <div className='flex gap-8 justify-center items-center my-12'>
                    <Pagination color='secondary' total={totalPages} page={page} onChange={page1 => setPage(page1)}/>
                </div>
            </div>
        </>
    )
}