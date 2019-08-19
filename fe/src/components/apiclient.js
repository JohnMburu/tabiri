import axios from 'axios';

export default function make_request(url,method='GET',data={}){

    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json;charset=UTF-8' 
        }
    }

    switch(method){
        case 'POST': //case for post calls

                axios.post(url, data,axiosConfig)
                .then((response) => {
            
                   return response.data
                    
                })
                .catch(function (error) {

                   return error

                });



            break; 
        
        default:  //case for get calls
            break;

    }

    

    

}



