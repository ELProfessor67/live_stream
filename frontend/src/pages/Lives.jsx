import React,{useEffect} from 'react'
import LiveCard from '../components/LiveCard'
import {getLives} from '../redux/actions/lives';
import {useDispatch, useSelector} from 'react-redux';

export const Lives = () => {
  const user = {
    name: "React Official",
    avatar: '/logo192.png'
  }
  const {lives} = useSelector(state => state.live)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLives());
  },[]);

  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {
            lives && lives.map((liveData) => (<LiveCard {...liveData}/>))
          }
        </div>
      </div>
    </section>
  )
}
