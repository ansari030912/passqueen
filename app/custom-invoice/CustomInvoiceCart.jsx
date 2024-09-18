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
import { useEffect, useState } from "react";
import { Base_URL } from "../URL's/Base_URL";
import { X_API_Key } from "../URL's/Api_X_Key";

const CustomInvoiceCart = ({ params }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [redirectingMessage, setRedirectingMessage] = useState("");
  const [ipAddress, setIpAddress] = useState("");
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [cartResponse, setCartResponse] = useState([]);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarBgColor, setSnackbarBgColor] = useState("");
  const [totals, setTotals] = useState({
    subtotal: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    async function fetchIp() {
      try {
        const response = await fetch("/api/get-client-ip");
        const data = await response.json();
        setIpAddress(data.ip);
      } catch (error) {
        console.error("Error fetching IP address:", error);
      }
    }
    fetchIp();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          `${Base_URL}/v1/invoice/${params.invoice_perma}`,
          {
            headers: {
              "x-api-key": X_API_Key,
            },
          }
        );
        const invoiceData = response.data;
        setData(invoiceData);
        setCartResponse(invoiceData.invoice_items || []);
        setTotals({
          subtotal: parseFloat(invoiceData.invoice_sub_total),
          discount: parseFloat(invoiceData.invoice_discount),
          total: parseFloat(invoiceData.invoice_total),
        });
      } catch (error) {
        setErrorMessage("Invoice Expired or Not Available At The Moment...");
        setSnackbarMessage("Error fetching invoice data.");
        setSnackbarBgColor("red");
        setSnackbarOpen(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [params.invoice_perma]);

  const validate = () => {
    let tempErrors = {};
    tempErrors.fullName = fullName ? "" : "This field is required";
    tempErrors.email = email ? "" : "This field is required";
    tempErrors.acceptedTerms = acceptedTerms
      ? ""
      : "You must accept the terms.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every((x) => x === "");
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

  const handleCheckout = async () => {
    if (!validate()) {
      setErrorMessage("Please fill in all fields and accept the terms.");
      setSnackbarMessage("Please complete all fields and accept terms.");
      setSnackbarBgColor("red");
      setSnackbarOpen(true);
      return;
    }

    setLoading(true);
    setRedirectingMessage("We are Redirecting you for Payment on PREPWISE...");
    setSnackbarMessage("We are Redirecting you for Payment on PREPWISE...");
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
            coupon: "", // Send empty coupon code as per the request
            IsInvoice: true,
            invoice_perma: data.invoice_perma,
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
          setErrorMessage("Payment Redirecting failed. Please try again.");
          setSnackbarMessage("Payment Redirecting failed. Please try again.");
          setSnackbarBgColor("red");
          setSnackbarOpen(true);
          setLoading(false);
        }
      } catch (error) {
        setErrorMessage("An error occurred. Please try again.");
        setSnackbarMessage("An error occurred during payment.");
        setSnackbarBgColor("red");
        setSnackbarOpen(true);
        setLoading(false);
      }
    }, 2000);
  };

  const handleRemoveItem = (item) => {
    const updatedCart = cartResponse.filter(
      (cartItem) => cartItem.cart !== item.cart
    );
    setCartResponse(updatedCart);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
    setSnackbarMessage("");
  };

  return (
    <section className="lg:py-12 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      {cartResponse.length > 0 ? (
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
                            alt={item.title}
                          />
                        </div>
                        <div className="w-full flex flex-col justify-center md:w-auto md:pl-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                          <div>
                            <h3 className="mb-2 text-xl font-bold font-heading">
                              {item.title} - {item.sub_title}
                            </h3>
                            <span className="text-lg font-bold font-heading text-blue-400">
                              ${item.price} /
                            </span>
                            <span className="text-sm font-semibold font-heading text-red-400 line-through">
                              ${item.full_price}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No items in the cart.</p>
                )}
              </div>
            </div>

            {/* User Details */}
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
                  <span className="font-medium text-xl">Order Total</span>
                  <span className="font-bold text-indigo-500 font-heading text-xl">
                    ${totals.total.toFixed(2)}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right">
              <button
                className="inline-block w-full md:w-auto px-8 py-4 bg-orange-300 hover:bg-orange-400 text-center text-white font-bold font-heading uppercase rounded-md transition duration-200"
                onClick={handleCheckout}
              >
                Go to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div
          style={{ height: "40vh" }}
          className="flex flex-col justify-center"
        >
          <Box
            className="rounded-lg p-10"
            sx={{ padding: "20px", textAlign: "center" }}
          >
            <Typography className="text-gray-600 text-4xl" fontWeight={"bold"}>
              Cart is Empty
            </Typography>

            <Typography className="text-red-500 text-2xl" fontWeight={"bold"}>
              Invoice Expired or Not Available At The Moment...
            </Typography>
          </Box>
        </div>
      )}
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

export default CustomInvoiceCart;
