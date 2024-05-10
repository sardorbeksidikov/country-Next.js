import { CountryType } from '@/interfaces'
import Image from 'next/image';
import {FC} from 'react'
import { useState } from 'react';

interface Props {
    country: CountryType
    fill?: boolean
}

const CunstomImage: FC<Props> = ({ country, fill }) => {
    const [isLoading, setIsLoading] = useState(true)
  return ( <>
      {fill ? (
        <Image
          src={country.image}
          alt={country.title}
          fill
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      ) : (
        <Image
          src={country.image}
          alt={country.title}
          width={400}
          height={1000}
          className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
            isLoading
              ? "scale-110 blur-2xl grayscale"
              : "scale-100 blur-0 grayscale-0"
          }}`}
          onLoadingComplete={() => setIsLoading(false)}
        />
      )}
    </>

  )
};

export default CunstomImage