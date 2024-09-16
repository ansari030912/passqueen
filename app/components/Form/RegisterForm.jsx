"use client";
/* eslint-disable @next/next/no-img-element */
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import IconButton from "@mui/material/IconButton";
import Snackbar from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent"; // Import SnackbarContent for custom styling
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RegisterForm = () => {
  const router = useRouter();
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar visibility
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Message for Snackbar
  const [snackbarType, setSnackbarType] = useState(""); // State for Snackbar type (success or error)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [userRegister, setUserRegister] = useState("");
  const [ip, setIp] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State for password visibility
  const [loading, setLoading] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    async function fetchIp() {
      const response = await fetch("/api/get-client-ip");
      const data = await response.json();
      setIp(data.ip);
    }
    fetchIp();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // Validate name field
    if (!name) {
      setSnackbarMessage("Name field is required.");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Validate email field
    if (!email) {
      setSnackbarMessage("Email field is required.");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      setSnackbarMessage("Invalid email format.");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Validate password field
    if (!password) {
      setSnackbarMessage("Password field is required.");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Validate confirm password field
    if (!confirmPassword) {
      setSnackbarMessage("Confirm Password field is required.");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setSnackbarMessage("Passwords do not match.");
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Validate password strength
    const passwordRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z\d\W]).{8,}$/;
    if (!passwordRegex.test(password)) {
      setSnackbarMessage(
        "Password must contain at least 8 characters, with upper, lower case, and special characters."
      );
      setSnackbarType("error");
      setOpenSnackbar(true);
      setLoading(false);
      return;
    }

    // Proceed with form submission
    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/register`,
        {
          name,
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
      setUserRegister(response.data);

      if (response.data.is_active === true) {
        setSnackbarMessage("Sign Up successful! Redirecting to Sign In...");
        setSnackbarType("success");
        setOpenSnackbar(true);
        setTimeout(() => {
          setName("");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
          router.push("/sign-in");
        }, 2000); // 2 second delay before redirect
      }
    } catch (error) {
      setSnackbarMessage("Error: Registration failed.");
      setSnackbarType("error");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  const handleTogglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <section
      className="bg-cover py-20 bg-no-repeat"
      style={{ backgroundImage: "url(/light-orange-blue-1.png)" }}
    >
      <div className="relative z-10 container px-4 mx-auto">
        <div className="mb-8 p-12 max-w-xl mx-auto border-2 border-gray-50 shadow-2xl bg-white rounded-4xl">
          <h2 className="text-4xl text-gray-700 text-center font-semibold leading-tight">
            Sign Up to{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              PassQueen
            </span>
          </h2>
          <hr className="mb-2 my-7 border-2 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400" />
          <br />
          <form onSubmit={handleSubmit}>
            <label className="block mb-4">
              <p className="mb-2 text-gray-600 font-semibold leading-normal">
                Name
              </p>
              <input
                className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <p className="mb-2 text-gray-600 font-semibold leading-normal">
                Email Address
              </p>
              <input
                className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>

            <label className="block mb-4">
              <p className="mb-2 text-gray-600 font-semibold leading-normal">
                Password
              </p>
              <div className="relative">
                <input
                  className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                  type={showPassword ? "text" : "password"}
                  placeholder="********"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  onClick={handleTogglePasswordVisibility}
                  className="absolute top-2 right-2"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 256 256"
                    >
                      <rect width="256" height="256" fill="none" />
                      <path
                        fill="currentColor"
                        d="M247.31 124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57 61.26 162.88 48 128 48S61.43 61.26 36.34 86.35C17.51 105.18 9 124 8.69 124.76a8 8 0 0 0 0 6.5c.35.79 8.82 19.57 27.65 38.4C61.43 194.74 93.12 208 128 208s66.57-13.26 91.66-38.34c18.83-18.83 27.3-37.61 27.65-38.4a8 8 0 0 0 0-6.5M128 192c-30.78 0-57.67-11.19-79.93-33.25A133.5 133.5 0 0 1 25 128a133.3 133.3 0 0 1 23.07-30.75C70.33 75.19 97.22 64 128 64s57.67 11.19 79.93 33.25A133.5 133.5 0 0 1 231.05 128c-7.21 13.46-38.62 64-103.05 64m0-112a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <rect width="24" height="24" fill="none" />
                      <path
                        fill="currentColor"
                        d="M2 5.27L3.28 4L20 20.72L18.73 22l-3.08-3.08c-1.15.38-2.37.58-3.65.58c-5 0-9.27-3.11-11-7.5c.69-1.76 1.79-3.31 3.19-4.54zM12 9a3 3 0 0 1 3 3a3 3 0 0 1-.17 1L11 9.17A3 3 0 0 1 12 9m0-4.5c5 0 9.27 3.11 11 7.5a11.8 11.8 0 0 1-4 5.19l-1.42-1.43A9.86 9.86 0 0 0 20.82 12A9.82 9.82 0 0 0 12 6.5c-1.09 0-2.16.18-3.16.5L7.3 5.47c1.44-.62 3.03-.97 4.7-.97M3.18 12A9.82 9.82 0 0 0 12 17.5c.69 0 1.37-.07 2-.21L11.72 15A3.064 3.064 0 0 1 9 12.28L5.6 8.87c-.99.85-1.82 1.91-2.42 3.13"
                      />
                    </svg>
                  )}
                </IconButton>
              </div>
            </label>

            <label className="block mb-4">
              <p className="mb-2 text-gray-600 font-semibold leading-normal">
                Confirm Password
              </p>
              <input
                className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                type={showPassword ? "text" : "password"}
                placeholder="********"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>
        </div>
        <p className="text-gray-600 text-center font-medium">
          <span>Don’t have an account?</span>{" "}
          <Link
            className="text-indigo-600 hover:text-indigo-700"
            href="/register"
          >
            Create free account
          </Link>
        </p>
      </div>

      {/* Snackbar for validation and success messages */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
      >
        <SnackbarContent
          message={snackbarMessage}
          sx={{
            backgroundColor: snackbarType === "success" ? "green" : "red",
            color: "white",
          }}
        />
      </Snackbar>
    </section>
  );
};

export default RegisterForm;
