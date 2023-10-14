import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useRef } from 'react';
import {AiFillCamera, AiOutlineSend} from 'react-icons/ai';
import {BsFillMicFill, BsShareFill} from 'react-icons/bs';
import {PiMonitorFill} from 'react-icons/pi';
import {IoMdExit} from 'react-icons/io';
import MessageBox from '../components/MessageBox';
import useSocket from '../hooks/useSocket';
import {useSelector, useDispatch} from 'react-redux';
import {getLiveDetail} from '../redux/actions/lives'
// import Peerjs from 'simple-peer';



const Stream = () => {
    const {roomId} = useParams();
    const videoRef = useRef(null);
    const liveStream = useRef(null);
    const {socketRef,user,myId, joinOwner,joinParticipate} = useSocket(roomId);

    // useEffect(() => {
    //     if(livesDetails.current && user && socketRef.current){
    //         (async function (){
    //             console.log(user,livesDetails)
    //             if(livesDetails.current.user?._id == user?._id){
    //                 if(navigator.mediaDevices){
    //                     try {
    //                         const stream = await navigator.mediaDevices.getUserMedia({
    //                             video: true,
    //                             audio: true,
    //                             width: window.innerWidth,
    //                             height: window.innerHeight
    //                         });
                            
    //                         liveStream.current = stream;
    //                         videoRef.current.srcObject = liveStream.current;
    //                         videoRef.current.volume = 0; 
    //                         // videoRef.current.play();
    //                     } catch (error) {
    //                         console.log(error.message);
    //                     }
    //                 }
    //             }else{
    //             const peer = new Peerjs({initiator: true});

    //             peer.on('stream',(remoteStream) => {
    //                 console.log(remoteStream)
    //                 videoRef.current.srcObject = remoteStream;
    //             });

    //             peer.on('signal',(offer) => {
    //                 socketRef.current.emit('sendoffer',{id:myId,offer,roomId});
    //             });

    //             socketRef.current.on('reciveAnswer',({answer}) => {
    //                 peer.signal(answer);
    //             })
    //         }
    //     }
    //         )();
            
    //         socketRef.current.on('reciveOffer',({offer,id}) => {
    //             // alert('offer',offer)
    //             const peer = new Peerjs({initiator: false, stream: liveStream.current});

    //             peer.on('signal',(answer) => {
    //                 socketRef.current.emit('sendAnswer',{answer,id});
    //             });
    //             console.log('offer',offer)
    //             peer.signal(offer);
    //         })
    //     }
    // },[livesDetails.current,socketRef.current,user]);


    const dispatch = useDispatch();
    const {liveDetails} = useSelector(store => store.live)

    useEffect(() => {
        dispatch(getLiveDetail(roomId));
    },[]);

    
    useEffect(() => {
        if(liveDetails && user){
            // alert('load live  deatils')
            const params = new URLSearchParams(window.location.search);
            const keyhost = params.get('keyhost');

            if(liveDetails?.user._id == user?._id || keyhost == liveDetails?.user._id){
                console.log('join owner');
                joinOwner();
            }else{
                console.log('join participate');
                joinParticipate();
            }
        }
    },[liveDetails,user]);

    function handleShare(id){
        const url = `${window.location.origin}/lives/${roomId}?keyhost=${id}`
        navigator.clipboard.writeText(url)
    }
    
    return (
    <div>
        <section class="text-gray-400 bg-gray-900 body-font w-[100%] overflow-x-hidden">
            <div className='stream-box w-[100vw] h-[100vh] md:flex items-center'>
                {/* left / */}
                <div className='flex-[2] min-h-[100vh] h-[100vh] relative'>
                    <div id="video-container" className="w-[100%] flex flex-wrap justify-center items-center overflow-y-auto">
                        
                    </div>
                    <div className='options absolute bottom-0 right-0 left-0 py-6 flex justify-center items-center z-20 gap-4'>
                        {
                            liveDetails?.user?._id == user?._id &&
                            <>
                                <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white' onClick={() => handleShare(liveDetails?.user?._id)}><BsShareFill/></button>
                                    <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white'><AiFillCamera/></button>
                                    <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white'><BsFillMicFill/></button>
                                    <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white'><PiMonitorFill/></button>
                            </>
                        }

                        {
                            liveDetails?.user?._id === new URLSearchParams(window.location.search).get('keyhost') &&
                            (
                                <>
                                    <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white'><AiFillCamera/></button>
                                    <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white'><BsFillMicFill/></button>
                                    <button className='text-xl w-10 h-10 rounded-full bg-gray-900 grid place-items-center text-white transition-all hover:text-gray-900 hover:bg-white'><PiMonitorFill/></button>
                                </>
                            )
                        }
                        

                        <button className='text-xl w-10 h-10 rounded-full bg-red-700 grid place-items-center text-white transition-all hover:bg-white hover:text-red-700'><IoMdExit/></button>
                    </div>
                </div>

                {/* right  */}
                <div className='flex-1 min-h-[100vh] h-[100vh] bg-gray-800 relative'>
                    <div className='chat-container h-[87%] w-[100%] reletive overflow-y-auto'>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                        <MessageBox user={{name: 'Zeeshan Raza',avatar: '/images/user.jpg'}} message={'hello world'}/>
                    </div>
                    <form className='text h-[10%] flex items-center py-2 px-3 gap-2 absolute bottom-0 left-0 right-0'>
                        <input type='text' placeholder='write something here' className='h-[90%] w-[80%] rounded-3xl outline-none border-none bg-gray-900 py-2 px-3'/>
                        <button type='submit' className='text-xl w-10 h-10 rounded-full bg-green-500 grid place-items-center text-white transition-all hover:text-green-500 hover:bg-white'>
                            <AiOutlineSend/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Stream