import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Search = ({th}) => {
    const products = useSelector((state) => state.data.fa);
  
    const[one,SetOne]=useState()

    function show(e) {
        
        
        const d= products.filter((i) => i.title.toLocaleLowerCase().includes(e.target.value)
    );
    
    SetOne(d)

    }
    return (
      <div>
        <input
          type="search"
          className={` text-2xl border-2 bg-transparent mix-blend-difference rounded-lg px-3  `}
          placeholder="search..."
          onChange={(e) => show(e)}
        />
        <ul className={`z-10  absolute w-full -left-1/2 translate-x-1/2 text-center ${th? "bg-white text-black":"bg-black text-white" }`}>
          {one &&
            one.length > 0 &&
            one.map((i) => (
              <Link key={i.id} to={`/product/${i.id}`}>
                {i.title}
              </Link>
            ))}
      
        </ul>
      </div>
    );
};

export default Search;