import React, { useReducer } from 'react';


 
const initialState = {
    firstName: {
        value: '',
        error: null
    },
    lastName: {
        value: '',
        error: null
    },
    email: {
        value: '',
        error: null
    }
};

const validateFirstName = (state)=>{
    if(state.firstName.error){
        return("First Name must be at least 3 characters")
    }
}
const validateLastName = (state)=>{
    if(state.lastName.error){
        return("Last Name must be at least 3 characters")
    }
}
const validateEmail = (state)=>{
    if(state.email.error){
        return("Email must be at least 8 characters")
    }
}



function reducer(state, action) {

    return {
        ...state,
        [action.type]: action.payload
    };
}
 
export default () => {
    const [state, dispatch] = useReducer(reducer, initialState);
 
    function handleChange(e) {
        const { name, value } = e.target;
        let isError=false
        if (e.target.name=="firstName" && e.target.value.length<3){
            isError=true;          
        }
        if (e.target.name=="lastName" && e.target.value.length<3){
            isError=true;   
        }
        if (e.target.name=="email" && e.target.value.length<8){
            isError=true;   
        }
      
        dispatch({
            type: name,
            payload: {value, error:isError}
        });
    }
 
    return (
        <div>
            
            <div>
                <label>
                    <span>First Name:</span>{' '}
                    <input
                        name="firstName"
                        value={state.firstName.value}
                        onChange={handleChange}
                        placeholder="First Name"
                    />
                </label>
                <p style={{color:'red'}}>{validateFirstName(state)}</p>
            </div>
            <div>
                <label>
                    <span>Last Name:</span>{' '}
                    <input
                        name="lastName"
                        value={state.lastName.value}
                        onChange={handleChange}
                        placeholder="Last Name"
                    />
                </label>
                <p style={{color:'red'}} >{validateLastName(state)}</p>
            </div>
            <div>
                <label>
                    <span>Email:</span>{' '}
                    <input
                        name="email"
                        value={state.email.value}
                        onChange={handleChange}
                        type="email"
                        placeholder="email address"
                    />
                </label>
                <p style={{color:'red'}} >{validateEmail(state)}</p>
            </div>

            {JSON.stringify(state)}
        </div>
    );
}