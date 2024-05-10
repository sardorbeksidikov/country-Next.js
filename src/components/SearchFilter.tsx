'use client';
import {useState} from 'react';
import { useGlobalContext } from './Context';

const regions = ['africa', 'americas', 'asia', 'europe', 'oceania'];
export default function SearchFilter() {
    const {setSearch, setFilter, filter} = useGlobalContext()
    const [showFilter, setShowFilter] = useState(false);
    const selectFilter = (filt:string) => {
        setShowFilter(false);
        setFilter(filt)
    }
  return (
    <section className='my-8 px-4 sm:px-8 md:px-12 md:flex md:justify-between md:items-center'>
            <div className='flex my-2 w-full gap-4 items-center custom-shadow rounded-sm bg-white dark:bg-dark-blue px-4 py-3 md:w-1/3 md:my-0'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8.33333 14.1667C11.555 14.1667 14.1667 11.555 14.1667 8.33333C14.1667 5.11167 11.555 2.5 8.33333 2.5C5.11167 2.5 2.5 5.11167 2.5 8.33333C2.5 11.555 5.11167 14.1667 8.33333 14.1667Z" stroke="black" className='dark:stroke-white' strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 12.5L17.5 17.5" stroke="black" className='dark:stroke-white' strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className='outline-none text-sm bg-transparent dark:text-white dark:placeholder:text-white' type="text" name="" id="" placeholder='Search for a country..' />
            </div>
            <div className='relative w-1/2 md:w-max'>
                <div onClick={() => setShowFilter(!showFilter)} className=' flex justify-between gap-6 items-center cursor-pointer p-3 bg-white dark:bg-dark-blue custom-shadow rounded-sm text-sm '>
                    <div className='min-w-[100px] capitalize' >{filter ? filter : 'Filter by region'}</div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="0 0 8 5" fill="none">
                    <path d="M7 1L4 4L1 1" stroke="#121214" className='dark:stroke-white' strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                {showFilter ? 
                <div className='absolute my-1 bg-white dark:bg-dark-blue w-full py-2 custom-shadow rounded-sm z-20'>
                    {regions.map((region) => {
                        return <p key={region} className='capitalize px-2 cursor-pointer text-sm' onClick={() => selectFilter(region)}>{region}</p>
                    })}
                </div> : ''
                }
            </div>
        </section>
  ) 
}
