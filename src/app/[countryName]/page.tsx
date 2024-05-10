import Back from '@/components/Back';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export const dynamicParams = true

export async function generateStaticParams() {
    const res = await fetch('https://restcountries.com/v3.1/all');
    const countries = await res.json()
    return countries.map((country:countryType) => ({
        countryName: country.name.common
    }))
}

const fetchCountry = async (params: string) => {
    const res = await fetch(`https://restcountries.com/v3.1/name/${params}?fields=name,capital,population,region,flags,languages,subregion,borders,currencies,tld`)
    if(!res.ok){
        notFound()
    }
    return res.json()
}

type countryType = {
    name: {common: string, nativeName: {}},
    population: number,
    region: string,
    capital: string[],
    flags: {svg: string},
    languages: {},
    subregion: string,
    borders: string[],
    currencies: {},
    tld: string[]
}

const Country = async ({params}: {params : {countryName: string}}) => {
    const data = await fetchCountry(params.countryName);
    const country:countryType = data[0]
    type currencyType = {
        name: string
    }
    console.log(country.borders)
    const b = Object.values(country.name.nativeName)[0];
    const native:{common:string} = b as {common:string}; 
    const a = Object.values(country.currencies)[0];
    const currency:currencyType = a as currencyType

  return (
    <div className='mt-8 px-4 sm:px-8 md:px-12'>
        <Back/>

        <article className='grid md:grid-cols-2'>
            <div>
                <Image 
                src={data[0].flags.svg} alt={data[0].flags.alt} className='w-full sm:w-[90%] aspect-[555/400]' width={200} height={200}
                />
            </div>
            <section className=''>
                <h3 className='text-xl font-bold my-6'>{data[0].name.common}</h3>
                <section className=' md:grid sm:grid-cols-2'>
                    <div className='flex flex-col gap-3'>
                        <p className="text-sm font-semibold">Native name: <span className="font-normal text-dark-gray">{native?.common}</span></p>
                        <p className="text-sm font-semibold">Population: <span className="font-normal text-dark-gray">{Intl.NumberFormat('en-US').format(country.population)}</span></p>
                        <p className="text-sm font-semibold">Region: <span className="font-normal text-dark-gray">{country.region}</span></p>
                        <p className="text-sm font-semibold">Sub Region: <span className="font-normal text-dark-gray">{country.subregion}</span></p>
                        <p className="text-sm font-semibold">Capital: <span className="font-normal text-dark-gray">{country.capital[0]}</span></p>
                    </div>
                    <div className='flex flex-col gap-3 mt-8 md:mt-0'>
                        <p className="text-sm font-semibold">Top Level Domain: <span className="font-normal text-dark-gray">{country.tld}</span></p>
                        <p className="text-sm font-semibold">Currencies: <span className="font-normal text-dark-gray capitalize">{currency?.name}</span></p>
                        <p className="text-sm font-semibold">Language:
                            {Object.values(country.languages).map((i:any) => {return <span key={i} className="font-normal text-dark-gray"> {i} </span>}
                        )}</p>
                    </div>
                </section>
                <section className=''>
                <p className="text-sm font-semibold mt-6">Border Countries: </p>
                </section>
            </section>
        </article>
    </div>
  )
}

export default Country