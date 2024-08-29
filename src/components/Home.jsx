
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { f, lol, r } from '../stroe/data';

import { Link } from "react-router-dom";


const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchData() {
            try {
                // const response = await fetch("https://fakestoreapi.com/products");
                // const data = await response.json();
                const productArr = [
                  {
                    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "T-SHIRT",
                    price: "20",
                    id: 0,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1668649176554-3ad841a780d0?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "WIRELESS EARBUDS",
                    price: "150",
                    id: 1,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1627637454030-5ddd536e06e5?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "COAT",
                    price: "100",
                    id: 2,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "SUNGLASS",
                    price: "130",
                    id: 3,
                  },
                  {
                    image: "https://media.istockphoto.com/id/458530691/tr/foto%C4%9Fraf/john-deere-cap-on-wood-block.jpg?s=612x612&w=0&k=20&c=f7S74pVLNl088rYgDR_xvM8EG0eomKDIDHD6UCQhejk=",
                    title: "BACK HAT",
                    price: "30",
                    id: 4,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1622260614153-03223fb72052?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGJhY2twYWNrfGVufDB8fDB8fHww",
                    title: "BACKPACK",
                    price: "90",
                    id: 5,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "T-SHIRT",
                    price: "20",
                    id: 6,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c25lYWtlcnN8ZW58MHx8MHx8fDA%3D",
                    title: "SNEAKERS",
                    price: "135",
                    id: 7,
                  },
                  {
                    image: "https://images.unsplash.com/photo-1695634237630-f99602661946?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                    title: "METAL BOTTLE",
                    price: "55",
                    id: 8,
                  },
                ];
                dispatch(lol(productArr));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const products = useSelector((state) => state.data.api);
    const fa=useSelector((state) => state.data.fa)
 
    
    return (
      <div className="App ">
        {products && products.length > 0 ? (
          <div className=" flex  gap-[50px] items-center justify-center text-center flex-wrap">
            {products.map((product) => (
              <div className="w-[300px] h-[300px]" key={product.id}>
                <Link to={`/product/${product.id}`}>
                  <img
                    className="w-full rounded-md h-[200px]"
                    src={product.image}
                    alt={product.title}
                  />
                  <h2>{product.title}</h2>
                </Link>
                <button
                  onClick={() =>
                    fa.some((pro) => pro.id == product.id)
                      ? dispatch(r(product.id))
                      : dispatch(f(product))
                  }
                  className="p-2 my-3  bg-white text-black mix-blend-difference  rounded-lg">
                  {fa.some((pro) => pro.id == product.id)
                    ? "remove"
                    : "Add to cart"}
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div>Something went wrong!</div>
        )}
      </div>
    );
};

export default Home;