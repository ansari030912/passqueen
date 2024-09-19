/* eslint-disable @next/next/no-img-element */
"use client";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

const DemoDownload = ({ examData }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [showDownloadButtons, setShowDownloadButtons] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pdfDownloadLink, setPdfDownloadLink] = useState("");
  const [teDownloadLink, setTeDownloadLink] = useState("");

  const handleDialogClose = () => {
    setDialogOpen(false);
    setEmail("");
    setEmailError("");
    setShowDownloadButtons(false);
  };

  const handleGetDemoDownloads = async () => {
    if (!email) {
      setEmailError("Email is required");
      return;
    }

    // Basic email pattern matching
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    try {
      const response = await axios.post(
        `${Base_URL}/v1/demo`,
        {
          email: email,
          exam_perma: examData?.exam_perma,
        },
        {
          headers: {
            "x-api-key": X_API_Key,
          },
        }
      );

      const demoLinks = response.data;

      const pdfLink = demoLinks.find((link) => link.type === "pdf")?.link;
      const teLink = demoLinks.find((link) => link.type === "te")?.link;

      setEmail("");
      setEmailError("");
      setShowDownloadButtons(true);
      setPdfDownloadLink(pdfLink);
      setTeDownloadLink(teLink);
    } catch (error) {
      console.error("Error fetching demo download links:", error);
    }
  };

  const handleDialogOpen = () => {
    setDialogOpen(true);
  };

  return (
    <>
      <Dialog
        open={dialogOpen}
        onClose={handleDialogClose}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6" component="div" color="purple">
              First Try Then Buy!
            </Typography>
            <IconButton onClick={handleDialogClose}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m0 26C9.4 28 4 22.6 4 16S9.4 4 16 4s12 5.4 12 12s-5.4 12-12 12"
                />
                <path
                  fill="currentColor"
                  d="M21.4 23L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"
                />
              </svg>
            </IconButton>
          </Box>
        </DialogTitle>
        <Divider />
        <DialogContent>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="flex-start"
          >
            <ul
              className="text-sm lg:text-base"
              style={{ listStyleType: "none", padding: 0 }}
            >
              <li>✔ Complimentary Regular Updates</li>
              <li>✔ Validated by Certified IT Professionals</li>
              <li>✔ Immediate Access to Downloads</li>
              <li>✔ Current and Comprehensive Study Guides</li>
              <li>✔ 99.5% Proven Success Rate</li>
              <li>✔ Completely Accurate Answer Key</li>
            </ul>

            <img
              className="hidden lg:inline-flex"
              src="/product2.png" // Replace with actual image URL or import
              alt="Product"
              style={{ maxWidth: "150px", marginRight: "20px" }}
            />
          </Box>
          {!showDownloadButtons ? (
            <TextField
              label="Enter Your Email"
              type="email"
              fullWidth
              variant="outlined"
              margin="normal"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={Boolean(emailError)}
              helperText={emailError}
            />
          ) : (
            <Typography
              variant="subtitle1"
              className="text-center mt-4"
              color="green"
            >
              Download PDF & Test Engine Demo
            </Typography>
          )}
          {!showDownloadButtons ? (
            <Button
              onClick={handleGetDemoDownloads}
              className="bg-indigo-600 rounded-full  hover:bg-indigo-800 focus:ring-4 mb-2 focus:ring-gray-200 text-white font-semibold h-10 w-full px-7 py-4 flex items-center justify-center gap-2 transition duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <g
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path
                    fill="none"
                    strokeDasharray="14"
                    strokeDashoffset="14"
                    d="M6 19h12"
                  >
                    <animate
                      fill="freeze"
                      attributeName="stroke-dashoffset"
                      dur="0.4s"
                      values="14;0"
                    />
                  </path>
                  <path
                    fill="white"
                    d="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                  >
                    <animate
                      attributeName="d"
                      calcMode="linear"
                      dur="1.5s"
                      keyTimes="0;0.7;1"
                      repeatCount="indefinite"
                      values="M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5;M12 4 h2 v3 h2.5 L12 11.5M12 4 h-2 v3 h-2.5 L12 11.5;M12 4 h2 v6 h2.5 L12 14.5M12 4 h-2 v6 h-2.5 L12 14.5"
                    />
                  </path>
                </g>
              </svg>
              <span style={{ color: "white" }} className="text-xs lg:text-base">
                Get Demo Downloads
              </span>
            </Button>
          ) : (
            <>
              <Link
                className="w-full"
                href={`https://certsgang.com${pdfDownloadLink}`}
              >
                <Button className="bg-indigo-600 rounded-full hover:bg-indigo-800 focus:ring-4 text-xs lg:text-base focus:ring-gray-200 text-white font-semibold h-10 w-full px-7 py-4 flex items-center justify-center gap-2 transition duration-200">
                  Download PDF
                </Button>
              </Link>
              <Link
                className="w-full"
                href={`https://certsgang.com${teDownloadLink}`}
              >
                <Button className="bg-indigo-600 rounded-full hover:bg-indigo-800 focus:ring-4 mt-4 text-xs lg:text-base focus:ring-gray-200 text-white font-semibold h-10 w-full px-7 py-4 flex items-center justify-center gap-2 transition duration-200">
                  Download Test Engine
                </Button>
              </Link>
            </>
          )}
          <Box paddingX={3} paddingBottom={2}>
          <Typography
            variant="caption"
            className="text-center text-xs lg:text-base"
            color="error"
            display="block"
          >
            (We will send your demo download links to your email address)
          </Typography>
          <Typography
            variant="caption"
            className="text-center text-xs lg:text-base mt-2"
            color="danger"
            display="block"
          >
            ** We value your privacy. We will not share your email address.
          </Typography>
        </Box>
        </DialogContent>
        <DialogActions className="flex flex-col px-8"></DialogActions>
        
      </Dialog>
      <button className="w-full">
        <button
          onClick={handleDialogOpen}
          className="inline-block rounded-2xl px-4 w-full py-4 text-center text-white font-bold opacity-90 border-2 border-red-300 bg-red-500 hover:bg-red-600 bg-opacity-90 hover:bg-opacity-90 transition duration-200"
        >
          Download Free Demo
        </button>
      </button>
    </>
  );
};

export default DemoDownload;
