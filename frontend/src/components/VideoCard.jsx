import React from 'react'

const VideoCard = ({title,user,views,time,banner}) => {
    return (
        <div class="p-4 md:w-1/3 sm:mb-0 mb-6 my-6 shadow-xl">
            <div class="rounded-lg h-64 overflow-hidden">
                <img alt="content" class="object-contain object-center h-full w-full" src={banner} />
            </div>
            <h2 class="text-xl font-medium title-font text-white mt-5">{title}</h2>
            <div className='flex items-center gap-2 mt-4'>
                <img src={user?.avatar} alt='avatar' className='w-6 h-6 rounded-full object-cover'/>
                <h3 className='text-white text-lg'>{user?.name}</h3>
            </div>
            <div className='flex items-center gap-2 mt-4'>
                <h4 className='text-sm text-white'>{views} views - </h4>
                <h4 className='text-sm text-white'>{time}</h4>
            </div>
        </div>
    )
}

export default VideoCard