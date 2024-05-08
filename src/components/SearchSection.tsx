import { FaAngleDown } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai'
import { useState , useContext, useEffect} from 'react';
import { FILTER_OPTIONS } from '@/Enums';
import { SearchContext } from '@/context/SearchContextProvider';

export default function  SearchSection(){

   const [chosenFilter,setChosenFilter] = useState<string>("")
   const [openDropdown,setOpenDropdown] = useState<boolean>(false)

   const {
      inputValue,
      setSearchInputValue,
      setSelectedFilter
   } = useContext(SearchContext)

   const handleOptionsClick = (e:React.MouseEvent<HTMLButtonElement>) => {
      setOpenDropdown(!openDropdown)
      const buttonElement = e.target as HTMLButtonElement;
      if(buttonElement.value){
         setChosenFilter(buttonElement.value?.toLowerCase())
      }
   }

   useEffect(() => {
      setSelectedFilter(chosenFilter)
   },[chosenFilter])


   return(
      <div className="search-area">
         <div className="input-container">
            <AiOutlineSearch className='search-icon'/>
            <label htmlFor="countrySearch">Search For A Country</label>
            <input 
               type="text" 
               id="countrySearch" 
               value={inputValue}
               onChange={(e) => setSearchInputValue(e.target.value)}
               placeholder="Search for a country..."
             />
         </div>

         <div 
            className="search-area-dropdown" 
            onClick={() => setOpenDropdown(!openDropdown)}
            >
            <span id="regionDropdown">{chosenFilter ? chosenFilter : "Filter by Region"}</span>
           
            <span id='dropdown-desc' className='AT-only'>Choose A Region To Filter</span>
            {
               openDropdown &&
               <div 
                  aria-aria-labelledby="regionDropdown" 
                  aria-describedby='dropdown-desc' 
                  aria-expanded={openDropdown}
                  className="dropdown"
                  aria-multiselectable="false"
                  id="dropdown"
                  >
                  <button onClick={handleOptionsClick} value={FILTER_OPTIONS.AFRICA}>Africa</button>
                  <button onClick={handleOptionsClick} value={FILTER_OPTIONS.AMERICA}>America</button>
                  <button onClick={handleOptionsClick} value={FILTER_OPTIONS.ASIA}>Asia</button>
                  <button onClick={handleOptionsClick} value={FILTER_OPTIONS.EUROPE}>Europe</button>
                  <button onClick={handleOptionsClick} value={FILTER_OPTIONS.OCEANIA}>Oceania</button>
                  <button onClick={() => setChosenFilter("")}>Clear Filter</button>
               </div>
            }
            <FaAngleDown className={openDropdown ? "arrow-icon rotate" : "arrow-icon"} />
         </div>
      </div>
   )
}