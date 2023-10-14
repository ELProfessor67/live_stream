import axios from 'axios';
import { REACT_PUBLIC_BACKEND_URL } from '../../constants';

const prifix = '/api/v1'
// const REACT_PUBLIC_BACKEND_URL = "http://localhost:4000";

const api = axios.create({
    baseURL: `${REACT_PUBLIC_BACKEND_URL}${prifix}`,
    withCredentials: true
});

export const login = (fromData) => async (dispatch) => {
    try {
        dispatch({
            type: 'loginRequest'
        });

        const {data} = await api.post('/login',fromData);

        dispatch({
            type: 'loginSuccess',
            payload: data
        });

    } catch (error) {
        dispatch({
            type: 'loginFail',
            payload: error.response.data.message
        });
    }
}


export const register = formdata => async dispatch => {
    try { 
        console.log(api.getUri)
        dispatch({ type: 'registerRequest' });
        
        const {data} = await api.post(`/register`, formdata);
      dispatch({ type: 'registerSuccess', payload: data });
    } catch (error) {
      dispatch({ type: 'registerFail', payload: error.response.data.message });
    }
  };



  export const loadUser = () => async dispatch => {
    try {
      dispatch({ type: 'loadUserRequest' });
  
      const { data } = await api.get(
        `/me`,
  
        {
          withCredentials: true,
        }
      );
      dispatch({ type: 'loadUserSuccess', payload: data.user });
    } catch (error) {
      dispatch({ type: 'loadUserFail', payload: error.response.data.message });
    }
  };

