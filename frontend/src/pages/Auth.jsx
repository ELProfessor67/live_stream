import React, { useState } from 'react'
import LoginForm from '../components/LoginForm'
import { ResgisterForm } from '../components/ResgisterForm'
import { useSelector } from 'react-redux'
import {Navigate} from 'react-router-dom';


const Forms = {
    login: LoginForm,
    register: ResgisterForm
}

const Auth = () => {
    const [formname,setFormname] = useState('login');
    const Form = Forms[formname]

    const {isAuthenticated} = useSelector(store => store.user);
    if (isAuthenticated) return <Navigate to={'/'}/>
    return (
        <section className=" bg-gray-900 min-h-[100vh]">
            <div className='container m-auto flex flex-wrap relative lg:h-screen lg:items-center'>


                <div className="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 hidden lg:block">
                    <img
                        alt="Welcome"
                        src="/images/login-image.png"
                        className="absolute inset-0 h-full w-full object-contain drop-shadow-xl"
                    />
                </div>
                <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                    <div className="mx-auto max-w-lg text-center">
                        <h1 className="text-2xl font-bold sm:text-3xl text-white">Get started today!</h1>

                        <p className="mt-4 text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
                            eaque error neque ipsa culpa autem, at itaque nostrum!
                        </p>
                    </div>

                    <Form setFormname={setFormname}/>
                </div>
            </div>
        </section>
    )
}

export default Auth