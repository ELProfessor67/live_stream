import axios from 'axios';
import { REACT_PUBLIC_BACKEND_URL } from '../../constants';

const prifix = '/api/v1'
// const REACT_PUBLIC_BACKEND_URL = "http://localhost:4000";

const api = axios.create({
    baseURL: `${REACT_PUBLIC_BACKEND_URL}${prifix}`,
    withCredentials: true
});

export const createLive = (fromData) => async (dispatch) => {
    try {
        dispatch({
            type: 'createLiveRequest'
        });

        const {data} = await api.post('/lives/create',fromData);
        

        dispatch({
            type: 'createLiveSuccess',
            payload: data
        });

        return data?.url

    } catch (error) {
        dispatch({
            type: 'createLiveFail',
            payload: error.response.data.message
        });
        return false;
    }
}


export const getLives = () => async (dispatch) => {
    try {
        dispatch({
            type: 'getLivesRequest'
        });

        const {data} = await api.get('/get/all/lives');
        

        dispatch({
            type: 'getLivesSuccess',
            payload: data
        });

        return data?.url

    } catch (error) {
        dispatch({
            type: 'getLivesFail',
            payload: error.response.data.message
        });
        return false;
    }
}

export const getLiveDetail = (id) => async (dispatch) => {
    try {
        dispatch({
            type: 'getLivesDetailsRequest'
        });

        const {data} = await api.get(`/get/live/${id}`);
        

        dispatch({
            type: 'getLivesDetailsSuccess',
            payload: data
        });

    } catch (error) {
        dispatch({
            type: 'getLivesDetailsFail',
            payload: error.response.data.message
        })
    }
}