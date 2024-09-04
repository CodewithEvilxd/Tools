"use client"
import Link from 'next/link';
import { useState } from 'react';

function NavBar() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div>
      <nav className="w-full bg-[#09090b] fixed top-0 left-0 right-0 z-10">
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-3 md:py-5 md:block">
              {/* LOGO */}
              <Link href="/">
                <h2 className="text-2xl text-white font-bold ">Cool Tools</h2>
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-white rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <svg className='text-white' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                  ) : (
                      <svg className='focus:border-none active:border-none text-white' xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-justify"><line x1="3" x2="21" y1="6" y2="6"/><line x1="3" x2="21" y1="12" y2="12"/><line x1="3" x2="21" y1="18" y2="18"/></svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? 'p-12 md:p-0 block' : 'hidden'
              }`}
            >
              <ul className="gap-2 h-40 md:h-auto items-center justify-center md:flex ">
                <li className="text-gray-400 py-2 md:px-2 text-center  md:border-b-0  hover:text-[#a333ff]  md:hover:text-[#a333ff] md:hover:bg-transparent">
                  <Link href="/#tools" onClick={() => setNavbar(!navbar)}>
                    Tools
                  </Link>
                </li>
                <li className="text-gray-400 py-2 px-2 text-center  md:border-b-0  hover:text-[#a333ff]  md:hover:text-[#a333ff] md:hover:bg-transparent">
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About
                  </Link>
                </li>
                <li className="text-gray-400 py-2 px-2 text-center md:border-b-0  hover:text-[#a333ff]  md:hover:text-[#a333ff] md:hover:bg-transparent">
                  <Link href="https://github.com/codewithEvilxd/Tools" onClick={() => setNavbar(!navbar)}>
                    Github
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
    
  );
}

export default NavBar;