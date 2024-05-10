import Image from "next/image";
import Link from "next/link";
import Countries from "./Countries";

const fetchCountries = async () => {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags', {next: {revalidate: 3600}});
    return(res.json())
}

type countryType = {
    name: {common: string},
    population: number,
    region: string,
    capital: string[],
    flags: {svg: string}
}

const CountriesCont = async () => {
    let data:Array<countryType> =  await fetchCountries()
    
  return (
    <section className="p-4 sm:px-6 md:px-8 lg:px-12 grid-flex gap-y-12 justify-items-center">
        <Countries {...data}/>
    </section>
  )
}

export default CountriesCont;