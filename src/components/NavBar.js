import Link from 'next/link'
import React from 'react'
import Logo from './Logo'

const CustomLink = ({href, title, className=""}) => {
    return (
        <Link href={href} className={`${className} relative group`}>
            {title}
            <span className='h-px inline-block bg-(--color-dark) absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 w-0 '>
                &nbsp;
            </span>
        </Link>
    )
}

const NavBar = () => {
  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
        <nav>
            <CustomLink href={'/'} className='mr-8 text-(--color-dark)' title={"Home"} />
            <CustomLink href={'/about'} className='mr-8 text-(--color-dark)' title={"About"} />
            <CustomLink href={'/projects'} className='mr-8 text-(--color-dark)' title={"Projects"} />
            <CustomLink href={'/articles'} className='mr-8 text-(--color-dark)' title={"Articles"} />
        </nav>

        <nav>
            <Link href="/" target={"_blank"} className='mr-8 text-(--color-dark)'>GitHub</Link>
            <Link href="/" target={"_blank"} className='mr-8 text-(--color-dark)'>LinkedIn</Link>
            <Link href="/" target={"_blank"} className='mr-8 text-(--color-dark)'>Twitter</Link>
            <Link href="/" target={"_blank"} className='mr-8 text-(--color-dark)'>Instagram</Link>
            <Link href="/" target={"_blank"} className='mr-8 text-(--color-dark)'>Facebook</Link>
        </nav>

        <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
            <Logo />
        </div>

    </header>
  )
}

export default NavBar