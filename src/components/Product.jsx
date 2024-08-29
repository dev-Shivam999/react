import React from "react";
import { useDispatch,useSelector } from "react-redux";
import { useParams } from "react-router";
import { f, r } from "../stroe/data";

const Product = () => {
  const { id } = useParams();
    const fa = useSelector((state) => state.data.fa);
  const products = useSelector((state) => state.data.api);

    const dispatch = useDispatch();
  const info = products.find((product) => product.id == id);

  return (
    <div className="flex justify-center">
      {info ? (
        <div className="w-[300px] h-[300px]">
          <img className="w-full h-[200px]" src={info.image} alt={info.title} />
          <h2>{info.title}</h2>
          <button
            onClick={() =>
              fa.some((pro) => pro.id == info.id)
                ? dispatch(r(info.id))
                : dispatch(f(info))
            }
            className="p-2 my-3 bg-white text-black mix-blend-difference">
            {fa.some((pro) => pro.id == info.id) ? "remove" : "Add to cart"}
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default Product;
