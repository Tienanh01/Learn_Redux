export const INCREMENT = 'counter/increment';
export const DECREMENT = 'counter/decrement';
export const RESET = 'counter/reset'; 

export const increment = () =>(
    // tra ve object literal 
    { type: INCREMENT }
)

export const decrement = () =>{
    return {type: DECREMENT};
}

export const reset =()=>{
    return {type: RESET};
}