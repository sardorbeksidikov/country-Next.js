import { ICountryDetails } from "@/typings";
import Image from "next/image";
import Link from "next/link";

"use-client"

export default function Country({ CountryDetails }: { CountryDetails : ICountryDetails }){

   const {
     name:{
       official,
       common
     },
     flags,
     population,
     region,
     capital
   } = CountryDetails;

   return(
      <Link href={`/countries/${official}`}>
         <div className="country-item">
            <img src={flags.svg} alt={flags.alt ? flags.alt : "country flag"}  /> 
            <div className="details-container">
               <h2>{common}</h2>
               <p>Population: <span>{population && population}</span></p>
               <p>Region: <span>{region && region}</span></p>
               <p>Capital: <span>{capital && capital}</span></p>
            </div>
         </div>
      </Link>
   )
}
   