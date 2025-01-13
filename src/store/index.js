import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./clock/reducer";
import todoReducer from "./todo/reducer";


const store = configureStore(
    {
        reducer: {
            counter: counterReducer ,
            todo: todoReducer, 
        }

    }
)
console.log("thong tin store "+store.getState());
console.log("Thong tin counter trong store: ", store.getState().counter);

console.log("Gia tri counter.value: ", store.getState().counter.value);


console.log("Thong tin store: ", JSON.stringify(store.getState(), null, 2));

export default store ; 