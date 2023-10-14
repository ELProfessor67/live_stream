import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {CiStreamOn} from 'react-icons/ci'
import {useDispatch, useSelector} from 'react-redux';
import DialogBox from '../DialogBox';
import {createLive} from '../../redux/actions/lives.js';

export const Header = () => {
    const {isAuthenticated} = useSelector(store => store.user)
    const [open, setOpen] = useState(false);
    const [title,setTitle] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!title) return
        const url = await dispatch(createLive({title}));

        if(url){
            window.location.pathname = url;
            setTimeout(function(){
                window.location.reload(true);
            },2000)

        }
        setOpen(false);
    }

    return (
        <>
        <header class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a class="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                    </svg> */}
                    <span className='text-white text-3xl grid place-items-center w-10 h-10 rounded-full bg-green-500'>
                        <CiStreamOn/>
                    </span>
                    <span class="ml-3 text-xl">Stream</span>
                </a>
                <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <Link to={'/'} class="mr-5 hover:text-white">Home</Link>
                    <Link to={'/lives'} class="mr-5 hover:text-white">Lives</Link>
                    <Link to={'/videos'} class="mr-5 hover:text-white">Videos</Link>
                    <Link to={'/contact'} class="mr-5 hover:text-white">Contact</Link>
                </nav>
                {
                    isAuthenticated
                    ? (
                        <button onClick={() => setOpen(true)} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Go Live
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    )
                    : (
                        <Link to={'/login'} class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Sign In
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </Link>
                    )
                }
            </div>
        </header>
        <DialogBox open={open} onClose={() => setOpen(false)}>
            <div className='w-[100%] h-[100%] relative'>
                <form className='w-[100%] flex justify-center items-center flex-col h-[100%] gap-4' onSubmit={handleSubmit}>
                    <div className='w-[100%] flex justify-center items-center'>
                        <input type='text' placeholder='Enter strem title' className='outline-none  py-3 px-2 rounded-lg text-white bg-gray-900 w-[80%]' value={title} onChange={(e) => setTitle(e.target.value)}/>
                    </div>
                    
                    {/* pending  */}
                    {/* <div className='options'>

                    </div> */}
                    <button type='submit' className='bg-green-500 rounded-md py-2 px-4 text-white'>Go Live</button>
                </form>
            </div>
        </DialogBox>
    </>
    )
}
