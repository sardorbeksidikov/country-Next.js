import { SearchContext } from "@/context/SearchContextProvider";
import { nanoid } from "nanoid";
import { useState, useEffect, useContext } from "react"; 
import Country from "./Country";
import { ICountriesDetailsProps } from "@/app/pages";
import { ICountryDetails } from '@/typings';

export default function Countries(props:ICountriesDetailsProps){

   const { countriesData } = props;
   const { foundCountries } = useContext(SearchContext)
   const [filteredCountriesArray,setFilteredCountriesArray] = useState<ICountryDetails[]>([])


   useEffect(() => {
      if(!countriesData.length)return;
      const firstSort =  countriesData.sort((a,b) => {
         return a.name.common.localeCompare(b.name.common)
      })
      const secondSort = countriesData.sort((a,b) => {
         return a.population + a.population
      })

      setFilteredCountriesArray(shuffleArray([...firstSort,...secondSort]))
   },[countriesData])

   function shuffleArray<T>(array: T[]): T[] {
      const shuffledArray = [...array]
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray.splice(0,8)
   }

   return(
      <>
      {
         !countriesData.length ?
         <h2>Error Fetching Countries Data, Try Again</h2>
         :
         foundCountries.length ?
         <div className="countries-section">
            {
               foundCountries.map((data,index) => {
                  return <Country key={index} CountryDetails={data} />
               })
            }
         </div>
         :
         <div className="countries-section">
            {
               filteredCountriesArray.map((data,index) => {
                  return <Country key={index} CountryDetails={data} />
               })
            }
         </div>
      }
      </>
   )
}