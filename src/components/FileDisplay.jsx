import React from 'react';

const FileDisplay = (props) => {
  const { file, audioStream, handleAudioReset } = props

  return (
    <main className='container mx-auto flex flex-col flex-auto text-center justify-center gap-3 sm:gap-4 px-14 max-w-prose'>
      <h1 className='font-semibold text-4xl sm:text-5xl md:text-6xl'>Your <span className='text-blue-400 bold'>File</span></h1>
      <div className=' flex flex-col text-left my-4'>
        <h3 className='font-semibold'>Name</h3>
        <p className='truncate'>{file ? file?.name : 'Custom audio'}</p>
      </div>
      <div className='flex justify-center gap-14'>
        <button onClick={handleAudioReset} className='text-slate-400 hover:text-blue-600 duration-200 border border-blue-200 shadow-md rounded-lg px-3 p-2'>Reset</button>
        <button className='flex items-center font-medium text-blue-400 gap-2 px-3 p-2 specialBtn shadow-md rounded-lg'>
          <p>Transcribe</p>
          <i className="fa-solid fa-pen-nib"></i>
        </button>
      </div>
    </main>
  )
};

export default FileDisplay;