/* eslint-disable @next/next/no-img-element */
"use client";
import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Snackbar,
  SnackbarContent,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { X_API_Key } from "../URL's/Api_X_Key";
import { Base_URL } from "../URL's/Base_URL";

const PROMO_SUFFIX = "-30";

const CartCard = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [promoInput, setPromoInput] = useState(`MEGASALE${PROMO_SUFFIX}`); // Input field for promo code
  const [promoCode, setPromoCode] = useState(`MEGASALE${PROMO_SUFFIX}`);
  const [apiPromoCode, setApiPromoCode] = useState(`MEGASALE${PROMO_SUFFIX}`);
  const [errors, setErrors] = useState({});
  const [cartResponse, setCartResponse] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [redirectingMessage, setRedirectingMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarBgColor, setSnackbarBgColor] = useState("");
  const searchParams = useSearchParams();
  const queryEmail = searchParams.get("referralCode");

  useEffect(() => {
    async function fetchIp() {
      const response = await fetch("/api/get-client-ip");
      const data = await response.json();
      setIpAddress(data.ip);
    }
    fetchIp();
  }, []);

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "This field is required";
    tempErrors.email = email ? "" : "This field is required";
    tempErrors.acceptedTerms = acceptedTerms ? "" : "You must accept the terms";
    setErrors(tempErrors);

    if (!fullName || !email || !acceptedTerms) {
      let message;
      if (!fullName) message = "Name is required";
      else if (!email) message = "Email is required";
      else message = "You must accept the terms";
      setSnackbarMessage(message);
      setSnackbarBgColor("red");
      setSnackbarOpen(true);
      return false;
    }
    return true;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case "fullName":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "acceptedTerms":
        setAcceptedTerms(event.target.checked);
        break;
      default:
        break;
    }
  };

  const handlePromoInputChange = (e) => {
    setPromoInput(e.target.value); // Update promo input field
  };

  const handlePromoSubmit = (event) => {
    event.preventDefault();
    const appliedPromoCode = promoInput
      ? `${promoInput}${PROMO_SUFFIX}`
      : promoCode; // Use promoInput if provided, otherwise use default

    if (cartResponse.length > 0) {
      axios
        .post(
          `${Base_URL}/v1/update-cart`,
          {
            coupon: appliedPromoCode,
            cart_items: cartResponse.map((item) => item.cart),
          },
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        )
        .then((response) => {
          if (
            response.data &&
            response.data.length > 0 &&
            response.data[0].exam_code
          ) {
            setCartResponse(response.data); // Update cart if coupon is valid
            setApiPromoCode(appliedPromoCode);
            setSnackbarMessage("Coupon Applied Successfully!");
            setSnackbarBgColor("green");
            setSnackbarOpen(true);
            setErrorMessage("");
          } else {
            // Show error if coupon is invalid
            setErrorMessage("Invalid Coupon Code.");
            setSnackbarMessage("Invalid Coupon Code.");
            setSnackbarBgColor("red");
            setSnackbarOpen(true);
          }
        })
        .catch((error) => {
          console.error("Error updating cart with promo code:", error);
          setErrorMessage("Invalid Promo Code");
          setSnackbarMessage("Invalid Coupon Code.");
          setSnackbarBgColor("red");
          setSnackbarOpen(true);
        });
    }
  };

  const handleCheckout = async () => {
    if (!validate()) return;
    setLoading(true);
    setRedirectingMessage(
      "We are redirecting to you on Prepwise for payment..."
    );
    setSnackbarMessage("We are redirecting to you on Prepwise for payment...");
    setSnackbarBgColor("green");
    setSnackbarOpen(true);
    setTimeout(async () => {
      try {
        const response = await axios.post(
          `${Base_URL}/v1/payment`,
          {
            name: fullName,
            email: email,
            ip: ipAddress,
            coupon: apiPromoCode,
            IsInvoice: false,
            invoice_perma: "",
            cart_items: cartResponse.map((item) => item.cart),
          },
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        );

        if (response.data.success) {
          window.location.href = response.data.redirect_link;
        } else {
          setErrorMessage("Payment processing failed. Please try again.");
          setSnackbarMessage("Payment processing failed. Please try again.");
          setSnackbarBgColor("red");
          setSnackbarOpen(true);
          setLoading(false);
        }
      } catch (error) {
        console.error("Error during checkout:", error);
        setErrorMessage("An error occurred. Please try again.");
        setSnackbarMessage("An error occurred. Please try again.");
        setSnackbarBgColor("red");
        setSnackbarOpen(true);
        setLoading(false);
      }
    }, 2000); // 2 seconds delay
  };

  const calculateTotals = () => {
    const subtotal = cartResponse.reduce(
      (acc, item) => acc + parseFloat(item.full_price),
      0
    );
    const discount = cartResponse.reduce(
      (acc, item) =>
        acc + (parseFloat(item.full_price) - parseFloat(item.price)),
      0
    );
    const total = cartResponse.reduce(
      (acc, item) => acc + parseFloat(item.price),
      0
    );
    return { subtotal, discount, total };
  };

  const totals = calculateTotals();

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const storedCartResponse = localStorage.getItem("CartProducts");
      if (storedCartResponse) {
        const cartProducts = JSON.parse(storedCartResponse);
        setCartResponse(cartProducts);
        const saveExamItems = cartProducts.filter((item) => item.cart);
        if (saveExamItems.length > 0) {
          axios
            .post(
              `${Base_URL}/v1/update-cart`,
              {
                coupon: promoCode,
                cart_items: saveExamItems.map((item) => item.cart),
              },
              {
                headers: {
                  "x-api-key": X_API_Key,
                },
              }
            )
            .then((response) => {
              setCartResponse(response.data);
            })
            .catch((error) => {
              console.error("Error updating cart:", error);
            });
        }
      }
    }
  }, [promoCode]);

  const handleRemoveData = () => {
    localStorage.removeItem("CartProducts");
    window.location.reload();
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const handleRemoveItem = (itemToRemove) => {
    const itemPrefix = itemToRemove.cart.split("_").slice(0, 2).join("_") + "_";
    const updatedCartResponse = cartResponse.filter(
      (item) => !item.cart.startsWith(itemPrefix)
    );
    setCartResponse(updatedCartResponse);

    if (typeof localStorage !== "undefined") {
      const storedCartResponse = localStorage.getItem("CartProducts");
      if (storedCartResponse) {
        const cartProducts = JSON.parse(storedCartResponse);
        const updatedCartProducts = cartProducts.filter(
          (item) => !item.cart.startsWith(itemPrefix)
        );
        localStorage.setItem(
          "CartProducts",
          JSON.stringify(updatedCartProducts)
        );
      }
    }
  };

  return (
    <section className="lg:py-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4">
        <div className="p-8 lg:px-16 bg-white shadow-2xl">
          <h2 className="mb-12 border-b pb-5 text-4xl font-bold text-gray-600 font-heading">
            Shopping Cart
          </h2>
          <div className="mb-4 pb-4 border-b">
            <div className="flex mb-8 flex-wrap items-center justify-between">
              {cartResponse.length > 0 ? (
                cartResponse.map((item) => (
                  <div
                    key={item.cart}
                    className="w-full mb-8 xl:mb-0 lg:flex justify-between items-center"
                  >
                    <div className="flex">
                      <div className="lg:inline-flex hidden items-center justify-center h-32 mb-4 lg:mb-0">
                        <img
                          className="h-full object-contain"
                          src={`/product2.png`}
                          alt={item.exam_vendor_title}
                        />
                      </div>
                      <div className="w-full flex flex-col justify-center md:w-auto md:pl-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                        <div>
                          <h3 className="mb-2 text-xl font-bold font-heading">
                            {item.exam_code} - {item.exam_title}
                          </h3>
                          <p className="mb-3 text-gray-500">{item.title}</p>
                          <span className="text-lg font-bold font-heading text-blue-400">
                            ${item.price} /
                          </span>
                          <span className="text-sm font-semibold font-heading text-red-400 line-through">
                            ${item.full_price}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="w-full lg:w-auto flex flex-wrap justify-end items-center">
                      <div className="w-full flex justify-end md:w-1/3">
                        <a
                          className="inline-block  px-3 py-2 text-white font-semibold  bg-red-500 hover:bg-red-600 rounded-md"
                          href="#"
                          onClick={() => handleRemoveItem(item)}
                        >
                          Remove
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items in the cart.</p>
              )}
            </div>
          </div>

          <div className="mb-10">
            <div className="py-2 border-b mb-4 border-dashed">
              <h6 className="mb-4 text-lg font-semibold text-gray-700">
                Enter Your Details
              </h6>
              <Grid container spacing={2} className="mb-4 text-gray-700">
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    name="fullName"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 text-gray-700 bg-gray-50 outline-none focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <input
                    type="text"
                    name="email"
                    className="py-3 px-4 w-full text-sm placeholder-gray-500 text-gray-700 bg-gray-50 outline-none focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                    placeholder="Email"
                    value={email}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>

              <h6 className="mb-4 text-lg font-semibold text-gray-700">
                Discount Code
              </h6>
              <form onSubmit={handlePromoSubmit}>
                <div className="flex flex-wrap items-center text-gray-700 -m-2 mb-0.5">
                  <div className="w-full lg:flex-1 p-2">
                    <input
                      type="text"
                      name="voucher"
                      className="py-3 px-4 w-full text-sm placeholder-gray-500 bg-gray-50 outline-none focus:ring focus:ring-gray-100 border-gray-100 rounded-lg transition duration-200"
                      placeholder="Enter your voucher"
                      value={promoInput.replace(PROMO_SUFFIX, "")}
                      onChange={handlePromoInputChange}
                    />
                  </div>
                  <div className="w-full lg:w-auto p-2">
                    <button
                      type="submit"
                      className="py-3 px-7 w-full text-sm text-white font-semibold bg-gray-900 hover:bg-gray-800 focus:bg-gray-900 rounded-5xl focus:ring-4 focus:ring-gray-200 transition duration-300"
                    >
                      Apply
                    </button>
                  </div>
                </div>
                <p className="text-sm pl-2 font-semibold text-green-600">
                  Coupon{" "}
                  <span className="text-red-500 font-bold">
                    &apos;{apiPromoCode.slice(0, -3)}&apos;
                  </span>{" "}
                  is Applied Successfully.
                </p>
              </form>

              <div className="mx-2">
                <div className="text-gray-700">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={acceptedTerms}
                        onChange={handleChange}
                        name="acceptedTerms"
                        color="primary"
                      />
                    }
                    label={
                      <Typography>
                        I agree to the{" "}
                        <Link
                          className="text-blue-400"
                          href="/terms-and-conditions"
                        >
                          terms and conditions
                        </Link>
                      </Typography>
                    }
                  />
                </div>
              </div>
            </div>

            <div className="py-3 px-10 bg-gray-100 text-gray-700 rounded-full">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal</span>
                <span className="font-bold text-red-500 font-heading">
                  ${totals.subtotal.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="py-3 px-10 rounded-full text-gray-700">
              <div className="flex justify-between">
                <span className="font-medium">Discount</span>
                <span className="font-bold text-green-500 font-heading">
                  ${totals.discount.toFixed(2)}
                </span>
              </div>
            </div>
            <div className="py-3 px-10 bg-gray-100 text-gray-700 rounded-full">
              <div className="flex justify-between">
                <span className="font-medium">Off</span>
                <span className="font-bold text-green-500 font-heading">
                  {" "}
                  %{cartResponse[0]?.off}.00
                </span>
              </div>
            </div>
            <div className="py-3 px-10 rounded-full text-gray-700">
              <div className="flex justify-between">
                <span className="text-base md:text-xl font-bold font-heading">
                  Order Total
                </span>
                <span className="font-bold text-indigo-500  text-xl font-heading">
                  ${totals.total.toFixed(2)}
                </span>
              </div>
            </div>
          </div>

          <div className="text-right">
            <Link
              className="inline-block text-gray-700 mb-4 md:mb-0 mr-6 w-full md:w-auto px-8 py-4 bg-gray-100 hover:bg-gray-200 text-center font-bold font-heading uppercase rounded-md transition duration-200"
              href="/"
            >
              Continue Shopping
            </Link>
            <button
              className="inline-block  w-full md:w-auto px-8 py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
              href="#"
              onClick={handleCheckout}
            >
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <SnackbarContent
          style={{
            backgroundColor:
              snackbarBgColor === "green" ? "#4caf50" : "#f44336",
          }}
          message={snackbarMessage}
        />
      </Snackbar>
    </section>
  );
};

export default CartCard;
