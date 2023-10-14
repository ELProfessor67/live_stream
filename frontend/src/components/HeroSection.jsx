import React from 'react'

const HeroSection = () => {
    return (
        <section class="text-gray-400 bg-gray-800 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Your Ultimate Live
                        <br class="hidden lg:inline-block" />Streaming Companion
                    </h1>
                    <p class="mb-8 leading-relaxed">
                    Your Ultimate Live Streaming Companion" is your go-to platform for all things live streaming. Whether you're a content creator, gamer, or simply someone who enjoys watching live events, our application is designed to enhance your experience.
                    </p>
                    <div class="flex justify-center">
                        <button class="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Go Live</button>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-contain drop-shadow-xl object-center rounded" alt="hero" src="/images/hero-image.png" />
                </div>
            </div>
        </section>
    )
}

export default HeroSection