import React, { useEffect, useRef, useState } from 'react'
import { socketInit } from '../socket'
import {useSelector} from 'react-redux';
import {getLiveDetail} from '../redux/actions/lives';
import { REACT_PUBLIC_AGORA_KEY, REACT_PUBLIC_TOKEN_KEY } from '../constants';

const useSocket = (roomId) => {
    const socketRef = useRef(null);
    const [myId,setMyId] = useState();
    const {user} = useSelector(store => store.user);
    // const liveDetails = useRef(null);
    const {liveDetails} = useSelector(store => store.live)

    const config = {mode: "rtc", codec: "vp8"}
    const clientRef = useRef(null);
    const localTracks = useRef([]);
    const remoteUsers = useRef({});
    const agora_id = useRef(null);

    // useEffect(() => {(async function(){
    //   const {data} = await getLiveDetail(roomId);
    //   liveDetails = data;
    // })()},[]);

    // useEffect(() => {
    //    if(user && liveDetails.current){
    //     socketRef.current = socketInit();
    //     socketRef.current?.on('me',(id) => {
    //         setMyId(id);
    //         socketRef.current?.emit('join-room',{user,roomId});
    //     });
    //    }
    // },[user,liveDetails.current]);

  async function joinParticipate(){
    clientRef.current = window.AgoraRTC.createClient(config);
    clientRef.current.join(REACT_PUBLIC_AGORA_KEY,roomId,REACT_PUBLIC_TOKEN_KEY,user._id)
    clientRef.current.on('user-published',handleUserPublish)
    clientRef.current.on('user-left',handleUserLeft)
  }

  async function joinOwner(){
    console.log('calling',window.AgoraRTC)
    clientRef.current = window.AgoraRTC.createClient(config);
    await clientRef.current.join(REACT_PUBLIC_AGORA_KEY,roomId,REACT_PUBLIC_TOKEN_KEY,user._id)
    clientRef.current.on('user-published',handleUserPublish)
    clientRef.current.on('user-left',handleUserLeft)

    joinStream();
  }

  async function joinStream(){
    localTracks.current = await window.AgoraRTC.createMicrophoneAndCameraTracks();
    const videoBox = document.createElement('div');
    videoBox.style.width = '20rem';
    videoBox.style.height = '20rem'
    videoBox.setAttribute('id',`user-${user._id}`);
    document.getElementById('video-container').appendChild(videoBox);
    localTracks.current[1].play(`user-${user._id}`);
    await clientRef.current.publish([localTracks.current[0],localTracks.current[1]])
  }


  async function handleUserPublish(agoraUser,mediaType){
    console.log()
    remoteUsers.current[agoraUser.uid] = agoraUser;
    await clientRef.current.subscribe(agoraUser,mediaType);

    if(mediaType === 'video'){
      const videoBox = document.createElement('div');
      videoBox.style.width = '20rem';
      videoBox.style.height = '20rem'
      videoBox.setAttribute('id',`user-${agoraUser.uid}`);
      document.getElementById('video-container').appendChild(videoBox);
      agoraUser.videoTrack.play(`user-${agoraUser.uid}`);
    }

    if(mediaType === 'audio'){
      console.log('audio')
      agoraUser.audioTrack.play()
    }
  }


  async function handleUserLeft(agoraUser){
    delete remoteUsers.current[agoraUser.uid];
    document.getElementById(`user-${agoraUser.uid}`)?.remove();

  }
  return {
    liveDetails,
    socketRef,
    user,
    myId,
    joinOwner,
    joinParticipate
  }
}

export default useSocket