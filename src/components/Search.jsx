import React, { useState } from 'react'
import { HiX } from 'react-icons/hi'

const Search = ({setSearchIcon}) => {
  const [text, setText] = useState("");
  return (
    <div className='w-full h-full bg-[#000000ac] fixed z-[100]'> 

    <div className='w-[86%] sm:w-[430px] rounded-xl py-9 bg-slate-50 px-4 sm:px-6 fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[90%]'> 
      <div className='w-full h-full relative'> 
        <input value={text} onChange={(e) => setText(e.target.value)} type="text" className='w-full py-3 border-[2px] ps-4 border-[rgb(45,205,208)] rounded outline-none' placeholder='Search Product'/>
        <h1 className='mt-5 text-center'>{text}</h1>
      <div className='absolute -top-12 -right-10 bg-red-500 p-2 rounded-full cursor-pointer'>
      <HiX onClick={() => setSearchIcon(false)} className='text-white text-[20px] font-[600]' />
      </div>
      </div>
    </div>
    </div>
  )
}

export default Search