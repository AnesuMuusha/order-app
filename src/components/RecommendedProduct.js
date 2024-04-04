import React from "react";

const RecommendedProduct = ({ recommendedProduct }) => {
  return (
    <div>
      <img src={recommendedProduct.imageUrl} alt="recommended product" className="m-2 h-24 w-28 rounded-md border object-cover object-center"
        />
      <p>{recommendedProduct.name}</p>
      <p>
        {recommendedProduct.price.currency} {recommendedProduct.price.amount}
      </p>
    </div>
  );
};

export default RecommendedProduct;