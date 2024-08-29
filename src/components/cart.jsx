import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { r } from '../stroe/data';

const Cart = () => {
    const[a,ab]=useState(0)

    const products = useSelector((state) => state.data.fa);
   const dispatch=useDispatch()
  
    useEffect(()=>{
      ab(products.reduce((acc, pcc) => acc + pcc.price, 0));
    },[products])
    return (
        <div>
            {products && products.length > 0 ? (
             <>
                    <div className=" flex  gap-[50px] items-center justify-center text-center flex-wrap ">
                        {products.map((product) => (
                            <div key={product.id} className="w-[300px] h-[300px]">
                                <img className="w-full h-[200px]" src={product.image} alt={product.title} />
                                <h2>{product.title}</h2>
                                <h2>{product.price} $</h2>
                                <button onClick={() => dispatch(r(product.id))} className="p-2 my-3 bg-amber-500">remove to cart</button>
                            </div>
                        ))}
                    </div>
                    <div>{a}</div>
             </>
            ) : (
                <div>add some</div>
            )} 
            
        </div>
    );
};

export default Cart;