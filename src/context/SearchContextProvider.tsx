import { ICountryDetails, ISearchContext } from "@/typings"
import axios from "axios"
import { createContext, ReactNode, useState, useEffect } from "react"


export const SearchContext = createContext<ISearchContext>({
   inputValue:"",
   selectedFilter:"",
   setSearchInputValue: (value:string) => {},
   setSelectedFilter: (filter:string) => {},
   foundCountries: []
})

type Props = {
   children: ReactNode
}

export default function SearchContextProvider(props:Props){

   const [searchState,setSearchState] = useState({
      inputValue:"",
      selectedFilter:"",
      foundCountries:[],
   })

   const setSearchInputValue = (value:string) =>{
      setSearchState(prevState => {
         return {...prevState,inputValue:value}
      })
   }

   const setSelectedFilter = (filter:string) => {
      setSearchState(prevState => {
         return {...prevState,selectedFilter:filter}
      })
   }




   useEffect(() => {
      if(!searchState.inputValue)return;
      const apiUrl = process.env.NODE_ENV === "development" ? 
      "http://localhost:3000" :
      "https://countries-nextjs-delta.vercel.app";

      const setSearchApiFetch = async (value:string) => {
         try{
            const response = await axios.get(`${apiUrl}/api/getSearchedCountries/?value=${value}`)
            const data = response.data
            setSearchState(prevState => {
               return {...prevState,foundCountries:data}
            })
         }
         catch(err){
            setSearchState(prevState => {
               return {...prevState,foundCountries:[]}
            })
         }
      }

      setSearchApiFetch(searchState.inputValue)
      
   },[searchState.inputValue])

   useEffect(() => {
      const apiUrl = process.env.NODE_ENV === "development" ? 
      "http://localhost:3000" :
      "https://countries-nextjs-delta.vercel.app";

      const setFilterApiFetch = async (filter:string) => {
         try{
            const response = await axios.get(`${apiUrl}/api/getFilteredCountries/?filter=${filter}`)
            const data = response.data
            setSearchState(prevState => {
               return {...prevState,foundCountries:data}
            })
         }
         catch(err){
            setSearchState(prevState => {
               return {...prevState,foundCountries:[]}
            })
         }
      }

      if(searchState.selectedFilter){
         setFilterApiFetch(searchState.selectedFilter)
      }
      
   },[searchState.selectedFilter])


   return(
      <SearchContext.Provider value={{...searchState,setSearchInputValue,setSelectedFilter}}>
         {props.children}
      </SearchContext.Provider>
   )
}