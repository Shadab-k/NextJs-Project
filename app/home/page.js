import Navbar from "@/components/Navbar";
import React  from "react";
import Product from "@/components/Product";

const page = () => {
  
  return (
    <>
      <Navbar />
      <div>
        <h1 className=" my-5 text-center">Welcome to Apna Shop</h1>
        <Product/>
      </div>
    </>
  );
};

export default page;
