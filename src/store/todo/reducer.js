import { ADD_TODO, CLEAR_COMPLETED, REMOVE_TODO, TOGGLE_TODO } from "./action";

const initialState = {
    todos: [],  // Danh sách công việc
    // filter: 'ALL', // Lọc theo 'ALL', 'COMPLETED', hoặc 'INCOMPLETE'
  }

const todoReducer = (state = initialState , action) =>{

    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, 
                todos: [
                    ...state.todos,
                    {
                        id:action.payload.id, 
                        text:action.payload.text, 
                        completed:false
                    }
                ]
            }
        case REMOVE_TODO:
            return {
                ...state, 
                todos: state.todos.filter((element , index, todos )=>{ return element.id !== action.payload.id })
            }
        
        case TOGGLE_TODO:
            return {
                ...state, 
                todos: state.todos.map((e,index, todos) =>{ return e.id === action.payload.id ? {...e, completed: !e.completed }: e   })
            }
        case CLEAR_COMPLETED:
            return {
                ...state, 
                todos: state.todos.filter((todo) => todo && todo.completed !== true)
            }
        default:
            return state;
    }

}
export default todoReducer;