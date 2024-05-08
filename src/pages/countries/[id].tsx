import { GetStaticPaths, GetStaticProps } from "next"
import axios from "axios"
import { ICountryDetails, ICurrency, ILanguages, IName, INativeName } from "@/typings";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { BsArrowLeft } from "react-icons/bs";
import Head from "next/head";

type Props = {
   countryData: ICountryDetails,
   error: string,
   borderCountries: [
      {
         commonBorderName: string,
         officialBorderName: string
      }
   ]
}

export default function CountryOverview({ countryData, borderCountries , error }:Props){

   if(error){
      return <p>{error}</p>
   }
   
   const router = useRouter()
   const {
      name,
      flags,
      population,
      subregion,
      region,
      capital,
      tld,
      currencies,
      languages,
      borders
   } = countryData;

   const dynamicNativeNameObjectKey = name.nativeName && Object.keys(name.nativeName)[0]
   const dynamicCurrenciesObjectKey = currencies && Object.keys(currencies)[0]
   const dynamicLanguagesObjectKey = languages && Object.keys(languages)[0]

   return(
      <>
        <Head>
           <title>{name.official}</title>
         </Head>
         <div className="country-details-overview">
            <button onClick={() => router.back()} className="go-back">
               <BsArrowLeft />
               Back
            </button>
            <div className="overview">
               <Image src={flags.svg} width={330} height={280} alt={flags.alt ? flags.alt : "country flag"} />
               <div className="flex-row">
                  <div>
                     <h2>{name.common}</h2>
                     <p>Native Name: <span>{name.nativeName ? (name.nativeName as INativeName)[dynamicNativeNameObjectKey].common : ""}</span></p>
                     <p>Population: <span>{population && population}</span></p>
                     <p>Region: <span>{region && region}</span></p>
                     <p>Sub Region: <span>{subregion && subregion}</span></p>
                     <p>Capital: <span>{capital && capital}</span></p>
                  </div>

                  <div>
                     <p>
                        Top Level Domain: <span>{tld && tld}</span>
                     </p>
                     <p>
                        Currencies:
                           <span>{dynamicCurrenciesObjectKey ? (currencies as ICurrency)[dynamicCurrenciesObjectKey].name : ""}</span>
                     </p>

                     <p>
                        Languages:
                        <span>{dynamicLanguagesObjectKey ? languages[dynamicLanguagesObjectKey] : ""}</span>
                     </p>
                  </div>

                  <div className="border-countries">
                     <h3>Border Countries:</h3>
                     <div>
                     {
                        borderCountries && borderCountries.length ?
                        borderCountries.map((border,index) => {
                           return <Link key={index} href={`/countries/${border.officialBorderName}`}>{border.commonBorderName}</Link>
                        })
                        :
                        "There are no Border Countries"
                     }
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

export const getStaticPaths:GetStaticPaths = async () => {


   const URL = 'https://restcountries.com/v3.1/all'
   const res = await axios.get(URL)
   const countriesData = await res.data;
   const paths = countriesData.map((data:ICountryDetails) => {
      return {params:{id:data.name.official}}
   })

   return{
      paths,
      fallback:false
   }
}

export const getStaticProps:GetStaticProps = async(context) => {

   try{
      const { id } = context.params!;
      const res = await fetch(`https://restcountries.com/v3.1/name/${id}?fullText=true`)
      const [countryData] = await res.json()
      const { borders } = countryData;

      const borderCountries = borders && borders.length > 0 ? await Promise.all(
        borders.map(async (border:string[]) => {
          const borderRes = await fetch(
            `https://restcountries.com/v3.1/alpha/${border}`
          );
          const [borderData] = await borderRes.json()
          return {commonBorderName:borderData.name.common,officialBorderName:borderData.name.official};
        })
      )
      :
      []

      return{
         props: {
            borderCountries,
            countryData
         },
         revalidate: 1,
      }
   }
   catch(err){
      return{
         props: {
            error: "Error Fetching Countries Data, Reload"
         }
      }
   }
}