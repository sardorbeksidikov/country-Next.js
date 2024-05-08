import Countries from '@/components/Countries'
import SearchSection from '@/components/SearchSection'
import { ICountryDetails } from '@/typings'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import axios from "axios"


export interface ICountriesDetailsProps {
  countriesData: ICountryDetails[]
}

export default function Home(props:ICountriesDetailsProps) {

  return (
    <>
      <Head>
        <title>Country</title>
      </Head>
      <main>
        <SearchSection />
        <Countries countriesData={props.countriesData} />
      </main>
    </>
  )
}


export const getStaticProps:GetStaticProps = async () => {

  const URL = 'https://restcountries.com/v3.1/all'

  try{
    const response = await axios.get(URL)
    const data = await response.data
    const slicedData = data.slice(0,Number(50))
    return{
      props: {
        countriesData: slicedData
      }
    }
  }
  catch(err){
     return{
        props:{
          countriesData:[]
        }
     }
  }
}
