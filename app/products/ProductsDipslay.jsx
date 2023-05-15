"use client";
import React from "react";
import Image from 'next/image';



const fetchProducts = async (token) => {
  try {
    const res = await fetch(`/api/products`, {
      cache: "no-cache",
    });
    const data = await res.json();

    if (!data.success) return [];

    return data.products;
  } catch (error) {
    // console.log(error);
    return [];
  }
};

const ProductsDipslay = async () => {
	const products = await fetchProducts();
	// console.log(products,"products");
	return (
	  <div className="product-lists pt-3 pe-lg-4">
		{products?.map((i) => (
			<div key={i._id} className="product-info d-flex align-items-center justify-content-between selected">
				<div className="ps-0">
					<h3 className="mb-0 font-24 font-montserrat fw-bold">{i.product_name}</h3>
					<h4 className="mb-0 font-18">from $ {i.price}</h4>
				</div>
				<div className="text-end pe-0">
					<button className="sky-blue-button select-box border-0">Select</button>
				</div>
			</div>
		))}
	  </div>
	);
};
  

export default ProductsDipslay;