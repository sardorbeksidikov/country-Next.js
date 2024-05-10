"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
    const [mounted, setMounted] = useState<boolean>(false);
    const {theme, setTheme} = useTheme();

    useEffect(() => setMounted(true),[]);
  return (
    <nav className="w-full flex p-4 justify-between items-center custom-shadow sm:px-8 md:px-12">
        <h3 className="font-bold text-xl">Where in the world?</h3>
        <div className="text-base flex items-center gap-2 cursor-pointer" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none" className="dark:fill-white">
                <path className="dark:stroke-white" d="M15.4608 11.4609C14.8403 11.649 14.1819 11.7501 13.5 11.7501C9.77208 11.7501 6.75 8.72802 6.75 5.0001C6.75 4.31816 6.85113 3.65983 7.0392 3.03931C4.26756 3.87937 2.25 6.45412 2.25 9.5001C2.25 13.228 5.27208 16.2501 9 16.2501C12.046 16.2501 14.6207 14.2325 15.4608 11.4609Z" stroke="#121214" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <p>{theme === 'dark' ? 'Light' : 'Dark'} Mode</p>
        </div>
    </nav>
  )
}

export default Navbar;