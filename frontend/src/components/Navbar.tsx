'use client';
import { useState } from 'react';
import Link from 'next/link';
// Icons
import { CodeBracketSquareIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';

type Props = {}

const Navbar = (props: Props) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  }

  const closeMenu = () => {
    setMenu(false);
  }

  const menuData = [
    {
      title: 'Home',
      path: '/'
    },
    {
      title: 'Categories',
      path: '/categories'
    },
    {
      title: 'Contact',
      path: '/contact'
    },
  ]

  return (
    <header className='px-4 py-8 md:py-8'>
      <div className='container mx-auto'>
        <nav className='flex items-center justify-between'>
            <Link href={'/'}>
              <div className='flex items-center'>
                  <CodeBracketSquareIcon className='h-6 w-6'/>
                  <h3 className='text-base font-semibold ml-2'>DevDiaries</h3>
              </div>
            </Link>

            <div onClick={handleMenu} className='cursor-pointer md:hidden'>
                {menu ? <XMarkIcon className='h-6 w-6'/> : <Bars3Icon className='h-6 w-6'/>}
            </div>

            {menu ? (
              <div className='absolute top-[5rem] right-[1.5rem] p-4 flex flex-col bg-white shadow-md z-50 rounded text-left scale-up-center md:hidden'>
                {menuData.map((item, index) => (
                  <li key={index} className='list-none my-2'>
                    <Link href={item.path} onClick={closeMenu}>
                      {item.title}
                    </Link>
                  </li>
                ))}
                  <button className='bg-black text-white px-5 py-2 rounded'>Sign In</button>
              </div>
            ): (
              <div className='hidden md:flex'>
                {menuData.map((item, index) => (
                  <li key={index} className='list-none mx-4'>
                    <Link href={item.path}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </div>
            )}

            <div className='hidden md:block'>
                <button className='bg-black text-white px-5 py-2 rounded'>Sign In</button>
            </div>
        </nav>
        </div>
    </header>
  )
}

export default Navbar