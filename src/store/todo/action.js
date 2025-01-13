export const ADD_TODO = 'todo/add_todo';
export const REMOVE_TODO ='todo/remove_todo'
export const TOGGLE_TODO ='todo/toggle_todo'
export const CLEAR_COMPLETED ='todo/clear_completed'

export const addTodo  = (id,text) =>
({type: ADD_TODO , payload: {
    id , 
    text,
}})

export const removeTodo = (id) =>(
    {type: REMOVE_TODO , payload: {
        id
    }}
)

export const toggle_todo = (id) =>(
    {type: TOGGLE_TODO , payload: {
        id
    }}  
)

export const clear_completed = ()=>
    ({type:CLEAR_COMPLETED})


