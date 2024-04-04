import React from "react";

const Product = ({ product }) => {
  return (
    <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
      <div class="flex flex-col rounded-lg bg-white sm:flex-row">
        <img
          src={product.imageUrl}
          alt="product"
          className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        />
        <div class="flex w-full flex-col px-4 py-4">
          <span class="font-semibold">{product.name}</span>
          <p class="text-md font-semibold mb-4">
            {product.quantity} X {product.price.currency} {product.price.amount}
          </p>
          <p class="text-lg font-bold">
            {product.total.currency} {product.total.amount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
