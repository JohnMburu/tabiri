import {LOG_IN,LOG_OUT,API_ERROR} from  '../constants/index'; 
import axios from 'axios';
import { push } from 'connected-react-router'

let axiosConfig = {
  headers: {
      'Content-Type': 'application/json;charset=UTF-8' 
  }
}

export function login(data) {
    return function(dispatch) {
      return axios.post('http://localhost:8000/api/token/', data,axiosConfig)
      .then((response) => {
        
        

          console.log(response)

          dispatch({ type: LOG_IN, payload: response.data });

          dispatch(push('/home'))


        

        
          
      })
      .catch(function (error) {

        //console.log(error.response.data.non_field_errors[0])

        dispatch({ type: API_ERROR, payload: {error:error.response.data.non_field_errors[0]} });

      });
    };
    
}

export function register(data){

  return function(dispatch) {
    return axios.post('http://localhost:8000/users', data,axiosConfig)
    .then((response) => {

      dispatch({ type: LOG_IN, payload: response.data });

      // import { push } from 'connected-react-router'
        
    })
    .catch(function (error) {

      dispatch({ type: API_ERROR, payload: error });

    });
  };


}

export function logout(payload) {
    return { type: LOG_OUT, payload }
  }