import Image from "next/image"
import Link from "next/link"
const Back = () => {
  return (
    <Link href={'/'} className="flex gap-2 items-center px-4 py-2 w-max mb-6 custom-shadow">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M21 12L3 12" stroke="#121214" className="dark:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 17L3 12L8 7" stroke="#121214" className="dark:stroke-white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
        Back
    </Link>
  )
}

export default Back