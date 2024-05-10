"use client"
import Link from "next/link";
import Image from "next/image";
import { useGlobalContext } from "./Context";
import { useEffect, useState } from "react";
type countryType = {
    name: {common: string},
    population: number,
    region: string,
    capital: string[],
    flags: {svg: string}
}

const Countries = (data:any) => {
    const {search, filter} = useGlobalContext();
    const values:Array<countryType> = Object.values(data);
    const [filteredValues, setFilteredValues] = useState(values);
    
    const searchAndFilter = () => {
        let filtVal = values;
        if(!search){
            filtVal = values
        }
        if(filter){
            filtVal = filtVal.filter((country) => country.region.toLowerCase() === filter.toLowerCase())
        }
        if(search){
            filtVal = filtVal.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredValues(filtVal)
    }

    useEffect(() => {
        searchAndFilter()
    }, [search, filter])
    
    return (<>
    {filteredValues?.map((i:countryType) => {
        return (
        <Link href={`/${i.name.common}`} key={i.name.common} className="bg-white dark:bg-dark-blue custom-shadow w-[250px] cursor-pointer transition-all rounded-[4px] overflow-hidden hover:scale-105">
            <Image 
            src={i.flags.svg}
            width={265}
            height={159}
            alt="flag"
            className="w-full aspect-[265/159]"
            />
            <section className="p-4 md:p-6">
                <h3 className="font-bold text-base">{i.name.common}</h3>
                <p className="text-sm font-semibold">Population: <span className="font-normal text-dark-gray dark:text-very-light-gray">{Intl.NumberFormat('en-US').format(i.population)}</span> </p>
                <p className="text-sm font-semibold">Region: <span className="font-normal text-dark-gray dark:text-very-light-gray">{i.region}</span></p>
                <p className="text-sm font-semibold">Capital: <span className="font-normal text-dark-gray dark:text-very-light-gray">{i.capital}</span></p>
            </section>
        </Link>
        )
    })}
    </>)
}

export default Countries