import React from 'react';

const Homepage = () => {
    return (
        <main className='flex flex-col flex-auto items-center justify-center gap-3 sm:gap-4'>
            <h1 className='font-semibold text-5xl sm:text-6xl md:text-7xl'>V<span className='text-blue-500 bold'>Scribe</span></h1>
            <h3 className='font-medium md:text-lg'>Record <span className='text-blue-500'>&rarr;</span> Transcribe <span className='text-blue-500'>&rarr;</span> Translate</h3>
            <button className='flex items-center justify-between gap-4 specialBtn rounded-xl w-72 max-w-full text-base my-4 px-4 py-2'>
                <p className='text-blue-500'>Record</p>
                <i className={"fa-solid duration-200 fa-microphone"}></i>
            </button>
            <p className='text-base'>Or <label className='text-blue-500 hover:text-blue-700 cursor-pointer duration-200'>upload<input className='hidden' type='file' accept='.mp3,.wave' /></label> a mp3 file</p>
            <p className='italic text-slate-400'>Free now free forever!</p>
        </main>
    )
};

export default Homepage;