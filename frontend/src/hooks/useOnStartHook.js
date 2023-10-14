import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../redux/actions/user";



export default function useOnStartHook(){
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadUser());
    },[]);
    return [];
}