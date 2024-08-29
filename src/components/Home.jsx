
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { f, lol, r } from '../stroe/data';

import { Link } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                const data = await response.json();
                dispatch(lol(data));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const products = useSelector((state) => state.data.api);
    const fa=useSelector((state) => state.data.fa)
    return (
        <div className="App">
            {products && products.length > 0 ? (
                <div className=" flex  gap-[50px] items-center justify-center text-center flex-wrap ">
                    {products.map((product) => (
                        <Link to={`/product/${product.id}`} key={product.id} className="w-[300px] h-[300px]">
                            <img className="w-full h-[200px]" src={product.image} alt={product.title} />
                            <h2>{product.title}</h2>
                            <button onClick={() => fa.some(pro => pro.id == product.id) ? dispatch(r(product.id)) : dispatch(f(product))} className="p-2 my-3 bg-amber-500">{fa.some(pro => pro.id == product.id)?"remove":"Add to cart"}</button>
                        </Link>
                    ))}
                </div>
            ) : (
                <div>Something went wrong!</div>
            )}
        </div>
    );
};

export default Home;