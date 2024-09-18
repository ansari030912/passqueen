"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import { Alert, Snackbar } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const UpdateProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));
    setUser(loginResponse);
    if (loginResponse?.name) {
      setFormData((prevData) => ({
        ...prevData,
        name: loginResponse.name,
      }));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors({}); // Reset errors

    // Validate password
    if (!validatePassword(formData.password)) {
      setErrors({
        password:
          "Password must have 8 characters, including 1 uppercase, 1 lowercase, 1 number, and 1 special character",
      });
      return;
    }

    // Check if password and confirm password match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${Base_URL}/v1/account/update-profile`,
        {
          name: formData.name,
          password: formData.password,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
            Authorization: `Bearer ${user?._token}`,
          },
        }
      );

      if (response.data === true) {
        setSnackbarMessage("Password changed successfully!");
        setSnackbarSeverity("success");
        // Clear the password fields
        setFormData({ ...formData, password: "", confirmPassword: "" });
      } else {
        setSnackbarMessage("Error: Could not update the password.");
        setSnackbarSeverity("error");
      }
      setOpenSnackbar(true);
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("Something went wrong. Please try again later.");
      setSnackbarSeverity("error");
      setOpenSnackbar(true);
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-full lg:w-1/2 px-4 mb-16 mt-16 lg:mb-0">
            <div className="mb-8 p-12 max-w-xl mx-auto border-2 border-gray-50 shadow-2xl bg-white rounded-4xl">
              <h2 className="text-4xl text-gray-700 text-center font-semibold leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                  Update Profile
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
                    id="nameInput"
                    type="text"
                    name="name"
                    value={formData.name}
                    disabled
                  />
                </label>
                <label className="block mb-4">
                  <p className="mb-2 text-gray-600 font-semibold leading-normal">
                    Password
                  </p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                    id="passwordInput"
                    type="password"
                    name="password"
                    placeholder="********"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password}</p>
                  )}
                </label>
                <label className="block mb-4">
                  <p className="mb-2 text-gray-600 font-semibold leading-normal">
                    Confirm Password
                  </p>
                  <input
                    className="px-4 py-3.5 w-full text-gray-400 font-medium placeholder-gray-400 bg-transparent outline-none border border-gray-200 rounded-lg focus:ring focus:ring-indigo-300"
                    id="confirmPasswordInput"
                    type="password"
                    name="confirmPassword"
                    placeholder="********"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  {errors.confirmPassword && (
                    <p className="text-red-600">{errors.confirmPassword}</p>
                  )}
                </label>
                <button
                  className="py-4 w-full text-white font-semibold bg-indigo-500 opacity-90 px-3 rounded-lg shadow-lg border-indigo-400 focus:ring focus:ring-indigo-300 hover:bg-indigo-600 transition ease-in-out duration-200"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? "Updating..." : "Update Profile"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProfileForm;
