import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, reset } from '../store/clock/action';
import store from '../store';

const Contact = () => {

    const dispatch  = useDispatch();
    // cú pháp lấy state const result = useSelector((state) => state.someSlice.someProperty);

const count = useSelector((state) => state.counter.value);
    

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Counter app </h1>
        <h2>{count}</h2>
        <div>
            <button onClick={() => dispatch(increment())} >Tăng</button>
            <button onClick={() => dispatch(decrement())} >Giảm</button>
            <button onClick={() => dispatch(reset())} >Mặc định</button>

        </div>
    </div>
  );
};

console.log("thong tin store "+store.getState());
console.log("Thong tin counter trong store: ", store.getState().counter);

console.log("Gia tri counter.value: ", store.getState().counter.value);


console.log("Thong tin store: ", JSON.stringify(store.getState(), null, 2));

export default Contact;
