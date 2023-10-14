import React from 'react'

const MessageBox = ({user,message}) => {
  return (
    <div className='py-3 px-2 w-[90%] flex justify-start items-center gap-2 my-4'>
        <img src={user?.avatar} alt='user avatar' className='w-10 h-10 rounded-full'/>
        <p className='text-white text-sm'>
            <span className='opacity-75 mr-2'>{user?.name}</span>
            <span>{message}</span>
        </p>
    </div>
  )
}

export default MessageBox