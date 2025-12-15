import React, { useEffect } from 'react'

const NavBar = ({menuOpne, setMenuOpen}) => {
    useEffect(() => {
       document.body.style.overflow = menuOpne ? 'hidden' : '';
    }, [menuOpne]);
    return (
        <nav className='fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
            <div className=" max-w-5xl mx-auto! px-4!">
                <div className="flex justify-between items-center h-16">
                    <a href="/portfolio" className='font-mono text-xl font-black text-white'>ton <span className='bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-right'>Wittaya.i</span></a>
                    <div className="w-7 h-5 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen((prev) => !prev)}>
                        &#9776;
                    </div>
                    <div className="hidden md:flex items-center space-x-8!">
                        <a href="#home" className='text-gra-300 hover:text-white transition-color'>Home</a>
                        <a href="#about" className='text-gra-300 hover:text-white transition-color'>About</a>
                        <a href="#projects" className='text-gra-300 hover:text-white transition-color'>Projects</a>
                        <a href="#contact" className='text-gra-300 hover:text-white transition-color'>Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar