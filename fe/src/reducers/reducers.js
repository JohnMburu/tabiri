
import {LOG_IN,API_ERROR} from  '../constants/index';

export const rootReducer= (state = {}, action)=>{

    let new_state={};

    switch (action.type){
        case LOG_IN:
                
                new_state= {
                    authenticated:true,
                    access_token:action.payload.access,
                    refresh_token:action.payload.refresh,
                    error:{
                        message:'',
                        status:false
                    }
                    
                  }; 


            break;
        
        case API_ERROR:
                new_state= {
                    authenticated:false,
                    access_token:'',
                    refresh_token:'',
                    error:{
                        message: action.payload.error,
                        status:true
                    }
                    }

            break;

        default:
                new_state= {

                    authenticated:false,
                    access_token:'',
                    refresh_token:'',
                    error:{
                        message:'',
                        status:false
                    }
                }
            break;

        
            
    }


    return new_state;
    


}