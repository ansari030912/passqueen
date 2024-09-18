"use client";
import withAuth from "@/app/auth/RouterAuth";
import { X_API_Key } from "@/app/URL's/Api_X_Key";
import { Base_URL } from "@/app/URL's/Base_URL";
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import { Icon } from "@iconify/react";
import {
  Box,
  Card,
  IconButton,
  Snackbar,
  SnackbarContent,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useEffect, useState } from "react";

const TeAccess = ({ params }) => {
  const [teAccess, setTeAccess] = useState({});
  const [copiedKeyIndex, setCopiedKeyIndex] = useState(-1);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyToClipboard = (key, index) => {
    navigator.clipboard.writeText(key);
    setCopiedKeyIndex(index);
    setSnackbarOpen(true);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  useEffect(() => {
    const fetchData = async () => {
      if (typeof window !== "undefined") {
        const loginResponse = JSON.parse(localStorage.getItem("loginResponse"));

        if (loginResponse) {
          try {
            const response = await axios.get(
              `${Base_URL}/v1/account/te-access/${params.id_one}/${params.id_two}/${params.id_three}`,
              {
                headers: {
                  "x-api-key": X_API_Key,
                  Authorization: `Bearer ${loginResponse._token}`,
                },
              }
            );

            setTeAccess(response.data);
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
      }
    };

    fetchData();
  }, [params.id_one, params.id_two, params.id_three]);

  return (
    <div className="container px-4 my-20 mx-auto">
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <SnackbarContent
          sx={{
            backgroundColor: "green",
          }}
          message={
            <span style={{ display: "flex", alignItems: "center" }}>
              <Icon
                icon="gg:copy"
                width="1.6em"
                height="1.6em"
                style={{ color: "white", marginRight: "4px" }}
              />
              Key copied to clipboard!
            </span>
          }
        />
      </Snackbar>

      <Box
        className="container mx-auto"
        sx={{
          mt: "10px",
          py: "20px",
          borderRadius: "4px",
        }}
      >
        <Typography
          lineHeight={"30px"}
          variant="h2"
          fontSize={20}
          className="text-gray-600"
          fontWeight={600}
        >
          <b className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {teAccess.exam_code} {teAccess.exam_vendor}{" "}
            {teAccess.exam_name && (
              <>
                <span className="text-gray-500 text-2xl">" </span>
                <b>{teAccess.exam_name}</b>
                <span className="text-gray-500 text-2xl"> "</span>
              </>
            )}
          </b>
        </Typography>
      </Box>
      {teAccess.exam_code && (
        <Box>
          <div
            className="text-blue-500 text-xl font-bold mb-2"
            fontWeight={600}
          >
            How To Use Test Engine Access?
          </div>
          <i
            className="text-gray-500 font-semibold max-w-7xl mb-4"
            fontWeight={600}
          >
            <span className="text-red-500 font-bold">NOTE</span> : Download the
            PassQueen Test Engine Simulator and install it, then download the
            premium .passqueen file using above yellow button and you will get
            .zip file, unzip it, and add it to PassQueen Test Engine Simulator.
            Activate the premium .passqueen file with above purchase and
            activation keys.
          </i>
        </Box>
      )}
      {teAccess.keys && teAccess.keys.length > 0 && (
        <Box
          className="container mx-auto max-w-8xl shadow-xl"
          sx={{
            border: "0px",
            borderRadius: "0px",
            marginTop: "10px",
            paddingY: "20px",
            paddingX: "20px",
            bgcolor: "white",
            mt: "10px",
          }}
        >
          {teAccess.keys.map((item, i) => (
            <>
              <Typography fontWeight={600} className="text-blue-500">
                Activation & Purchase Key {i + 1}
              </Typography>
              <Typography className="text-red-500 font-bold">
                <i>
                  {item.activation_key_used ? "This key is already used!" : ""}
                </i>
              </Typography>
              <TextField
                size="small"
                variant="outlined"
                // label={"Activation Keys"}
                value={`${item.purchase_key}|${item.activation_key}`}
                disabled={item.activation_key_used ? true : false}
                fullWidth
                InputProps={{
                  readOnly: true,
                  endAdornment: (
                    <IconButton
                      onClick={() =>
                        handleCopyToClipboard(
                          `${item.purchase_key}|${item.activation_key}`,
                          i
                        )
                      }
                    >
                      <Icon
                        icon="mingcute:copy-line"
                        width="1em"
                        height="1em"
                        style={{ color: "#545e6b" }}
                      />
                    </IconButton>
                  ),
                }}
                sx={{
                  marginBottom: "10px",
                  marginTop: "10px",
                  boxShadow: "inset 0px 0px 8px rgba(0, 0, 0, 0.2)",
                  color: "#0070",
                  fontWeight: "bold",
                }}
              />
            </>
          ))}
        </Box>
      )}
      {!teAccess.keys && (
        <section className="h-80 flex flex-col justify-center">
          <div className="text-center">
            <div role="alert">
              <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
                No activation keys available.
              </div>
              <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
                <div
                  className="text-blue-500 text-xl font-bold mb-2"
                  fontWeight={600}
                >
                  How To Use Test Engine Access?
                </div>
                <i
                  className="text-gray-500 font-semibold max-w-7xl mb-4"
                  fontWeight={600}
                >
                  <span className="text-red-500 font-bold">NOTE</span> :
                  Download the PassQueen Test Engine Simulator and install it,
                  then download the premium .passqueen file using above yellow
                  button and you will get .zip file, unzip it, and add it to
                  PassQueen Test Engine Simulator. Activate the premium
                  .passqueen file with above purchase and activation keys.
                </i>
              </div>
            </div>
          </div>
        </section>
      )}

      <Box
        className="container mx-auto max-w-8xl"
        sx={{
          mt: "10px",
          mb: "10px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        {teAccess.te_file && (
          <Link href={`https://certsgang.com${teAccess.te_file}`}>
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group hover:bg-gradient-to-l bg-gradient-to-br from-blue-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0 flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.4em"
                  height="1.4em"
                  className="mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M3.5 13h9a.75.75 0 0 1 .102 1.493l-.102.007h-9a.75.75 0 0 1-.102-1.493zh9zM7.898 1.007L8 1a.75.75 0 0 1 .743.648l.007.102v7.688l2.255-2.254a.75.75 0 0 1 .977-.072l.084.072a.75.75 0 0 1 .072.977l-.072.084L8.53 11.78a.75.75 0 0 1-.976.073l-.084-.073l-3.536-3.535a.75.75 0 0 1 .977-1.133l.084.072L7.25 9.44V1.75a.75.75 0 0 1 .648-.743L8 1z"
                  />
                </svg>
                Download .passqueen File
              </span>
            </button>
          </Link>
        )}
      </Box>
    </div>
  );
};

export default withAuth(TeAccess);
