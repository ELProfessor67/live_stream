import React from 'react'
import { CiStreamOn } from 'react-icons/ci'
import {Link} from 'react-router-dom';

const LiveCard = ({title,user,_id}) => {
    return (
        <a href={`/lives/${_id}`} class="p-4 md:w-1/3 sm:mb-0 mb-6 my-6 shadow-xl">
            <div class="rounded-lg h-64 overflow-hidden relative">
                <button className='flex items-center gap-2 py-2 px-4 text-white bg-red-600 absolute right-3 top-3 rounded'>
                    <span className='text-2xl'><CiStreamOn/></span>
                    <span>Live</span>
                </button>
                <img alt="content" class="object-contain object-center h-full w-full" src={'/logo192.png'} />
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">{title}</h2>
            <div className='flex items-center gap-2 mt-4'>
                <img src={user?.avatar ? user?.avatar : '/logo192.png'} alt='avatar' className='w-6 h-6 rounded-full object-cover'/>
                <h3 className='text-white text-lg'>{user?.name}</h3>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <h4 className='text-sm text-white'>13k Watching </h4>
            </div>
        </a>
    )
}

export default LiveCard