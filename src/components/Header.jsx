import React from 'react';

const Header = () => {
    return (
        <header className='flex items-center justify-between gap-4 p-4'>
            <a href="/"><h1 className='font-bold text-xl sm:text-2xl bg-clip-text text-transparent hover:opacity-70 bg-black'>V<span className='bg-clip-text text-transparent bg-blue-500 bold'>Scribe.</span></h1></a>
            <a href="/" className='flex items-center gap-2 px-3 py-2 border border-blue-200 shadow-md rounded-xl text-blue-500 hover:text-opacity-70 hover:bg-slate-100'>
                <p>New</p>
                <i className="fa-solid fa-plus"></i>
            </a>
        </header>
    )
};

export default Header;