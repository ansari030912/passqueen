"use client";
import { Icon } from "@iconify/react";
import { Snackbar, SnackbarContent } from "@mui/material";
import { useState } from "react";

const VideoExamAddToCart = ({ data }) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleBoxClick = (item) => {
    console.log("🚀 ~ handleBoxClick ~ item:", item);
    // Retrieve the existing cart data from local storage
    const existingCartData =
      JSON.parse(localStorage.getItem("CartProducts")) || [];

    // Check if the item is already in the cart
    const isItemInCart = existingCartData.some(
      (cartItem) => cartItem.cart === data.cart
    );

    if (!isItemInCart) {
      // If the item is not already in the cart, add it
      const cartData = {
        cart: data.cart,
        saveExam: true,
      };

      existingCartData.push(cartData);

      // Save the updated array back to local storage
      localStorage.setItem("CartProducts", JSON.stringify(existingCartData));

      // Open the snackbar to show a success message
      setSnackbarMessage("Product added to cart!");
      setSnackbarOpen(true);

      // Reload the page
      window.location.reload();
    } else {
      // Display an error message that the item is already in the cart
      setSnackbarMessage("Item already in the cart");
      setSnackbarOpen(true);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor:
              snackbarMessage === "Product added to cart!" ? "green" : "red",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon={
                  snackbarMessage === "Product added to cart!"
                    ? "mdi:cart-outline"
                    : "mdi:alert-circle-outline"
                }
                width="1.6em"
                height="1.4em"
                style={{ color: "white", marginRight: "2px" }}
              />
              {snackbarMessage}
            </span>
          }
        />
      </Snackbar>
      <button
        onClick={handleBoxClick}
        className="mt-10 block rounded-md bg-indigo-500 bg-opacity-90 w-full px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add to cart
      </button>
    </>
  );
};

export default VideoExamAddToCart;
