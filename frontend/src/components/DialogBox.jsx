import React from 'react'
import {AiOutlineClose} from 'react-icons/ai'

const DialogBox = ({onClose,open,children}) => {
  return (
    <div className={`fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,0,0,0.4)] grid place-items-center z-[1000000] ${open ? '' : 'hidden'}`}>
        <div className='box max-w-[50rem] w-[50rem] rounded-xl bg-gray-800'>
            <div className='py-5 px-5 flex justify-end items-center'>
                <span className='text-white text-2xl cursor-pointer' onClick={onClose}><AiOutlineClose/></span>
            </div>
            <div className='body p-3 min-h-[20rem] h-[20rem] relative'>
                {children}
            </div>
        </div>
    </div>
  )
}

export default DialogBox