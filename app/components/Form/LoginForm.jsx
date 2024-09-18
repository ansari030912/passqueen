"use client";
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState, useEffect } from "react";
import axios from "axios"; // Assuming axios is used
import { useRouter } from "next/navigation";
import { Base_URL } from "@/app/URL's/Base_URL";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const LoginForm = () => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [ip, setIp] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchIp() {
      const response = await fetch("/api/get-client-ip");
      const data = await response.json();
      setIp(data.ip);
    }
    fetchIp();
  }, []);

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters long");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/login`,
        {
          email,
          password,
          ip,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );
      setIsLogin(response.data);

      if (response.data.is_logged_in) {
        setSnackbarMessage("Login successful!");
        setOpenSnackbar(true);

        const currentTime = Date.now();
        const twoHoursInMillis = 2 * 60 * 60 * 1000;
        const expiryTime = currentTime + twoHoursInMillis;

        if (typeof localStorage !== "undefined") {
          localStorage.setItem(
            "loginResponse",
            JSON.stringify({ ...response.data, expiryTime })
          );
        } else {
          console.error("localStorage is not available.");
        }
        window.location.reload();
      } else {
        setSnackbarMessage(response.data.message || "Login failed.");
        setOpenSnackbar(true);
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("Something went wrong. Please try again later.");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  if (isLogin?.is_logged_in && ip === "") {
    return null;
  } else if (!isLogin?.is_logged_in && ip != "") {
    return (
      <section
        className="bg-cover py-20 bg-no-repeat"
        style={{ backgroundImage: "url(/light-orange-blue-1.png)" }}
      >
        <div className="relative z-10 container px-4 mx-auto">
          <div className="mb-8 p-12 max-w-xl mx-auto border-2 border-gray-50 shadow-2xl bg-white rounded-4xl">
            <h2 className="text-4xl text-gray-700 text-center font-semibold leading-tight">
              Sign In to{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                PassQueen
              </span>
            </h2>
            <hr className="mb-2 my-7 border-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" />
            <br />
            <form onSubmit={handleSubmit}>
              <label className="block mb-4">
                <p className="mb-2 text-gray-600 font-semibold leading-normal">
                  Email Address
                </p>
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                  id="signInInput4-1"
                  type="email"
                  placeholder="Enter email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && <p className="text-red-600">{emailError}</p>}
              </label>
              <label className="block mb-4">
                <p className="mb-2 text-gray-600 font-semibold leading-normal">
                  Password
                </p>
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                  id="signInInput4-2"
                  type="password"
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <p className="text-red-600">{passwordError}</p>
                )}
              </label>
              <div className="flex flex-wrap justify-end -m-2 mb-2">
                <div className="w-auto p-2">
                  <a
                    className="text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                    href="#"
                  >
                    Forgot Password?
                  </a>
                </div>
              </div>
              <button
                className="py-4 w-full text-white font-semibold bg-indigo-500 opacity-90 px-3 rounded-lg shadow-lg border-indigo-400 focus:ring focus:ring-indigo-300 hover:bg-indigo-600 transition ease-in-out duration-200"
                type="submit"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>
          </div>
          <p className="text-gray-600 text-center font-medium">
            <span>Don’t have an account?</span>{" "}
            <Link className="text-indigo-600 hover:text-indigo-700" href="/sign-up">
              Create free account
            </Link>
          </p>
        </div>

        {/* Snackbar for error messages */}
        <Snackbar
          open={openSnackbar}
          autoHideDuration={6000}
          onClose={handleSnackbarClose}
        >
          <Alert onClose={handleSnackbarClose} severity="error">
            {snackbarMessage}
          </Alert>
        </Snackbar>
      </section>
    );
  }
};

export default LoginForm;
