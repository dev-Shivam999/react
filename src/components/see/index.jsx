import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chech, editeTodo, removetodo } from '../../stroe/addtodo';


const See = () => {
    const dispatch = useDispatch()

    const t = useSelector(state => state.todos)

    return (
        <div>
            <ul>
                {
                    t.map((p) => <li className='flex justify-between items-center px-6 py-4 border-2 border-y-1 border-black' key={p.id}><div className='flex gap-2' onChange={()=>dispatch(chech(p))} >
                        <input type="checkbox" checked={p.com} onChange={() => dispatch(chech(  p.id ))} />
                        <div className={`${p.com?"line-through":""}`} >{p.text}</div></div> 


                    <div>
                            <button onClick={() =>p.com?"": dispatch(editeTodo({ id: p.id, newText: 'New Text' }))}>✒️</button>
                            <button onClick={() => dispatch(removetodo(p))} >🗑️</button>
                    </div>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default See;