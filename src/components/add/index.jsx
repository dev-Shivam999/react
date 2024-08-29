import React, { useRef } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from '../../stroe/addtodo';

const Add = () => {
    const ref = useRef()
    const dispatch=useDispatch()
    const handl = (e) => {
        e.preventDefault()
        
        dispatch( addtodo( ref.current.value))
        ref.current.value=""
    }
    return (
        <nav className='flex items-center mt-12 justify-center gap-4'>
            <h1>Add todo </h1>
            <form className='  overflow-hidden border-2 border-black rounded-xl' onSubmit={(e) =>  handl(e)}>
                <input ref={ref} type="text" className='outline-none text-2xl ' />
                <button type='submit' className='bg-slate-300 p-3 active:bg-black active:text-slate-300'>Add</button>
            </form>
            <br />
            <br />
        </nav>
    );
};

export default Add;