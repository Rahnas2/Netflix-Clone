
import { useState } from 'react'
import { FaPlus } from 'react-icons/fa'

import {FaXmark} from 'react-icons/fa6'

function Questions({question, answer}) {
    const [open, setOpen] = useState(false)
    const handleOpen = ()=>{
      setOpen(!open)
    }
  return (
    <>
    <div onClick={handleOpen} className="flex justify-between bg-[rgba(45,45,45,0.5)] hover:bg-[rgba(45,45,45,1)] px-6 py-8 mb-2 font-nsans-regular cursor-pointer">
       <h1 className="text-xl sm:text-2xl ">{question}</h1>
       {open ? <FaXmark className='text-2xl sm:text-4xl font-extralight'/>
       : <FaPlus className='text-2xl sm:text-4xl' />
       }
    </div>
    {open === true && (
      <div className='px-6 py-6 bg-[rgba(45,45,45,0.5)] mt-[-6px] font-nsans-regular text-2xl mb-2'>
        {answer}
      </div>
     )}
     </>
  )
}

export default Questions