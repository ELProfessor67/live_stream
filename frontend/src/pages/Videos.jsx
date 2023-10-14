import React from 'react'
import VideoCard from '../components/VideoCard'

export const Videos = () => {
    const user = {
        name: "React Official",
        avatar: '/logo192.png'
    }
    return (
        <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container px-5 py-24 mx-auto">
                <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    <VideoCard title={'Fastest Way To Leact React 2023'} user={user} views={'12k'} time={'1 month ago'} banner={'/logo192.png'}/>
                    
                </div>
            </div>
        </section>
    )
}
