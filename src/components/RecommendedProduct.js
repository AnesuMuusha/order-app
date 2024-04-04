import React from "react";

const RecommendedProduct = ({ recommendedProduct }) => {
  return (
    
      <div className="flex flex-col px-4 py-6 md:p-6 w-full bg-gray-50 space-y-6 mt-6 items-center">
      
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