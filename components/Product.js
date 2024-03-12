"use client";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Link from "next/link";

export default function Product() {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.CartSlice);
  console.log("Carts", cart);
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // console.log("Products", products);

  const handleAddToCart = (item) => {
    console.log("Cart inside", cart);

    let cartIndex = cart.findIndex((element) => element.id === item.id);
    if (cartIndex === -1) {
      let temp = { ...item, count: 1 };
      let newCart = { ...cart, temp };

      dispatch({ type: "Cart/SET_CART", payload: newCart });
    } else {
      let newCount = cart[cartIndex].count + 1;
      let newCart = JSON.parse(JSON.stringify(cart));
      newCart[cartIndex].count = newCount;
      dispatch({ type: "Cart/SET_CART", payload: newCart });
    }
  };
  // const getItemCount = (item) => {
  //   const cartItem = cart.findIndex((cartItem) => cartItem.id === item.id);
  //   return cartItem ? cartItem.count : 0;
  // };

  const getItemCount = (item) => {
    // console.log('cart', cart);

    let cartIndex = cart.findIndex((element) => element.id === item.id);
    if (cartIndex !== -1) {
      return cart[cartIndex].count;
    }
  };

  const handleRemoveFromCart = (item) => {
    let cartIndex = cart.findIndex((element) => element.id === item.id);
    if (cartIndex !== -1) {
      let newCart = JSON.parse(JSON.stringify(cart));
      if (cart[cartIndex].count > 1) {
        let newCount = cart[cartIndex].count - 1;
        newCart[cartIndex].count = newCount;
      } else {
        newCart.splice(cartIndex, 1);
      }
      dispatch({ type: "Cart/SET_CART", payload: newCart });
    }
  };

  return (
    <div className="container container-fluid d-flex justify-content-center align-items-center col-md-12 ">
      <div className="container row">
        {products.length ? (
          products.map((item) => {
            return (
              <div
                className="container card my-2"
                style={{ width: "18rem" }}
                key={item?.id}
              >
                <img
                  src={item?.image}
                  className="container card-img-top my-3"
                  style={{ width: "10rem" }}
                  title={item?.title}
                  alt={item?.title}
                />
                <div className="card-body">
                  <h5 className="card-title">{item?.title}</h5>
                  <p className="card-text">{item?.description}</p>
                  <p className="card-text">Price : &#8377; {item?.price}</p>
                  <button
                    className="btn btn-primary"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add To Cart : {getItemCount(item)}
                  </button>
                  <button
                    className="btn btn-danger my-2"
                    onClick={() => handleRemoveFromCart(item)}
                  >
                    Remove Cart : {getItemCount(item)}
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className="d-flex justify-content-center align-items-center text-danger">
            No Products to Display
          </h1>
        )}
      </div>
    </div>
  );
}

{
  /*import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";

export default function Product() {
  let dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartSlice);
  const [products, setProducts] = useState([]);
  const fetchData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAddToCart = (item) => {
    let cartIndex = cart.findIndex((element) => element.id === item.id);
    if (cartIndex === -1) {
      let temp = { ...item, count: 1 };
      let newCart = { ...cart, temp };

      dispatch({ type: "Cart/SET_CART", payload: newCart });
    } else {
      let newCount = cart[cartIndex].count + 1;
      let newCart = JSON.parse(JSON.stringify(cart));
      newCart[cartIndex].count = newCount;
      dispatch({ type: "Cart/SET_CART", payload: newCart });
    }
  };
  const getItemCount = (item) => {
    let cartIndex = cart.findIndex((element) => element.id === item.id);
    if (cartIndex !== -1) {
      return cart[cartIndex].count;
    }
  };

  // const getItemCount = (item) => {
  //   // Check if cart is defined and initialized
  //   if (cart && Array.isArray(cart)) {
  //     let cartIndex = cart.findIndex((element) => element.id === item.id);
  //     if (cartIndex !== -1) {
  //       return cart[cartIndex].count;
  //     }
  //   } else {
  //     console.error("Cart is not properly initialized or is not an array.");
  //   }
  //   // Return a default value if item is not found or cart is not properly initialized
  //   return 0;
  // };

  // const handleRemoveFromCart = (item) => {
  //   dispatch({ type: "Cart/SET_CART", payload: cart - 1 });
  // };

  return (
    <div className="container container-fluid d-flex justify-content-center align-items-center col-md-12 ">
      <div className="container row">
        {" "}
        {products.length ? (
          products.map((item) => (
            <div
              className=" container card my-2 "
              style={{ width: "18rem" }}
              key={item?.id}
            >
              <img
                src={item?.image}
                className="container card-img-top my-3"
                style={{ width: "10rem" }}
                title={item?.title}
                alt={item?.title}
              />
              <div className="card-body">
                <h5 className="card-title">{item?.title}</h5>
                <p className="card-text">{item?.description}</p>
                <p className="card-text">
                  Price : &#8377;
                  {item?.price}
                </p>
                <Link
                  href="#"
                  className="btn btn-primary"
                  onClick={() => {
                    handleAddToCart(item);
                  }}
                >
                  Add To Cart : {getItemCount(item)}
                </Link>
                <Link
                  href="#"
                  className="btn btn-primary my-3"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove from Cart :
                </Link>
              </div>
            </div>
          ))
        ) : (
          <h1 className="d-flex justify-content-center align-items-center text-danger">
            No Products to Display
          </h1>
        )}
      </div>
    </div>
  );
}*/
}
